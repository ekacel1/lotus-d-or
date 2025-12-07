import Link from "next/link";

export const metadata = {
  title: "Livraison & Click & Collect",
  description: "Zones desservies, horaires et partenaires de livraison.",
};

export default function LivraisonPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-4">Livraison & Click & Collect</h1>
      <p className="text-brand-gray/80 max-w-2xl mb-8">
        Commandez à emporter au comptoir, ou faites-vous livrer via nos partenaires.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-medium mb-2">Click & Collect</h2>
          <p className="text-sm text-brand-gray/80">Disponible du lundi au dimanche, 12:00–21:30. Délai moyen: 20–30 min.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-medium mb-2">Livraison</h2>
          <p className="text-sm text-brand-gray/80">Zones: centre-ville et quartiers adjacents. Délais selon affluence.</p>
          <div className="mt-4 flex gap-3">
            <Link href="#" className="rounded-full border px-4 py-2 text-sm">Commander via Deliveroo</Link>
            <Link href="#" className="rounded-full border px-4 py-2 text-sm">Commander via Uber Eats</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
