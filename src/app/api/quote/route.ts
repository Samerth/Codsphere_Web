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

// Service type labels
const serviceTypeLabels: Record<string, string> = {
  "local-moving": "Local Moving",
  "long-distance": "Long Distance Moving",
  commercial: "Commercial Moving",
  "packing-only": "Packing Services Only",
  storage: "Storage",
  "junk-removal": "Junk Removal",
};

// Property type labels
const propertyTypeLabels: Record<string, string> = {
  apartment: "Apartment",
  house: "House",
  condo: "Condo",
  townhouse: "Townhouse",
  office: "Office",
  storage: "Storage Unit",
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in 15 minutes." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Extract form data
    const {
      serviceType,
      moveDate,
      flexibility,
      fromAddress,
      fromCity,
      fromState,
      fromZip,
      toAddress,
      toCity,
      toState,
      toZip,
      propertyType,
      bedrooms,
      squareFootage,
      hasStairs,
      hasElevator,
      specialItems,
      packingService,
      storageNeeded,
      storageDuration,
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      additionalNotes,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !serviceType) {
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

    // Sanitize inputs
    const sanitize = (str: string) => str?.replace(/[<>]/g, "") || "";
    const sanitizedFirstName = sanitize(firstName);
    const sanitizedLastName = sanitize(lastName);
    const sanitizedNotes = sanitize(additionalNotes);
    const fullName = `${sanitizedFirstName} ${sanitizedLastName}`;

    // Format move date
    const formattedMoveDate = moveDate
      ? new Date(moveDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not specified";

    // Current date/time
    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Vancouver",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Format special items
    const specialItemsText =
      specialItems && specialItems.length > 0 ? specialItems.join(", ") : "None specified";

    // Email to SwiftMove team (Admin)
    const adminEmail = {
      to: process.env.COMPANY_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "SwiftMove Quote Request",
      },
      replyTo: email,
      subject: `🚚 New Quote Request: ${serviceTypeLabels[serviceType] || serviceType} - ${fullName}`,
      text: `
New Quote Request from SwiftMove Website

CONTACT INFORMATION
-------------------
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Preferred Contact: ${preferredContact || "Any"}

SERVICE DETAILS
---------------
Service Type: ${serviceTypeLabels[serviceType] || serviceType}
Move Date: ${formattedMoveDate}
Date Flexibility: ${flexibility || "Not specified"}

MOVING FROM
-----------
Address: ${fromAddress || "Not provided"}
City: ${fromCity}, ${fromState} ${fromZip}

MOVING TO
---------
Address: ${toAddress || "Not provided"}
City: ${toCity}, ${toState} ${toZip}

PROPERTY DETAILS
----------------
Property Type: ${propertyTypeLabels[propertyType] || propertyType}
Bedrooms: ${bedrooms || "Not specified"}
Square Footage: ${squareFootage || "Not specified"}
Stairs: ${hasStairs || "Not specified"}
Elevator: ${hasElevator || "Not specified"}
Special Items: ${specialItemsText}

ADDITIONAL SERVICES
-------------------
Packing Service: ${packingService || "Not specified"}
Storage Needed: ${storageNeeded || "No"}
${storageNeeded === "yes" ? `Storage Duration: ${storageDuration || "Not specified"}` : ""}

ADDITIONAL NOTES
----------------
${sanitizedNotes || "None"}

---
Submitted: ${timestamp}
Reply directly to this email to respond to ${fullName}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container { 
      max-width: 650px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); 
      color: white; 
      padding: 30px; 
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
      color: #F5A623;
    }
    .header p {
      margin: 10px 0 0 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .content { 
      background: #f7f9fc; 
      padding: 30px; 
      border-radius: 0 0 12px 12px;
      border: 1px solid #e1e4e8;
    }
    .section {
      margin-bottom: 25px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #3B82F6;
    }
    .section-title {
      font-weight: 700;
      color: #3B82F6;
      margin-bottom: 15px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .field { 
      margin-bottom: 10px;
    }
    .label { 
      font-weight: 600; 
      color: #586069;
      font-size: 12px;
      display: inline;
    }
    .value { 
      color: #24292e;
      font-size: 14px;
      display: inline;
      margin-left: 5px;
    }
    .highlight {
      background: #FEF3C7;
      border-left-color: #F5A623;
    }
    .locations-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .location-box {
      background: #f8fafc;
      padding: 15px;
      border-radius: 6px;
    }
    .location-label {
      font-weight: 700;
      color: #F5A623;
      font-size: 12px;
      margin-bottom: 8px;
    }
    .notes-box {
      background: #f8fafc;
      padding: 15px;
      border-radius: 6px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer { 
      text-align: center; 
      margin-top: 25px; 
      font-size: 12px; 
      color: #586069;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
    }
    .reply-note {
      background: #DBEAFE;
      border: 1px solid #3B82F6;
      padding: 12px;
      border-radius: 6px;
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #1E40AF;
    }
    .service-badge {
      display: inline-block;
      background: #F5A623;
      color: #000;
      padding: 5px 12px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 12px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🚚 New Quote Request</h2>
      <p>SwiftMove Website</p>
      <span class="service-badge">${serviceTypeLabels[serviceType] || serviceType}</span>
    </div>
    
    <div class="content">
      <!-- Contact Information -->
      <div class="section highlight">
        <div class="section-title">📞 Contact Information</div>
        <div class="field">
          <span class="label">Name:</span>
          <span class="value"><strong>${fullName}</strong></span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></span>
        </div>
        <div class="field">
          <span class="label">Phone:</span>
          <span class="value"><a href="tel:${phone}" style="color: #3B82F6;">${phone}</a></span>
        </div>
        <div class="field">
          <span class="label">Preferred Contact:</span>
          <span class="value">${preferredContact || "Any"}</span>
        </div>
      </div>
      
      <!-- Service Details -->
      <div class="section">
        <div class="section-title">📋 Service Details</div>
        <div class="field">
          <span class="label">Service Type:</span>
          <span class="value"><strong>${serviceTypeLabels[serviceType] || serviceType}</strong></span>
        </div>
        <div class="field">
          <span class="label">Move Date:</span>
          <span class="value">${formattedMoveDate}</span>
        </div>
        <div class="field">
          <span class="label">Date Flexibility:</span>
          <span class="value">${flexibility || "Not specified"}</span>
        </div>
      </div>
      
      <!-- Locations -->
      <div class="section">
        <div class="section-title">📍 Locations</div>
        <div class="locations-grid">
          <div class="location-box">
            <div class="location-label">MOVING FROM</div>
            <div>${fromAddress || ""}</div>
            <div><strong>${fromCity}, ${fromState} ${fromZip}</strong></div>
          </div>
          <div class="location-box">
            <div class="location-label" style="color: #3B82F6;">MOVING TO</div>
            <div>${toAddress || ""}</div>
            <div><strong>${toCity}, ${toState} ${toZip}</strong></div>
          </div>
        </div>
      </div>
      
      <!-- Property Details -->
      <div class="section">
        <div class="section-title">🏠 Property Details</div>
        <div class="field">
          <span class="label">Property Type:</span>
          <span class="value">${propertyTypeLabels[propertyType] || propertyType || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Bedrooms:</span>
          <span class="value">${bedrooms || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Square Footage:</span>
          <span class="value">${squareFootage || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Stairs:</span>
          <span class="value">${hasStairs || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Elevator:</span>
          <span class="value">${hasElevator || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Special Items:</span>
          <span class="value">${specialItemsText}</span>
        </div>
      </div>
      
      <!-- Additional Services -->
      <div class="section">
        <div class="section-title">➕ Additional Services</div>
        <div class="field">
          <span class="label">Packing Service:</span>
          <span class="value">${packingService || "Not specified"}</span>
        </div>
        <div class="field">
          <span class="label">Storage Needed:</span>
          <span class="value">${storageNeeded || "No"}</span>
        </div>
        ${
          storageNeeded === "yes"
            ? `
        <div class="field">
          <span class="label">Storage Duration:</span>
          <span class="value">${storageDuration || "Not specified"}</span>
        </div>
        `
            : ""
        }
      </div>
      
      <!-- Additional Notes -->
      ${
        sanitizedNotes
          ? `
      <div class="section">
        <div class="section-title">💬 Additional Notes</div>
        <div class="notes-box">${sanitizedNotes}</div>
      </div>
      `
          : ""
      }
      
      <div class="reply-note">
        💡 <strong>Tip:</strong> Hit "Reply" to respond directly to ${fullName}
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Received:</strong> ${timestamp}</p>
      <p>This quote request was submitted from the SwiftMove website</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Auto-reply to customer
    const customerEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "SwiftMove",
      },
      subject: `✅ We've Received Your Quote Request - SwiftMove`,
      text: `
Dear ${sanitizedFirstName},

Thank you for requesting a quote from SwiftMove! We've received your request and our team is already working on preparing a detailed estimate for you.

WHAT HAPPENS NEXT?
------------------
1. Our team will review your moving requirements
2. We'll prepare a customized quote based on your needs
3. You'll receive your detailed estimate within 24 hours
4. We'll contact you via ${preferredContact || "your preferred method"} to discuss

YOUR REQUEST SUMMARY
--------------------
Service Type: ${serviceTypeLabels[serviceType] || serviceType}
Move Date: ${formattedMoveDate}
From: ${fromCity}, ${fromState}
To: ${toCity}, ${toState}
Property: ${bedrooms || ""} ${propertyTypeLabels[propertyType] || propertyType}

If you have any urgent questions or need to make changes to your request, please don't hesitate to call us at 800.720.0411.

We look forward to helping with your move!

Best regards,
The SwiftMove Team

--
SwiftMove - Professional Moving Services
Phone: 800.720.0411
Website: www.swiftmove.com

This is an automated confirmation. Please do not reply to this email.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); 
      color: white; 
      padding: 40px 30px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      color: #F5A623;
    }
    .header p {
      margin: 15px 0 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .check-icon {
      width: 60px;
      height: 60px;
      background: #F5A623;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }
    .content { 
      background: #ffffff; 
      padding: 40px 30px;
      border: 1px solid #e1e4e8;
      border-top: none;
    }
    .steps {
      background: #f8fafc;
      padding: 25px;
      border-radius: 8px;
      margin: 25px 0;
    }
    .steps h3 {
      margin: 0 0 15px 0;
      color: #3B82F6;
      font-size: 16px;
    }
    .step {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    .step-number {
      width: 24px;
      height: 24px;
      background: #3B82F6;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .summary-box {
      background: #FEF3C7;
      border: 1px solid #F5A623;
      padding: 20px;
      border-radius: 8px;
      margin: 25px 0;
    }
    .summary-box h3 {
      margin: 0 0 15px 0;
      color: #92400E;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .summary-item {
      margin-bottom: 8px;
      font-size: 14px;
    }
    .summary-label {
      color: #92400E;
      font-weight: 600;
    }
    .cta-section {
      text-align: center;
      margin: 30px 0;
      padding: 25px;
      background: #f8fafc;
      border-radius: 8px;
    }
    .cta-section p {
      margin: 0 0 15px 0;
      color: #586069;
    }
    .cta-button {
      display: inline-block;
      background: #3B82F6;
      color: white;
      padding: 12px 30px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
    }
    .footer { 
      background: #1a1a1a;
      color: white;
      text-align: center; 
      padding: 30px;
      border-radius: 0 0 12px 12px;
    }
    .footer p {
      margin: 5px 0;
      font-size: 14px;
    }
    .footer a {
      color: #F5A623;
      text-decoration: none;
    }
    .footer .disclaimer {
      margin-top: 20px;
      font-size: 11px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="check-icon">✓</div>
      <h1>Quote Request Received!</h1>
      <p>Thank you for choosing SwiftMove</p>
    </div>
    
    <div class="content">
      <p>Dear ${sanitizedFirstName},</p>
      
      <p>Thank you for requesting a quote from <strong>SwiftMove</strong>! We've received your request and our team is already working on preparing a detailed estimate tailored to your specific needs.</p>
      
      <div class="steps">
        <h3>📋 What Happens Next?</h3>
        <div class="step">
          <span class="step-number">1</span>
          <span>Our team will carefully review your moving requirements</span>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <span>We'll prepare a customized quote based on your specific needs</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span>You'll receive your detailed estimate within <strong>24 hours</strong></span>
        </div>
        <div class="step">
          <span class="step-number">4</span>
          <span>We'll contact you to discuss and answer any questions</span>
        </div>
      </div>
      
      <div class="summary-box">
        <h3>📦 Your Request Summary</h3>
        <div class="summary-item">
          <span class="summary-label">Service:</span> ${serviceTypeLabels[serviceType] || serviceType}
        </div>
        <div class="summary-item">
          <span class="summary-label">Move Date:</span> ${formattedMoveDate}
        </div>
        <div class="summary-item">
          <span class="summary-label">From:</span> ${fromCity}, ${fromState}
        </div>
        <div class="summary-item">
          <span class="summary-label">To:</span> ${toCity}, ${toState}
        </div>
        <div class="summary-item">
          <span class="summary-label">Property:</span> ${bedrooms || ""} ${propertyTypeLabels[propertyType] || propertyType || ""}
        </div>
      </div>
      
      <div class="cta-section">
        <p>Have urgent questions or need to make changes?</p>
        <a href="tel:8007200411" class="cta-button">📞 Call Us: 800.720.0411</a>
      </div>
      
      <p>We look forward to helping make your move as smooth and stress-free as possible!</p>
      
      <p>Best regards,<br><strong>The SwiftMove Team</strong></p>
    </div>
    
    <div class="footer">
      <p><strong>SwiftMove</strong> - Professional Moving Services</p>
      <p>📞 <a href="tel:8007200411">800.720.0411</a> | 🌐 <a href="https://www.swiftmove.com">www.swiftmove.com</a></p>
      <p class="disclaimer">This is an automated confirmation email. Please do not reply directly to this message.</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send both emails
    await sgMail.send(adminEmail);
    await sgMail.send(customerEmail);

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully! Check your email for confirmation.",
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
          message: "Email service configuration error. Please call us directly at 800.720.0411",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote request. Please try again or call us at 800.720.0411",
      },
      { status: 500 },
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "Quote API is running",
    sendgrid: !!process.env.SENDGRID_API_KEY,
    sender: !!process.env.SENDGRID_VERIFIED_SENDER,
    company: !!process.env.COMPANY_EMAIL,
  });
}
