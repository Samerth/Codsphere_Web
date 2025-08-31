import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("[CONTACT]", body); // replace with Resend/SendGrid if you like
  return NextResponse.json({ ok: true });
}
