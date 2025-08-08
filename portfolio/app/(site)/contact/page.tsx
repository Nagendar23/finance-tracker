"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const json = await res.json();
    setStatus(json.ok ? "Thanks! I’ll get back to you soon." : json.error || "Something went wrong.");
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form action={onSubmit} className="grid gap-4 max-w-xl">
        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input name="name" className="border rounded px-3 py-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" name="email" className="border rounded px-3 py-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={6} className="border rounded px-3 py-2" required />
        </label>
        <button className="bg-foreground text-background rounded px-4 py-2 w-fit">Send</button>
      </form>
      {status && <p className="text-sm text-muted-foreground mt-3">{status}</p>}
    </section>
  );
}