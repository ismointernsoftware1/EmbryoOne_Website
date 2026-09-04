export interface FeatureCardItem {
  icon: string;
  iconColorClass: "purple" | "iris" | "amethyst";
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  tag?: string;
  title: string;
  description: string;
  features: FeatureCardItem[];
  id?: string;
  class?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  brandName?: string;
  copyrightText?: string;
  links?: FooterLink[];
  class?: string;
}
