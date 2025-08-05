export interface ProcessStep {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly iconClass: string;
  readonly showConnector: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'Consultation',
    description: 'Analyse de vos besoins et objectifs lors d\'un appel de 30-60 minutes entièrement gratuit.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-25.svg",
    iconClass: "items-center bg-blue-50 box-border flex h-20 justify-center w-20 mb-6 mx-auto rounded-2xl",
    showConnector: true
  },
  {
    id: 'creation',
    number: '02',
    title: 'Création',
    description: 'Design et développement de votre landing page optimisée pour maximiser les conversions.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-26.svg",
    iconClass: "items-center bg-green-50 box-border flex h-20 justify-center w-20 mb-6 mx-auto rounded-2xl",
    showConnector: true
  },
  {
    id: 'deployment',
    number: '03',
    title: 'Mise en ligne',
    description: 'Déploiement de votre site avec tous les éléments techniques et de suivi intégrés.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-27.svg",
    iconClass: "items-center bg-purple-50 box-border flex h-20 justify-center w-20 mb-6 mx-auto rounded-2xl",
    showConnector: true
  },
  {
    id: 'delivery',
    number: '04',
    title: 'Livraison',
    description: 'Remise de votre site fini avec formation et support pour assurer votre succès.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-28.svg",
    iconClass: "items-center bg-orange-50 box-border flex h-20 justify-center w-20 mb-6 mx-auto rounded-2xl",
    showConnector: false
  }
] as const;
