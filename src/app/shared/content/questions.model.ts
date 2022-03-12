export interface Question {
  title: string;
  answers: Answer[];
  number: number;
}

export interface Answer {
  content: string;
  selected?: boolean;
}

export const bustersQuestions: Question[] = [
  {
    title: 'Ta vision de la société idéale  ?',
    answers: [
      { content: "Une entreprise à côté de chez moi, qui me drive dans mes évolutions" },
      { content: "La société m’importe peu, tant que la stack et les collègues sont cools" },
      { content: "Elle n’existe pas et ma curiosité me poussera toujours à vouloir découvrir de nouveaux projets" },
      { content: "Une société à taille humaine sur laquelle j’aurais un impact et des responsabilités" }
    ],
    number: 1
  },
  {
    title: 'Le code :',
    answers: [
      { content: "C’est un art : comme la potion magique, je suis tombé dedans tout petit " },
      { content: "C’est mon métier : j’ai découvert ça à l’école, ça m’amuse du lundi au vendredi " },
      { content: "C’est ce qui me permet de construire : si j’avais su en faire plus tôt, je n’aurais pas joué aux Lego " },
      { content: "Évident : c’est un truc qui protège les coffres forts" }
    ],
    number: 2
  },
  {
    title: 'Pour toi une communauté c’est :',
    answers: [
      { content: "Un forum ⇒ Un monde de personnes qui peuvent m’aider quand j’en ai besoin" },
      { content: "Des copains ⇒ Un groupe de potes avec qui je peux parler de sujets communs et boire des coups" },
      { content: "Un clan ⇒ Un ensemble fort qui se tire vers le haut mais qui nécessite que chaque membre y contribue" },
      { content: "Un réseau ⇒ Un moyen d’avoir accès aux infos que je n’ai pas qu’elles soient techniques, relatives au marché, ou autres" }
    ],
    number: 3
  }
]
