"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      try { localStorage.setItem("contact:last", JSON.stringify(data)); } catch {}
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      setSent(res.ok);
    } catch {}
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-black p-6 grid gap-3 text-black dark:text-white">
          {sent ? (
            <div>Merci, votre message a été envoyé.</div>
          ) : (
            <>
              <label className="grid gap-1 text-sm">Nom<input name="name" required className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2" /></label>
              <label className="grid gap-1 text-sm">Email<input name="email" type="email" required className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2" /></label>
              <label className="grid gap-1 text-sm">Message<textarea name="message" rows={5} required className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2" /></label>
              <button className="rounded-full bg-brand-red text-white px-5 py-2 text-sm w-max">Envoyer</button>
            </>
          )}
        </form>
        <div className="space-y-4 text-sm text-black dark:text-white">
          <p>Rue du Marché 12, [Ville] 1000, Belgique — Accès PMR.</p>
          <p>Tél: +32 2 000 00 00 • Email: contact@lotusdor.be</p>
          <div className="aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/20 bg-white dark:bg-black">
            <iframe
              title="Carte Google Maps — Le Lotus d’Or"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.149!2d4.3517!3d50.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sBruxelles!5e0!3m2!1sfr!2sbe!4v1700000000000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
