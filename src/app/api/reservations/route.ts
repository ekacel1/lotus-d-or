import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // In real setup, send email / save to DB / integrate provider
    const webhookRes = await fetch("https://n8n.ekawetech.cloud/webhook/8045b228-47d7-4757-8dc8-3946df3461a0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!webhookRes.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, received: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
