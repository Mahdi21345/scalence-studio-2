export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'why-prolanding',
    question: 'Pourquoi choisir ProLanding plutôt qu\'un freelance ?',
    answer: 'Notre approche unique avec maquette gratuite avant achat, livraison garantie en 24h et processus transparent nous différencie des freelances traditionnels.'
  },
  {
    id: 'delivery-time',
    question: 'Le délai de 24h est-il vraiment réaliste ?',
    answer: 'Oui, grâce à notre processus optimisé et notre équipe dédiée, nous livrons votre landing page en moins de 24h après validation de la maquette et paiement.'
  },
  {
    id: 'modifications',
    question: 'Puis-je modifier mon site après livraison ?',
    answer: 'Oui, une révision gratuite est incluse. Les modifications supplémentaires sont facturées 30€ par modification.'
  },
  {
    id: 'satisfaction',
    question: 'Que se passe-t-il si je ne suis pas satisfait ?',
    answer: 'Si le résultat final ne correspond pas à la maquette validée, nous remboursons intégralement. Votre satisfaction est garantie.'
  },
  {
    id: 'hosting',
    question: 'Fournissez-vous l\'hébergement ?',
    answer: 'Oui, l\'hébergement est inclus dans notre offre, ainsi que le certificat SSL automatique pour la sécurité de votre site.'
  },
  {
    id: 'domain',
    question: 'Que se passe-t-il pour le nom de domaine ?',
    answer: 'Nous offrons un nom de domaine gratuit pendant 1 an avec votre landing page. Vous en restez propriétaire.'
  }
] as const;
