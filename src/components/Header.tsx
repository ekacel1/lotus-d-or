"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/menu", label: "Menu" },
  { href: "/galerie", label: "Galerie" },
  { href: "/livraison", label: "Livraison" },
  { href: "/avis", label: "Avis" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-black/70 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Le Lotus d'Or" width={28} height={28} />
          <span className="font-display text-lg tracking-tight text-brand-gray dark:text-white">Le Lotus d’Or</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-brand-gray/80 hover:text-brand-gray dark:text-white/80 dark:hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href="/reservations" className="inline-flex items-center rounded-full bg-brand-red text-white px-4 py-2 text-sm hover:opacity-90 transition">
              Réserver
            </Link>
          </div>
          <button aria-label="Ouvrir le menu" className="md:hidden inline-flex items-center p-2" onClick={() => setOpen((v) => !v)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white dark:bg-black">
          <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-brand-gray dark:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/reservations" className="inline-flex items-center justify-center rounded-full bg-brand-red text-white px-4 py-2 text-sm mt-2" onClick={() => setOpen(false)}>
              Réserver
            </Link>
            <div className="pt-3">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
