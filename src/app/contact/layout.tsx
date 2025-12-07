import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Le Lotus d’Or: horaires, téléphone, email et accès PMR.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
