import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";

export const runtime = "nodejs";

type Lead = { name: string; phone: string; area?: string; diet?: string; source?: string; website?: string };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Lead;
  try { body = (await req.json()) as Lead; } catch { return NextResponse.json({ error: "bad_json" }, { status: 400 }); }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot: pretend success, store nothing

  const lead = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 20).replace(/[^\d+]/g, ""),
    area: clean(body.area, 80),
    diet: ["jain", "vegan", "veg"].includes(clean(body.diet, 10)) ? clean(body.diet, 10) : "",
    source: clean(body.source, 200),
    ua: req.headers.get("user-agent")?.slice(0, 200) || "",
    at: new Date().toISOString(),
  };
  if (!lead.name || lead.phone.replace(/\D/g, "").length < 8) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const jobs: Promise<unknown>[] = [];

  // 1) Generic JSON webhook: Google Apps Script, Make, Zapier, n8n, Sheet.best, etc.
  if (process.env.INTEREST_WEBHOOK_URL) {
    jobs.push(fetch(process.env.INTEREST_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) })
      .then((r) => { if (!r.ok) throw new Error(`webhook ${r.status}`); }));
  }
  // 2) Email notification via Resend
  if (process.env.RESEND_API_KEY && process.env.INTEREST_NOTIFY_EMAIL) {
    jobs.push(fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.INTEREST_FROM_EMAIL || "Katoro Waitlist <onboarding@resend.dev>",
        to: [process.env.INTEREST_NOTIFY_EMAIL],
        subject: `Waitlist: ${lead.name} (${lead.phone})`,
        text: Object.entries(lead).map(([k, v]) => `${k}: ${v}`).join("\n"),
      }),
    }).then((r) => { if (!r.ok) throw new Error(`resend ${r.status}`); }));
  }
  // 3) Local dev fallback: append to .data/interests.jsonl (gitignored)
  if (jobs.length === 0 && process.env.NODE_ENV !== "production") {
    jobs.push(mkdir(".data", { recursive: true }).then(() => appendFile(".data/interests.jsonl", JSON.stringify(lead) + "\n")));
  }

  if (jobs.length === 0) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const results = await Promise.allSettled(jobs);
  if (results.every((r) => r.status === "rejected")) {
    console.error("interest: all backends failed", results);
    return NextResponse.json({ error: "store_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
