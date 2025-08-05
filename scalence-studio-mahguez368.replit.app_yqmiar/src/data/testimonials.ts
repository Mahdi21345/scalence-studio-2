export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly company: string;
  readonly role: string;
  readonly content: string;
  readonly rating: number;
  readonly avatar: string;
  readonly results: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'marc-dubois',
    name: 'Marc Dubois',
    company: 'AutoSport Elite',
    role: 'Directeur Commercial',
    content: 'ProLanding a transformé notre business ! Notre nouvelle landing page a généré 3x plus de leads qualifiés en seulement 2 semaines. Le design est magnifique et parfaitement optimisé.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    results: '+300% de leads'
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    company: 'Luxury Motors',
    role: 'Responsable Marketing',
    content: 'Livraison en 24h comme promis ! La maquette gratuite nous a permis de voir exactement le résultat avant de nous engager. Service exceptionnel et résultats au rendez-vous.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    results: 'Livré en 22h'
  },
  {
    id: 'thomas-bernard',
    name: 'Thomas Bernard',
    company: 'Performance Auto',
    role: 'CEO',
    content: 'Après 6 mois avec notre ancienne landing page qui ne convertissait pas, ProLanding a créé une page qui génère maintenant 15 nouveaux clients par mois. ROI exceptionnel !',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    results: '+15 clients/mois'
  },
  {
    id: 'claire-rousseau',
    name: 'Claire Rousseau',
    company: 'Prestige Automobiles',
    role: 'Directrice',
    content: 'La transparence totale de ProLanding nous a convaincus. Voir la maquette avant de payer, c\'est révolutionnaire ! Notre CA a augmenté de 40% depuis le lancement.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    results: '+40% de CA'
  },
  {
    id: 'julien-moreau',
    name: 'Julien Moreau',
    company: 'Speed Motors',
    role: 'Fondateur',
    content: 'Design moderne, optimisation parfaite et support réactif. Notre taux de conversion est passé de 2% à 8% ! ProLanding comprend vraiment les enjeux du business automobile.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    results: 'Conversion x4'
  },
  {
    id: 'marie-lefevre',
    name: 'Marie Lefèvre',
    company: 'Elite Racing',
    role: 'Responsable Ventes',
    content: 'Processus simple et efficace. En une semaine, nous avions notre nouvelle landing page opérationnelle. Les résultats ont dépassé toutes nos attentes avec +250% de demandes de devis.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    results: '+250% devis'
  }
] as const;
