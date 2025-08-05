export interface HeroFeature {
  readonly id: string;
  readonly text: string;
  readonly icon: string;
}

export const heroFeatures: HeroFeature[] = [
  {
    id: 'delivery',
    text: 'Livraison garantie en 24h',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-3.svg"
  },
  {
    id: 'consultation',
    text: 'Consultation gratuite 30min-1h',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-4.svg"
  }
] as const;
