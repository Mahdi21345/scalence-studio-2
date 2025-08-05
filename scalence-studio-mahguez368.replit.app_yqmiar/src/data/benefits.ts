export interface Benefit {
  readonly id: string;
  readonly title: string;
  readonly badge: string;
  readonly description: string;
  readonly icon: string;
  readonly iconClass: string;
  readonly iconSize: string;
}

export const benefits: Benefit[] = [
  {
    id: 'conversions',
    title: 'Augmente vos conversions',
    badge: '+200%',
    description: 'Une landing page optimisée peut augmenter vos taux de conversion de 200% à 300% par rapport à un site classique.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-14.svg",
    iconClass: "items-center bg-green-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-green-600 box-border h-8 w-8"
  },
  {
    id: 'targeting',
    title: 'Cible précisément vos prospects',
    badge: 'Focus',
    description: 'Message unique et ciblé qui parle directement aux besoins spécifiques de votre audience.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-15.svg",
    iconClass: "items-center bg-blue-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-blue-600 box-border h-8 w-8"
  },
  {
    id: 'leads',
    title: 'Génère des leads qualifiés',
    badge: 'Qualité',
    description: 'Capture efficacement les informations de prospects intéressés par vos services spécifiques.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-16.svg",
    iconClass: "items-center bg-purple-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-purple-600 box-border h-8 w-8"
  },
  {
    id: 'analytics',
    title: 'Mesure vos performances',
    badge: 'Analytics',
    description: 'Tracking précis pour analyser et optimiser continuellement vos résultats marketing.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-17.svg",
    iconClass: "items-center bg-orange-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-orange-600 box-border h-8 w-8"
  },
  {
    id: 'ux',
    title: "Améliore l'expérience client",
    badge: 'UX',
    description: "Parcours utilisateur simplifié qui guide naturellement vers l'action souhaitée.",
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-18.svg",
    iconClass: "items-center bg-cyan-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-cyan-600 box-border h-8 w-8"
  },
  {
    id: 'credibility',
    title: 'Renforce votre crédibilité',
    badge: 'Trust',
    description: 'Design professionnel qui inspire confiance et positionne votre entreprise comme experte.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-19.svg",
    iconClass: "items-center bg-red-50 box-border flex h-16 justify-center w-16 mb-6 rounded-2xl",
    iconSize: "text-red-600 box-border h-8 w-8"
  }
] as const;
