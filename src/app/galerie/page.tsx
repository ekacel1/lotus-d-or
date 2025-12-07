import FallbackImage from "@/components/FallbackImage";

export const metadata = {
  title: "Galerie",
  description: "Ambiance, plats et équipe — Galerie Le Lotus d’Or.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1974&auto=format&fit=crop",
    alt: "Intérieur moderne, bois clair et lumière naturelle",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop",
    alt: "Dim sum faits main dans un panier vapeur",
  },
  {
    src: "https://images.unsplash.com/photo-1604909052743-d6060ee4a561?q=80&w=2070&auto=format&fit=crop",
    alt: "Canard croustillant dressé sobrement",
  },
  {
    src: "https://images.unsplash.com/photo-1461009209120-103fed170e6f?q=80&w=1974&auto=format&fit=crop",
    alt: "Marché de légumes belges",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop",
    alt: "Portrait du chef en cuisine",
  }
];

export default function GaleriePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-8">Galerie</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
            <FallbackImage src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
