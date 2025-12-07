import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Le Lotus d’Or — Cuisine chinoise, esprit belge",
    template: "%s | Le Lotus d’Or",
  },
  description:
    "Restaurant chinois moderne en Belgique. Recettes familiales revisitées avec des produits belges. Réservez une table ou commandez à emporter.",
  openGraph: {
    title: "Le Lotus d’Or — Cuisine chinoise, esprit belge",
    description:
      "Restaurant chinois moderne en Belgique. Recettes familiales revisitées avec des produits belges.",
    url: "/",
    siteName: "Le Lotus d’Or",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Le Lotus d’Or",
    image: "/logo.svg",
    servesCuisine: ["Chinese", "Asian"],
    url: "https://example.com/",
    telephone: "+32 2 000 00 00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue du Marché 12",
      addressLocality: "[Ville]",
      postalCode: "1000",
      addressCountry: "BE",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "12:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "12:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
    ],
    acceptsReservations: true,
    priceRange: "$$",
    menu: "https://example.com/menu",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 127,
    },
  } as const;

  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-red text-white px-3 py-1 rounded">
          Aller au contenu
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
