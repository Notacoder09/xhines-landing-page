import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/0wjtRiT7deYSBW5zbR8n/webhook-trigger/0bbf8da6-8e5b-4469-95f8-114ee7208002";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const ghlRes = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ ok: true }, { status: ghlRes.ok ? 200 : 502 });
}
