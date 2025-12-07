import Image from "next/image";
import FallbackImage from "@/components/FallbackImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <FallbackImage
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"
            alt="Intérieur de restaurant moderne et lumineux"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-black/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight text-brand-gray dark:text-white">
            Le Lotus d’Or — Cuisine chinoise, esprit belge
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-gray/80 dark:text-white/80 max-w-2xl mx-auto">
            Recettes familiales transmises, produits belges sublimés. Réservez une table.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/reservations" className="rounded-full bg-brand-red text-white px-6 py-3">
              Réserver maintenant
            </Link>
            <Link href="/menu" className="rounded-full border px-6 py-3">
              Voir le menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-2xl">Une histoire de transmission</h2>
          <p className="mt-4 text-brand-gray/80">
            Née d’un coffre à recettes et d’un billet de train, notre table raconte la traversée d’une famille chinoise arrivée en Belgique au début des années 90. Les recettes cantonaises se mêlent à la saisonnalité belge, travaillées avec délicatesse et respect des produits.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FallbackImage src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop" alt="Mains qui façonnent des dim sum" width={600} height={400} className="rounded-lg object-cover w-full h-40 md:h-56" />
          <FallbackImage src="https://images.unsplash.com/photo-1461009209120-103fed170e6f?q=80&w=1974&auto=format&fit=crop" alt="Marché de producteurs belges" width={600} height={400} className="rounded-lg object-cover w-full h-40 md:h-56" />
        </div>
      </section>

      <section className="bg-brand-beige/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display text-2xl mb-8">Best-sellers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Canard croustillant à la pékinoise",
                desc: "Peau caramélisée, sauce aux cinq épices.",
                img: "https://images.unsplash.com/photo-1604909052743-d6060ee4a561?q=80&w=2070&auto=format&fit=crop",
                alt: "Canard croustillant dressé modernement",
              },
              {
                title: "Dim sum du dimanche",
                desc: "Roulés à la main, vapeur douce.",
                img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop",
                alt: "Dim sum en panier vapeur",
              },
              {
                title: "Bœuf au poivre Sichuan & asperges belges",
                desc: "Marinade légère, cuisson au wok.",
                img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop",
                alt: "Sauté de bœuf au wok",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
                <FallbackImage src={p.img} alt={p.alt} width={600} height={400} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-brand-gray dark:text-white">{p.title}</h3>
                  <p className="text-sm text-brand-gray/80 dark:text-white/80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-2xl mb-6">Ils nous recommandent</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Un service chaleureux et des saveurs nettes.", "Une cuisine qui marie finesse et authenticité.", "Meilleure adresse dim sum de la ville !"].map(
            (q, i) => (
              <blockquote key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-zinc-900">
                <p className="text-sm text-brand-gray/90 dark:text-white/90">“{q}”</p>
                <footer className="mt-3 text-xs text-brand-gray/60 dark:text-white/60">Avis client</footer>
              </blockquote>
            )
          )}
        </div>
      </section>

      <section className="bg-brand-beige/40 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-inherit">
          <div className="text-brand-gray/80 dark:text-white/80 text-sm">
            <div>Rue du Marché 12, [Ville] 1000, Belgique</div>
            <div>Lun–Jeu 12:00–22:00 • Ven–Sam 12:00–23:00 • Dim 12:00–21:00</div>
          </div>
          <div className="flex gap-3">
            <Link href="/reservations" className="rounded-full bg-brand-red text-white px-5 py-2 text-sm">
              Réserver
            </Link>
            <Link href="/contact" className="rounded-full border px-5 py-2 text-sm">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
