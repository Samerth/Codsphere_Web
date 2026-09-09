import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Rate limiting
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

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  website?: string;
  industry: string;
  employees?: string;
  monthly_jobs?: string;
  current_tools?: string;
  purpose: string;
  first_pain: string;
  recent_bad_order?: string;
  start_date?: string;
  budget?: string;
  consent: boolean;
}

const industryLabels: Record<string, string> = {
  "print-sign": "Print & Sign",
  "promo-apparel": "Promo & Apparel",
  "custom-fabrication": "Custom Fabrication",
  other: "Other",
};

const purposeLabels: Record<string, string> = {
  diagnostic: "Diagnostic",
  storefront: "Storefront",
  "order-flow": "Order Flow",
  extensions: "Extensions",
  other: "Other",
};

const employeeLabels: Record<string, string> = {
  "1-5": "1–5",
  "6-15": "6–15",
  "16-30": "16–30",
  "31-50": "31–50",
  "50+": "50+",
};

const jobVolumeLabels: Record<string, string> = {
  "under-50": "Under 50",
  "50-100": "50–100",
  "100-250": "100–250",
  "250-500": "250–500",
  "500+": "500+",
};

const budgetLabels: Record<string, string> = {
  "under-10k": "Under $10k",
  "10k-25k": "$10k–$25k",
  "25k-50k": "$25k–$50k",
  "50k+": "$50k+",
  "not-sure": "Not sure yet",
};

function getLabel(value: string | undefined, labels: Record<string, string>): string {
  if (!value) return "—";
  return labels[value] || value;
}

async function syncToCodCRM(data: LeadFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  const apiUrl = process.env.CODCRM_API_URL;
  const apiKey = process.env.CODCRM_API_KEY;

  if (!apiUrl || !apiKey) {
    return { success: false, error: "CRM credentials not configured" };
  }

  try {
    const response = await fetch(`${apiUrl}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${apiKey}`,
      },
      body: JSON.stringify({
        lead_name: data.company,
        email_id: data.email,
        company_name: data.company,
        contact_name: data.name,
        website: data.website || "",
        industry: getLabel(data.industry, industryLabels),
        source: "www_contact",
        notes: `
Purpose: ${getLabel(data.purpose, purposeLabels)}
First Pain: ${data.first_pain}
${data.recent_bad_order ? `Recent Bad Order: ${data.recent_bad_order}` : ""}
Employees: ${getLabel(data.employees, employeeLabels)}
Monthly Jobs: ${getLabel(data.monthly_jobs, jobVolumeLabels)}
Current Tools: ${data.current_tools || "—"}
Start Date: ${data.start_date || "—"}
Budget: ${getLabel(data.budget, budgetLabels)}
        `.trim(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("CodCRM sync failed:", errorText);
      return { success: false, error: `CRM API error: ${response.status}` };
    }

    const result = await response.json();
    return { success: true, id: result.data?.name };
  } catch (error) {
    console.error("CodCRM sync error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in 15 minutes." },
        { status: 429 },
      );
    }

    const body: LeadFormData = await request.json();

    const { name, email, company, website, industry, employees, monthly_jobs, current_tools, purpose, first_pain, recent_bad_order, start_date, budget, consent } = body;

    if (!name || !email || !company || !industry || !purpose || !first_pain) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, message: "Please accept the communications consent." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const sanitize = (str: string) => str.replace(/[<>]/g, "");
    const sanitizedName = sanitize(name);
    const sanitizedCompany = sanitize(company);
    const sanitizedFirstPain = sanitize(first_pain);
    const sanitizedRecentBadOrder = recent_bad_order ? sanitize(recent_bad_order) : "";

    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Vancouver",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    let crmResult: { success: boolean; id?: string; error?: string } = { success: false, error: "Skipped" };
    if (process.env.CODCRM_API_URL && process.env.CODCRM_API_KEY) {
      crmResult = await syncToCodCRM(body);
    }

    const companyEmail = {
      to: process.env.COMPANY_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "CodSphere Lead Form",
      },
      replyTo: email,
      subject: `🎯 New Lead: ${sanitizedCompany} — ${getLabel(purpose, purposeLabels)}`,
      text: `
New lead from codsphere.com/contact

Contact
-------
Name: ${sanitizedName}
Email: ${email}
Company: ${sanitizedCompany}
Website: ${website || "—"}

Company Profile
---------------
Industry: ${getLabel(industry, industryLabels)}
Employees: ${getLabel(employees, employeeLabels)}
Monthly Jobs: ${getLabel(monthly_jobs, jobVolumeLabels)}
Current Tools: ${current_tools || "—"}

Interest
--------
Purpose: ${getLabel(purpose, purposeLabels)}
First Pain: ${sanitizedFirstPain}
Recent Bad Order: ${sanitizedRecentBadOrder || "—"}

Timeline & Budget
-----------------
Start Date: ${start_date || "—"}
Budget: ${getLabel(budget, budgetLabels)}

Metadata
--------
Submitted: ${timestamp}
Source: www_contact
CRM Sync: ${crmResult.success ? `✓ ${crmResult.id}` : `✗ ${crmResult.error}`}

--
Reply directly to respond to ${sanitizedName}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .container { max-width: 640px; margin: 0 auto; }
    .header { 
      background: linear-gradient(135deg, #010b66 0%, #000 100%);
      color: white;
      padding: 32px;
      text-align: center;
    }
    .header h1 { margin: 0 0 8px; font-size: 24px; }
    .header p { margin: 0; opacity: 0.85; font-size: 14px; }
    .content { padding: 32px; background: #fff; }
    .section { margin-bottom: 28px; }
    .section-title { 
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }
    .field { margin-bottom: 12px; }
    .label { font-weight: 500; color: #333; display: inline; }
    .value { color: #1a1a1a; display: inline; }
    .pain-box {
      background: #f8f9fa;
      border-left: 3px solid #010b66;
      padding: 16px;
      margin: 8px 0;
      white-space: pre-wrap;
    }
    .footer {
      background: #f5f5f5;
      padding: 20px 32px;
      font-size: 12px;
      color: #666;
      text-align: center;
    }
    .crm-badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 500;
    }
    .crm-success { background: #d4edda; color: #155724; }
    .crm-pending { background: #fff3cd; color: #856404; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Lead: ${sanitizedCompany}</h1>
      <p>${getLabel(purpose, purposeLabels)} • ${getLabel(industry, industryLabels)}</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Contact</div>
        <div class="field"><span class="label">Name:</span> <span class="value">${sanitizedName}</span></div>
        <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>
        <div class="field"><span class="label">Company:</span> <span class="value">${sanitizedCompany}</span></div>
        <div class="field"><span class="label">Website:</span> <span class="value">${website ? `<a href="${website}">${website}</a>` : "—"}</span></div>
      </div>

      <div class="section">
        <div class="section-title">Company Profile</div>
        <div class="field"><span class="label">Industry:</span> <span class="value">${getLabel(industry, industryLabels)}</span></div>
        <div class="field"><span class="label">Employees:</span> <span class="value">${getLabel(employees, employeeLabels)}</span></div>
        <div class="field"><span class="label">Monthly Jobs:</span> <span class="value">${getLabel(monthly_jobs, jobVolumeLabels)}</span></div>
        <div class="field"><span class="label">Current Tools:</span> <span class="value">${current_tools || "—"}</span></div>
      </div>

      <div class="section">
        <div class="section-title">Interest & Pain Points</div>
        <div class="field"><span class="label">Purpose:</span> <span class="value">${getLabel(purpose, purposeLabels)}</span></div>
        <div class="field"><span class="label">First Pain:</span></div>
        <div class="pain-box">${sanitizedFirstPain}</div>
        ${sanitizedRecentBadOrder ? `
        <div class="field"><span class="label">Recent Bad Order:</span></div>
        <div class="pain-box">${sanitizedRecentBadOrder}</div>
        ` : ""}
      </div>

      <div class="section">
        <div class="section-title">Timeline & Budget</div>
        <div class="field"><span class="label">Start Date:</span> <span class="value">${start_date || "—"}</span></div>
        <div class="field"><span class="label">Budget:</span> <span class="value">${getLabel(budget, budgetLabels)}</span></div>
      </div>
    </div>

    <div class="footer">
      <p>
        <strong>Submitted:</strong> ${timestamp} &nbsp;|&nbsp;
        <strong>Source:</strong> www_contact &nbsp;|&nbsp;
        <span class="crm-badge ${crmResult.success ? "crm-success" : "crm-pending"}">
          CRM: ${crmResult.success ? `✓ ${crmResult.id}` : "Pending manual entry"}
        </span>
      </p>
      <p style="margin-top: 12px;">💡 Reply to this email to respond directly to ${sanitizedName}</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    const autoReplyEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "CodSphere",
      },
      subject: "Thanks for reaching out — we'll review your order flow",
      text: `
Hi ${sanitizedName},

Thank you for telling us about ${sanitizedCompany}'s order flow. We've received your request for a ${getLabel(purpose, purposeLabels).toLowerCase()} conversation.

What happens next:
• We'll review your submission within one business day
• If we think CodSphere can help, we'll schedule a 30-minute call to map your order flow together
• If we're not the right fit, we'll tell you honestly

For your records, here's what you shared:

First pain: ${sanitizedFirstPain}
${sanitizedRecentBadOrder ? `Recent bad order: ${sanitizedRecentBadOrder}` : ""}

If you have any urgent questions, reply to this email or call us at +1 (604) 906-2693.

Best,
The CodSphere Team

--
CodSphere — Products and Custom Software
codsphere.com
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.7;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .container { max-width: 600px; margin: 0 auto; }
    .header { 
      background: linear-gradient(135deg, #010b66 0%, #000 100%);
      color: white;
      padding: 40px 32px;
      text-align: center;
    }
    .header h1 { margin: 0; font-size: 26px; font-weight: 600; }
    .content { padding: 40px 32px; background: #fff; }
    .content p { margin: 0 0 16px; }
    .next-steps {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      margin: 24px 0;
    }
    .next-steps ul { margin: 0; padding-left: 20px; }
    .next-steps li { margin-bottom: 8px; }
    .your-response {
      background: #f0f4ff;
      border-left: 3px solid #010b66;
      padding: 16px;
      margin: 24px 0;
    }
    .your-response h3 { margin: 0 0 8px; font-size: 14px; color: #010b66; }
    .your-response p { margin: 0; font-size: 14px; white-space: pre-wrap; }
    .footer {
      background: #f5f5f5;
      padding: 24px 32px;
      text-align: center;
      font-size: 13px;
      color: #666;
    }
    .footer a { color: #010b66; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for reaching out</h1>
    </div>
    
    <div class="content">
      <p>Hi ${sanitizedName},</p>
      
      <p>Thank you for telling us about <strong>${sanitizedCompany}</strong>'s order flow. We've received your request for a <strong>${getLabel(purpose, purposeLabels).toLowerCase()}</strong> conversation.</p>
      
      <div class="next-steps">
        <strong>What happens next:</strong>
        <ul>
          <li>We'll review your submission within one business day</li>
          <li>If we think CodSphere can help, we'll schedule a 30-minute call to map your order flow together</li>
          <li>If we're not the right fit, we'll tell you honestly</li>
        </ul>
      </div>

      <div class="your-response">
        <h3>Your first pain</h3>
        <p>${sanitizedFirstPain}</p>
      </div>

      ${sanitizedRecentBadOrder ? `
      <div class="your-response">
        <h3>Recent bad order</h3>
        <p>${sanitizedRecentBadOrder}</p>
      </div>
      ` : ""}

      <p>If you have any urgent questions, reply to this email or call us at <a href="tel:+16049062693">+1 (604) 906-2693</a>.</p>

      <p>Best,<br>The CodSphere Team</p>
    </div>

    <div class="footer">
      <p><strong>CodSphere</strong> — Products and Custom Software</p>
      <p><a href="https://codsphere.com">codsphere.com</a></p>
    </div>
  </div>
</body>
</html>
      `,
    };

    await sgMail.send(companyEmail);
    await sgMail.send(autoReplyEmail);

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll review your order flow and respond within one business day.",
      crm_synced: crmResult.success,
    });
  } catch (error: unknown) {
    console.error("Lead form error:", error);

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
          "Failed to submit. Please try again or contact us directly at info@codsphere.ca",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "Lead capture API is running",
    sendgrid: !!process.env.SENDGRID_API_KEY,
    sender: !!process.env.SENDGRID_VERIFIED_SENDER,
    company: !!process.env.COMPANY_EMAIL,
    crm_configured: !!(process.env.CODCRM_API_URL && process.env.CODCRM_API_KEY),
  });
}
