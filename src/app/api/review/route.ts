import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Simple rate limiting
const rateLimitMap = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter((time: number) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in 15 minutes.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, company, service, review, rating } = body;

    // Validate required fields
    if (!name || !email || !service || !review || !rating) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, message: "Please select a valid rating." },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[<>]/g, "");
    const sanitizedName = sanitize(name);
    const sanitizedCompany = company ? sanitize(company) : "";
    const sanitizedService = sanitize(service);
    const sanitizedReview = sanitize(review);

    // Create star rating display
    const starRating = "★".repeat(rating) + "☆".repeat(5 - rating);
    const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
    const ratingText = ratingLabels[rating - 1];

    // Rating color based on score
    const getRatingColor = (r: number) => {
      if (r >= 4) return "#10B981"; // Green for 4-5
      if (r >= 3) return "#F59E0B"; // Amber for 3
      return "#EF4444"; // Red for 1-2
    };
    const ratingColor = getRatingColor(rating);

    // Current date/time in Vancouver timezone
    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Vancouver",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Email to CodSphere team
    const reviewEmail = {
      to: process.env.COMPANY_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "CodSphere Reviews",
      },
      replyTo: email,
      subject: `⭐ New ${rating}-Star Review from ${sanitizedName} | ${sanitizedService}`,
      text: `
New Review Submission - CodSphere

Rating: ${starRating} (${ratingText})
Name: ${sanitizedName}
Email: ${email}
${sanitizedCompany ? `Company: ${sanitizedCompany}` : ""}
Service: ${sanitizedService}
Date: ${timestamp}

Review:
${sanitizedReview}

--
Reply directly to this email to respond to ${sanitizedName}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a2e;
      margin: 0;
      padding: 0;
      background-color: #f0f2f5;
    }
    .wrapper {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      padding: 40px 20px;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .header { 
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5a 100%);
      color: white; 
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
    }
    .header-content {
      position: relative;
      z-index: 1;
    }
    .header-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #33FCFE 0%, #010B66 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 32px;
      box-shadow: 0 10px 30px rgba(51, 252, 254, 0.3);
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 8px 0 0 0;
      opacity: 0.8;
      font-size: 14px;
    }
    .rating-banner {
      background: linear-gradient(135deg, ${ratingColor}15 0%, ${ratingColor}05 100%);
      border-bottom: 3px solid ${ratingColor};
      padding: 30px;
      text-align: center;
    }
    .stars {
      font-size: 42px;
      letter-spacing: 8px;
      color: #FFD700;
      text-shadow: 0 2px 10px rgba(255, 215, 0, 0.4);
      margin-bottom: 10px;
    }
    .rating-label {
      display: inline-block;
      background: ${ratingColor};
      color: white;
      padding: 6px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .content { 
      padding: 40px 30px;
    }
    .section-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #8b8b9e;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, #e2e2e2, transparent);
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-bottom: 30px;
    }
    .info-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f1f8 100%);
      padding: 18px;
      border-radius: 12px;
      border: 1px solid #e8e9f3;
    }
    .info-card.full-width {
      grid-column: span 2;
    }
    .info-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #6b6b80;
      margin-bottom: 6px;
    }
    .info-value {
      font-size: 15px;
      color: #1a1a2e;
      font-weight: 500;
    }
    .info-value a {
      color: #4f46e5;
      text-decoration: none;
    }
    .info-value a:hover {
      text-decoration: underline;
    }
    .review-section {
      margin-top: 10px;
    }
    .review-box {
      background: linear-gradient(135deg, #fafbff 0%, #f5f6fc 100%);
      border: 1px solid #e8e9f3;
      border-left: 4px solid #4f46e5;
      border-radius: 12px;
      padding: 25px;
      position: relative;
    }
    .review-box::before {
      content: '"';
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 60px;
      color: #4f46e5;
      opacity: 0.15;
      font-family: Georgia, serif;
      line-height: 1;
    }
    .review-text {
      font-size: 15px;
      line-height: 1.8;
      color: #2d2d4a;
      white-space: pre-wrap;
      word-wrap: break-word;
      position: relative;
      z-index: 1;
    }
    .action-bar {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border: 1px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin-top: 25px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .action-icon {
      font-size: 20px;
    }
    .action-text {
      font-size: 14px;
      color: #92400e;
    }
    .action-text strong {
      color: #78350f;
    }
    .footer { 
      background: #f8f9fc;
      text-align: center;
      padding: 25px 30px;
      border-top: 1px solid #e8e9f3;
    }
    .footer-time {
      font-size: 13px;
      color: #6b6b80;
      margin-bottom: 8px;
    }
    .footer-brand {
      font-size: 12px;
      color: #9b9bb0;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      color: white;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-content">
          <div class="header-icon">⭐</div>
          <h1>New Customer Review</h1>
          <p>Someone just shared their experience with CodSphere</p>
        </div>
      </div>
      
      <div class="rating-banner">
        <div class="stars">${starRating}</div>
        <div class="rating-label">${ratingText}</div>
      </div>
      
      <div class="content">
        <div class="section-title">Customer Details</div>
        
        <div class="info-grid">
          <div class="info-card">
            <div class="info-label">👤 Name</div>
            <div class="info-value">${sanitizedName}</div>
          </div>
          
          <div class="info-card">
            <div class="info-label">📧 Email</div>
            <div class="info-value">
              <a href="mailto:${email}">${email}</a>
            </div>
          </div>
          
          ${
            sanitizedCompany
              ? `
          <div class="info-card">
            <div class="info-label">🏢 Company</div>
            <div class="info-value">${sanitizedCompany}</div>
          </div>
          `
              : ""
          }
          
          <div class="info-card${sanitizedCompany ? "" : " full-width"}">
            <div class="info-label">🛠️ Service Used</div>
            <div class="info-value"><span class="badge">${sanitizedService}</span></div>
          </div>
        </div>
        
        <div class="review-section">
          <div class="section-title">Review Content</div>
          <div class="review-box">
            <div class="review-text">${sanitizedReview.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        
        <div class="action-bar">
          <span class="action-icon">💡</span>
          <span class="action-text"><strong>Quick Tip:</strong> Hit "Reply" to thank ${sanitizedName} for their feedback</span>
        </div>
      </div>
      
      <div class="footer">
        <div class="footer-time">📅 Received: ${timestamp}</div>
        <div class="footer-brand">CodSphere Review System • codsphere.com</div>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email to admin only
    await sgMail.send(reviewEmail);

    return NextResponse.json({
      success: true,
      message: "Thank you for your review! We appreciate your feedback.",
    });
  } catch (error: unknown) {
    console.error("SendGrid Error:", error);

    // Log detailed error in development
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Full error:",
        JSON.stringify(
          (error as { response?: { body?: unknown } })?.response?.body || error,
          null,
          2,
        ),
      );
    }

    // Check for specific SendGrid errors
    if ((error as { code?: number })?.code === 403) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service configuration error. Please contact us directly at info@codsphere.ca",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit review. Please try again or contact us directly at info@codsphere.ca",
      },
      { status: 500 },
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "Review API is running",
    sendgrid: !!process.env.SENDGRID_API_KEY,
    sender: !!process.env.SENDGRID_VERIFIED_SENDER,
    company: !!process.env.COMPANY_EMAIL,
  });
}
