import Image from "next/image";
import { notFound } from "next/navigation";
import menu from "@/data/menu.json";

export async function generateStaticParams() {
  return menu.categories.map((c: any) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = (menu.categories as any[]).find((c) => c.slug === params.slug);
  return {
    title: cat ? `${cat.title} — Menu` : "Menu",
    description: cat ? cat.intro : "Découvrez notre cuisine.",
  };
}

export default function MenuCategoryPage({ params }: { params: { slug: string } }) {
  const cat = (menu.categories as any[]).find((c) => c.slug === params.slug);
  if (!cat) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl">{cat.title}</h1>
      <p className="text-brand-gray/80 dark:text-white/80 mt-2 max-w-2xl">{cat.intro}</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {cat.items.map((item: any) => (
          <div key={item.title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden">
            <Image
              src={
                item.imageKeyword.includes("duck")
                  ? "https://images.unsplash.com/photo-1604909052743-d6060ee4a561?q=80&w=2070&auto=format&fit=crop"
                  : item.imageKeyword.includes("dumpling") || item.imageKeyword.includes("dim sum")
                  ? "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop"
                  : item.imageKeyword.includes("noodle")
                  ? "https://images.unsplash.com/photo-1603133872878-684f208fb84e?q=80&w=2070&auto=format&fit=crop"
                  : item.imageKeyword.includes("rice")
                  ? "https://images.unsplash.com/photo-1604908177079-097787e32004?q=80&w=2070&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop"
              }
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-brand-gray dark:text-white">{item.title}</h3>
              <p className="text-sm text-brand-gray/80 dark:text-white/80">{item.description}</p>
              {item.allergens?.length ? (
                <p className="text-xs text-brand-gray/60 dark:text-white/60 mt-2">Allergènes: {item.allergens.join(", ")}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
