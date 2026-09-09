import { Resend } from "resend";

export interface EmailPayload {
  to: string;
  from: {
    email: string;
    name: string;
  };
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Array<{
    content: string;
    filename: string;
    contentType?: string;
  }>;
}

export interface ResendErrorResponse {
  statusCode?: number;
  message?: string;
  name?: string;
}

/**
 * Formats a Resend-compatible `from` address string.
 *
 * Rules:
 * - If `envFrom` already contains angle brackets (e.g., "Name <email@x>"),
 *   it is used as-is and `displayName` is ignored. This allows Infra to set
 *   the exact from address via environment variables.
 * - If `envFrom` is a bare email address, returns `${displayName} <${envFrom}>`.
 *
 * @param displayName - The display name to use if envFrom is a bare email
 * @param envFrom - The value from RESEND_FROM_EMAIL (may be bare email or formatted)
 * @returns A valid Resend `from` string
 */
export function formatFromAddress(displayName: string, envFrom: string): string {
  const trimmed = envFrom.trim();

  if (trimmed.includes("<") && trimmed.includes(">")) {
    return trimmed;
  }

  return `${displayName} <${trimmed}>`;
}

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export function getFromAddress(): { email: string; name: string } | null {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) {
    return null;
  }
  return {
    email: fromEmail,
    name: "CodSphere",
  };
}

export function isEmailConfigured(): { configured: boolean; missing: string[] } {
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY) {
    missing.push("RESEND_API_KEY");
  }
  if (!process.env.RESEND_FROM_EMAIL) {
    missing.push("RESEND_FROM_EMAIL");
  }
  return {
    configured: missing.length === 0,
    missing,
  };
}

export function logEmailError(context: string, error: ResendErrorResponse): void {
  const statusCode = error.statusCode || "unknown";
  const errorName = error.name || "UnknownError";
  const errorMessage = error.message || "No message";

  console.error(
    `[Resend ${context}] Status: ${statusCode}, Name: ${errorName}, Message: ${errorMessage}`,
    JSON.stringify(error, null, 2)
  );
}

export async function sendEmail(
  payload: EmailPayload
): Promise<{ success: boolean; id?: string; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { success: false, error: "RESEND_API_KEY not configured" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: formatFromAddress(payload.from.name, payload.from.email),
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      attachments: payload.attachments?.map((att) => ({
        content: Buffer.from(att.content, "base64"),
        filename: att.filename,
        contentType: att.contentType,
      })),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const error = err as ResendErrorResponse;
    return { success: false, error: error.message || "Unknown error" };
  }
}
