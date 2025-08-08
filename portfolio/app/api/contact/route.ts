import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    // TODO: Send via email provider (e.g., Resend) or save to DB
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}