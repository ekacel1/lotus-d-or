export const metadata = {
  title: "Mentions légales",
  description: "Informations légales du site Le Lotus d’Or.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-6">Mentions légales</h1>
      <div className="prose prose-neutral max-w-none">
        <p>Éditeur du site: Le Lotus d’Or, Rue du Marché 12, [Ville] 1000, Belgique.</p>
        <p>Directeur de publication: Mei Lin.</p>
        <p>Hébergement: Vercel / Netlify (selon déploiement).</p>
        <p>Contact: contact@lotusdor.be</p>
      </div>
    </div>
  );
}
