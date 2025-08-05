export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'importance', label: 'Importance', href: '#importance' },
  { id: 'benefits', label: 'Bénéfices', href: '#benefits' },
  { id: 'why-us', label: 'Pourquoi nous', href: '#why-us' },
  { id: 'process', label: 'Processus', href: '#process' },
  { id: 'pricing', label: 'Tarifs', href: '#pricing' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' }
] as const;
