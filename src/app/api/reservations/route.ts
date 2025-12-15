import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    let payload = data;
    try {
      const toISODate = (input: string): string => {
        const s = String(input).trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
        const m = s.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
        if (m) {
          const dd = m[1];
          const mm = m[2];
          const yyyy = m[3];
          return `${yyyy}-${mm}-${dd}`;
        }
        const d = new Date(s);
        if (!isNaN(d.getTime())) {
          const yyyy = d.getUTCFullYear();
          const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
          const dd = String(d.getUTCDate()).padStart(2, "0");
          return `${yyyy}-${mm}-${dd}`;
        }
        return s;
      };
      const toVerboseFrenchDate = (isoDay: string): string => {
        const date = new Date(`${isoDay}T12:00:00Z`);
        return new Intl.DateTimeFormat("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "Europe/Paris",
        }).format(date);
      };
      const raw = (data as any)?.date;
      if (typeof raw === "string" && raw.trim()) {
        const iso = toISODate(raw);
        const verbose = toVerboseFrenchDate(iso);
        payload = { ...(data as any), date: iso, date_verbose: verbose };
      }
    } catch {}
    // In real setup, send email / save to DB / integrate provider
    const webhookRes = await fetch("https://n8n.ekawetech.cloud/webhook/8045b228-47d7-4757-8dc8-3946df3461a0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!webhookRes.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, received: payload }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

