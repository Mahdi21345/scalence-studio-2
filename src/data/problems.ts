export interface Problem {
  readonly id: string;
  readonly icon: string;
  readonly description: string;
  readonly solution: string;
}

export const problems: Problem[] = [
  {
    id: 'professionalism',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-7.svg",
    description: 'Votre site actuel ne reflète pas le professionnalisme de votre entreprise',
    solution: 'Nous créons un design moderne et professionnel qui inspire confiance'
  },
  {
    id: 'competition',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-9.svg",
    description: 'Vous perdez des clients face à la concurrence',
    solution: 'Nous développons un site qui vous différencie et met en valeur vos atouts'
  },
  {
    id: 'time',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-10.svg",
    description: "Vous n'avez pas le temps de vous occuper de votre communication",
    solution: 'Nous livrons une solution clé en main, rapidement'
  },
  {
    id: 'leads',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-11.svg",
    description: 'Votre site ne génère pas assez de contacts qualifiés',
    solution: 'Nous optimisons pour la conversion et génération de leads'
  },
  {
    id: 'mobile',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-12.svg",
    description: "Votre site n'est pas adapté aux mobiles",
    solution: 'Nous garantissons un design responsive parfait sur tous les appareils'
  },
  {
    id: 'budget',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-13.svg",
    description: 'Budget limité pour la communication digitale',
    solution: 'Nous proposons des tarifs adaptés à votre business'
  }
] as const;
