"use client";
import { useState } from "react";

const initial = [
  { name: "Sarah", text: "Un service chaleureux et des saveurs nettes.", rating: 5 },
  { name: "Marc", text: "Une cuisine qui marie finesse et authenticité.", rating: 5 },
  { name: "Lea", text: "Meilleure adresse dim sum de la ville !", rating: 5 },
];

export default function AvisPage() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem("lotus:reviews");
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });

  function addReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const item = {
      name: String(data.get("name") || "Anonyme"),
      text: String(data.get("text") || ""),
      rating: Number(data.get("rating") || 5),
    };
    const next = [item, ...reviews];
    setReviews(next);
    try { localStorage.setItem("lotus:reviews", JSON.stringify(next)); } catch {}
    e.currentTarget.reset();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-4">Avis clients</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          {reviews.map((r: any, i: number) => (
            <blockquote key={i} className="rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-black p-4">
              <div className="text-yellow-600 text-sm">{"★".repeat(r.rating)}</div>
              <p className="text-sm text-black dark:text-white mt-1">“{r.text}”</p>
              <footer className="text-xs text-black/70 dark:text-white/70 mt-1">{r.name}</footer>
            </blockquote>
          ))}
        </div>
        <form onSubmit={addReview} className="rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-black p-6 grid gap-3 text-black dark:text-white">
          <h2 className="font-medium">Laisser un avis</h2>
          <label className="grid gap-1 text-sm">
            Nom (optionnel)
            <input name="name" className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            Votre avis
            <textarea name="text" required rows={4} className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            Note
            <select name="rating" defaultValue={5} className="rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white px-3 py-2">
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <button className="rounded-full bg-brand-red text-white px-5 py-2 text-sm w-max">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
