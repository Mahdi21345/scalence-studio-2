export interface ContactMethod {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly icon: string;
  readonly containerClass: string;
}

export interface FormField {
  readonly name: string;
  readonly label: string;
  readonly type: string;
  readonly placeholder: string;
  readonly required: boolean;
  readonly containerClass: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Contactez-nous directement pour une réponse rapide',
    buttonText: 'Écrire sur WhatsApp',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-35.svg",
    containerClass: "items-start box-border flex"
  },
  {
    id: 'call',
    title: 'Appel gratuit',
    description: 'Réservez un créneau pour discuter de votre projet',
    buttonText: 'Réserver un appel',
    icon: "https://c.animaapp.com/mdw08o4bblBR40/assets/icon-36.svg",
    containerClass: "items-start box-border flex mt-6"
  }
] as const;

export const formFields: FormField[] = [
  {
    name: 'email',
    label: 'Votre email *',
    type: 'email',
    placeholder: 'votre.email@exemple.com',
    required: true,
    containerClass: 'box-border'
  },
  {
    name: 'name',
    label: 'Votre nom *',
    type: 'text',
    placeholder: 'Votre nom complet',
    required: true,
    containerClass: 'box-border mt-6'
  },
  {
    name: 'company',
    label: 'Entreprise',
    type: 'text',
    placeholder: 'Nom de votre entreprise',
    required: false,
    containerClass: 'box-border mt-6'
  },
  {
    name: 'phone',
    label: 'Téléphone',
    type: 'tel',
    placeholder: '06 12 34 56 78',
    required: false,
    containerClass: 'box-border mt-6'
  },
  {
    name: 'message',
    label: 'Votre message *',
    type: 'textarea',
    placeholder: 'Décrivez votre projet, vos besoins, votre secteur d\'activité...',
    required: true,
    containerClass: 'box-border mt-6'
  }
] as const;
