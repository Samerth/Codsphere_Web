import { NextResponse } from "next/server";
import {
  isKnownCodCrmSlug,
  codcrmStatusCheckUrl,
  type CodCrmEmbedKind,
} from "@/lib/codcrm-embeds";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kind = searchParams.get("kind");
  const slug = searchParams.get("slug");

  if (kind !== "form" && kind !== "booking") {
    return NextResponse.json({ ok: false, error: "invalid kind" }, { status: 400 });
  }
  if (!slug || !isKnownCodCrmSlug(kind as CodCrmEmbedKind, slug)) {
    return NextResponse.json({ ok: false, error: "unknown slug" }, { status: 400 });
  }

  try {
    const res = await fetch(codcrmStatusCheckUrl(kind, slug), {
      method: "GET",
      cache: "no-store",
      redirect: "manual",
      headers: { Accept: "application/json, text/html" },
    });
    return NextResponse.json({ ok: res.ok }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: null, error: "unreachable" }, { status: 200 });
  }
}
