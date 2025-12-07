import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservations",
  description: "Réservez une table au Lotus d’Or.",
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
