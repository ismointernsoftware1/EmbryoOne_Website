export type TilePosition =
  | "top-left"
  | "middle-left"
  | "bottom-left"
  | "top-right"
  | "middle-right"
  | "bottom-right";

export interface HeroTile {
  id?: string;
  icon: string;
  label: string;
  sublabel?: string;
  position?: TilePosition;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: string;
  scale?: string;
  duration?: string;
  delay?: string;
}

export interface NetworkPathData {
  id: string;
  name: string;
  d: string;
  signalGradientId: string;
  color: string;
  stopColor1: string;
  stopColor2: string;
  duration: string;
  delay: string;
}

export interface HeroProps {
  eyebrowBadge?: {
    text: string;
    hasDot?: boolean;
  };
  title: string;
  highlightedTitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
    hasArrow?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  tiles?: HeroTile[];
  networkPaths?: NetworkPathData[];
  showNetwork?: boolean;
  showConvergence?: boolean;
  showProductShowcase?: boolean;
  class?: string;
}
