import Link from "next/link";
import Image from "next/image";
import menu from "@/data/menu.json";

export const metadata = {
  title: "Menu",
  description: "Découvrez nos catégories et spécialités — Le Lotus d’Or.",
};

export default function MenuPage() {
  const categories = menu.categories;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-8">Menu</h1>
      <p className="text-brand-gray/80 max-w-2xl mb-8">
        Une carte courte et saisonnière, entre tradition chinoise et produits belges.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/menu/${cat.slug}`} className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 group">
            <div className="h-40 w-full">
              <Image
                src={
                  cat.slug === "dim-sum"
                    ? "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop"
                    : cat.slug === "plats-principaux"
                    ? "https://images.unsplash.com/photo-1604909052743-d6060ee4a561?q=80&w=2070&auto=format&fit=crop"
                    : cat.slug === "nouilles-riz"
                    ? "https://images.unsplash.com/photo-1603133872878-684f208fb84e?q=80&w=2070&auto=format&fit=crop"
                    : cat.slug === "desserts"
                    ? "https://images.unsplash.com/photo-1565744959907-1c9b7128f07d?q=80&w=1974&auto=format&fit=crop"
                    : cat.slug === "boissons"
                    ? "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1974&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop"
                }
                alt={cat.title}
                width={600}
                height={300}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-medium text-brand-gray dark:text-white">{cat.title}</h2>
              <p className="text-sm text-brand-gray/80 dark:text-white/80">{cat.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
