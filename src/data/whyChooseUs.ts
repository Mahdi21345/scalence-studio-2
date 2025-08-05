export interface WhyChooseUsFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly containerClass: string;
  readonly titleClass: string;
}

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    id: 'mockup',
    title: 'Maquette gratuite avant achat',
    description: 'Vous verrez exactement à quoi ressemblera votre site avant de payer. Après notre appel, nous créons une maquette personnalisée gratuite de votre futur site internet.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-21.svg",
    containerClass: "bg-[linear-gradient(to_right_bottom,rgb(239,246,255),rgb(250,245,255))] box-border border-blue-200 p-8 rounded-2xl border-2 border-solid",
    titleClass: "text-blue-900 text-2xl font-bold box-border leading-8 mb-4"
  },
  {
    id: 'delivery',
    title: 'Livraison en 24h garantie',
    description: 'Une fois la maquette validée et le paiement effectué, votre site est livré en moins de 24h. Pas de semaines d\'attente comme ailleurs.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-22.svg",
    containerClass: "bg-[linear-gradient(to_right_bottom,rgb(240,253,244),rgb(236,253,245))] box-border border-green-200 p-8 rounded-2xl border-2 border-solid",
    titleClass: "text-green-900 text-2xl font-bold box-border leading-8 mb-4"
  },
  {
    id: 'transparency',
    title: 'Approche 100% transparente',
    description: 'Pas de surprises, pas de frais cachés. Le prix affiché est le prix final. Vous savez exactement ce que vous obtenez avant même de commencer.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-23.svg",
    containerClass: "bg-[linear-gradient(to_right_bottom,rgb(255,247,237),rgb(255,251,235))] box-border border-orange-200 p-8 rounded-2xl border-2 border-solid",
    titleClass: "text-orange-900 text-2xl font-bold box-border leading-8 mb-4"
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction garantie',
    description: 'Si le résultat final ne correspond pas à la maquette validée, nous remboursons intégralement. Votre satisfaction est notre priorité absolue.',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-24.svg",
    containerClass: "bg-[linear-gradient(to_right_bottom,rgb(236,253,245),rgb(240,253,250))] box-border border-emerald-200 p-8 rounded-2xl border-2 border-solid",
    titleClass: "text-emerald-900 text-2xl font-bold box-border leading-8 mb-4"
  }
] as const;
