export interface PricingFeature {
  readonly id: string;
  readonly text: string;
  readonly containerClass: string;
}

export interface AdditionalService {
  readonly id: string;
  readonly text: string;
  readonly containerClass: string;
}

export const pricingFeatures: PricingFeature[] = [
  {
    id: 'responsive',
    text: 'Landing page responsive sur-mesure',
    containerClass: "items-center box-border flex"
  },
  {
    id: 'design',
    text: 'Design professionnel et moderne',
    containerClass: "items-center box-border flex mt-4"
  },
  {
    id: 'optimization',
    text: 'Optimisation pour la conversion',
    containerClass: "items-center box-border flex mt-4"
  },
  {
    id: 'hosting',
    text: 'Hébergement inclus',
    containerClass: "items-center box-border flex mt-4"
  },
  {
    id: 'ssl',
    text: 'SSL automatique inclus',
    containerClass: "items-center box-border flex"
  },
  {
    id: 'domain',
    text: 'Domaine offert 1 an',
    containerClass: "items-center box-border flex mt-4"
  },
  {
    id: 'revision',
    text: '1 révision gratuite incluse',
    containerClass: "items-center box-border flex mt-4"
  },
  {
    id: 'delivery',
    text: 'Livraison garantie en 24h',
    containerClass: "items-center box-border flex mt-4"
  }
] as const;

export const additionalServices: AdditionalService[] = [
  {
    id: 'modifications',
    text: 'Modifications supplémentaires : 30€/modification',
    containerClass: "text-gray-700 text-sm font-medium items-center box-border flex leading-5"
  },
  {
    id: 'deployment',
    text: 'Déployé automatiquement',
    containerClass: "text-gray-700 text-sm font-medium items-center box-border flex leading-5 mt-2"
  }
] as const;
