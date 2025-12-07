export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données.",
};

export default function PolitiqueConfPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl mb-6">Politique de confidentialité</h1>
      <div className="prose prose-neutral max-w-none">
        <p>Nous collectons les données strictement nécessaires à la gestion des réservations et des contacts.</p>
        <p>Vos informations ne sont pas revendues et sont conservées pendant une durée limitée.</p>
        <p>Vous pouvez exercer vos droits (accès, rectification, suppression) en nous contactant à privacy@lotusdor.be.</p>
      </div>
    </div>
  );
}
