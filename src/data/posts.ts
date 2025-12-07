export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "histoire-du-dim-sum",
    title: "L’histoire du dim sum et sa préparation",
    excerpt: "Le rituel des bouchées vapeur, entre tradition et précision.",
    date: "2025-01-04",
    content: `Les dim sum sont bien plus qu’un plat : un rituel de partage. Au Lotus d’Or, nous roulons nos bouchées chaque matin...`,
  },
  {
    slug: "asperges-belges-et-gingembre",
    title: "Les asperges belges rencontrent le gingembre",
    excerpt: "Quand terroir belge et parfums chinois s’accordent.",
    date: "2025-01-05",
    content: `La saison des asperges en Belgique inspire notre cuisine : poêlées minute avec un filet d’huile de sésame...`,
  },
  {
    slug: "nouvel-an-chinois-au-lotus",
    title: "Célébrer le Nouvel An chinois au Lotus d’Or",
    excerpt: "Menu spécial, animations et traditions revisitées.",
    date: "2025-01-06",
    content: `Le Nouvel An chinois est l’occasion de partager des plats symboliques : raviolis porte-bonheur, poisson vapeur...`,
  },
];
