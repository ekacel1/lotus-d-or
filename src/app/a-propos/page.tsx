import Image from "next/image";

export const metadata = {
  title: "À propos",
  description:
    "Notre histoire, notre philosophie et notre équipe — Le Lotus d’Or, restaurant chinois moderne en Belgique.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl">À propos</h1>
        <p className="mt-3 text-brand-gray/80 max-w-2xl">
          Moderne, authentique, épuré : nous allions la tradition chinoise aux meilleurs produits belges.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-start mb-16">
        <div>
          <h2 className="font-display text-2xl">Notre histoire</h2>
          <div className="mt-4 space-y-4 text-brand-gray/85 leading-relaxed">
            <p>
              Née d’un coffre à recettes et d’un billet de train, l’histoire du Lotus d’Or raconte la traversée d’une famille qui a choisi la Belgique comme terre d’accueil. En 1992, Mei Lin et son frère Liang arrivent avec, dans leurs valises, les parfums de la cuisine de Canton : gingembre frais, huile de sésame toastée et sauces secrètes transmises de mère en fille.
            </p>
            <p>
              Au fil des saisons, Mei Lin tisse des liens avec les maraîchers, apprend le rythme des marchés et découvre la richesse du terroir belge. Les recettes familiales — dim sum roulés à la main, soupes claires infusées, canard croustillant — s’enrichissent d’ingrédients locaux : asperges d’Anvers, miel d’acacia, champignons des Ardennes.
            </p>
            <p>
              Aujourd’hui, Le Lotus d’Or est un lieu où le passé se raconte dans l’assiette et où la Belgique soutient la tradition. Nous proposons une cuisine précise et délicate, un service chaleureux, et une expérience qui célèbre l’échange entre terroirs, générations et histoires.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop" alt="Dim sum faits main" width={600} height={400} className="rounded-lg object-cover w-full h-40 md:h-56" />
          <Image src="https://images.unsplash.com/photo-1461009209120-103fed170e6f?q=80&w=1974&auto=format&fit=crop" alt="Marché de producteurs en Belgique" width={600} height={400} className="rounded-lg object-cover w-full h-40 md:h-56" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl">Notre philosophie</h2>
        <ul className="mt-4 grid md:grid-cols-3 gap-6 text-brand-gray/85 dark:text-white/85">
          <li className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-zinc-900">
            <h3 className="font-medium text-brand-gray dark:text-white">Authenticité</h3>
            <p className="text-sm mt-2 text-brand-gray/80 dark:text-white/80">Respect des gestes, des cuissons et des équilibres propres à la cuisine chinoise.</p>
          </li>
          <li className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-zinc-900">
            <h3 className="font-medium text-brand-gray dark:text-white">Saisonnalité</h3>
            <p className="text-sm mt-2 text-brand-gray/80 dark:text-white/80">Produits belges, circuits courts et carte vivante au rythme des marchés.</p>
          </li>
          <li className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-zinc-900">
            <h3 className="font-medium text-brand-gray dark:text-white">Transmission</h3>
            <p className="text-sm mt-2 text-brand-gray/80 dark:text-white/80">Recettes familiales, savoir-faire partagé, accueil comme à la maison.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">L’équipe</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4">
            <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop" alt="Portrait du chef Mei Lin" width={600} height={400} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-3 font-medium text-brand-gray dark:text-white">Mei Lin — Cheffe</h3>
            <p className="text-sm text-brand-gray/80 dark:text-white/80">Formée à Canton, 20 ans d’expérience en Belgique. Signature : précision et délicatesse.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4">
            <Image src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1974&auto=format&fit=crop" alt="Portrait du manager Liang" width={600} height={400} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-3 font-medium text-brand-gray dark:text-white">Liang — Manager</h3>
            <p className="text-sm text-brand-gray/80 dark:text-white/80">Hospitalité souriante, exigence de service, mémoire de la maison.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4">
            <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1974&auto=format&fit=crop" alt="Portrait du maître de salle" width={600} height={400} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-3 font-medium text-brand-gray dark:text-white">Claire — Maîtresse de salle</h3>
            <p className="text-sm text-brand-gray/80 dark:text-white/80">Accueil, rythme du service, accords mets-thés.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
