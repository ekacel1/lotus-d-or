import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis clients",
  description: "Témoignages et avis — Le Lotus d’Or.",
};

export default function AvisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
