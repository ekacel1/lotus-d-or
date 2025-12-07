import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? post.title : "Blog", description: post?.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl">{post.title}</h1>
      <p className="text-xs text-brand-gray/60 mt-1">{new Date(post.date).toLocaleDateString("fr-BE")}</p>
      <div className="prose prose-neutral mt-6 max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
