import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog / Actualités",
  description: "Articles culinaires, nouveaux plats et événements.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-6">Blog / Actualités</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4">
            <h2 className="font-medium text-brand-gray dark:text-white"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
            <p className="text-xs text-brand-gray/60 dark:text-white/60 mt-1">{new Date(p.date).toLocaleDateString("fr-BE")}</p>
            <p className="text-sm text-brand-gray/80 dark:text-white/80 mt-2">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="text-sm mt-2 inline-block underline">Lire</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
