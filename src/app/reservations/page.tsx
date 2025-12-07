"use client";
import { useState } from "react";

export default function ReservationsPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      // Persist locally for demo
      try { localStorage.setItem("reservation:last", JSON.stringify(payload)); } catch {}
      const res = await fetch("/api/reservations", { method: "POST", body: JSON.stringify(payload) });
      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-4">Réservations</h1>
      <p className="text-brand-gray/80 dark:text-white/80 mb-8">Vous recevrez une confirmation sous 30 min (hors heures de pointe). La table est tenue 15 min après l’heure réservée.</p>

      {status === "ok" ? (
        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 text-brand-gray dark:text-white">Merci ! Votre demande a été reçue. Nous vous confirmons par e-mail / SMS.</div>
      ) : (
        <form className="grid gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-1 text-sm">
              Nom complet
              <input name="name" required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              Email
              <input name="email" type="email" required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="grid gap-1 text-sm">
              Téléphone
              <input name="phone" required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              Date
              <input name="date" type="date" required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              Heure
              <input name="time" type="time" required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="grid gap-1 text-sm">
              Personnes
              <input name="people" type="number" min={1} max={12} required className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm md:col-span-2">
              Allergies (optionnel)
              <input name="allergies" className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
            </label>
          </div>
          <label className="grid gap-1 text-sm">
            Message (optionnel)
            <textarea name="message" rows={4} className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-brand-gray dark:text-white px-3 py-2" />
          </label>
          <div className="flex items-center justify-between text-xs text-brand-gray/70 dark:text-white/70">
            <p>Annulation gratuite jusqu’à 24h avant. Groupes {">"} 8 pers : frais 50% si annulation tardive.</p>
            <button className="rounded-full bg-brand-red text-white px-5 py-2 text-sm">Confirmer ma réservation</button>
          </div>
        </form>
      )}
    </div>
  );
}
