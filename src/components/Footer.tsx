import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10 bg-brand-beige/40 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-display text-brand-gray dark:text-white">Le Lotus d’Or</h3>
          <p className="text-sm text-brand-gray/80 dark:text-white/80">
            Tradition en héritage • Terroir en partage
          </p>
          <p className="text-sm text-brand-gray/80 dark:text-white/80">Rue du Marché 12, [Ville] 1000, Belgique</p>
          <p className="text-sm">Tél: +32 2 000 00 00</p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-brand-gray dark:text-white">Horaires</h4>
          <ul className="text-sm space-y-1 text-brand-gray/80 dark:text-white/80">
            <li>Lun–Jeu: 12:00–22:00</li>
            <li>Ven–Sam: 12:00–23:00</li>
            <li>Dim: 12:00–21:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-brand-gray dark:text-white">Navigation</h4>
          <ul className="text-sm space-y-1 text-brand-gray/80 dark:text-white/80">
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/reservations">Réservations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-brand-gray dark:text-white">Légal</h4>
          <ul className="text-sm space-y-1 text-brand-gray/80 dark:text-white/80">
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-brand-gray/70 dark:text-white/70">
        © {new Date().getFullYear()} Le Lotus d’Or. Tous droits réservés.
      </div>
    </footer>
  );
}
