import type { HeroTile, NetworkPathData, HeroProps } from '../types/hero';

// SVG Icon definitions for the 6 EmbryoOne Domain Nodes
const iconAI = `<svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`;
const iconHardware = `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`;
const iconIoT = `<svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M17 7l-10 10M7 7l10 10"/><circle cx="12" cy="12" r="4"/></svg>`;
const iconAutomation = `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
const iconAnalytics = `<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="4 8 10 4 16 9 22 3"/></svg>`;
const iconConnected = `<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>`;

export const heroData: HeroProps = {
  eyebrowBadge: {
    text: "Next-Gen Real-World AI Platform",
    hasDot: true
  },
  title: "Connect intelligence to the",
  highlightedTitle: "real world",
  description: "Bring AI, hardware, IoT and software together in one intelligent platform built for the real world.",
  primaryCta: {
    label: "Get started",
    href: "#get-started",
    hasArrow: true
  },
  secondaryCta: {
    label: "Book a demo",
    href: "#demo"
  },
  showNetwork: true,
  showConvergence: true,
  showProductShowcase: true
};

export const heroTiles: HeroTile[] = [
  {
    id: "tile-ai",
    label: "AI Intelligence",
    sublabel: "Real-time reasoning",
    icon: iconAI,
    position: "top-left",
    top: "40px",
    left: "2%",
    rotate: "-5deg",
    duration: "8.0s",
    delay: "0s"
  },
  {
    id: "tile-hardware",
    label: "Hardware",
    sublabel: "Physical systems",
    icon: iconHardware,
    position: "middle-left",
    top: "190px",
    left: "3%",
    rotate: "-2deg",
    duration: "8.4s",
    delay: "-1.8s"
  },
  {
    id: "tile-iot",
    label: "IoT",
    sublabel: "Connected devices",
    icon: iconIoT,
    position: "bottom-left",
    top: "340px",
    left: "2%",
    rotate: "-4deg",
    duration: "7.9s",
    delay: "-3.5s"
  },
  {
    id: "tile-automation",
    label: "Automation",
    sublabel: "Automated workflows",
    icon: iconAutomation,
    position: "top-right",
    top: "40px",
    right: "2%",
    rotate: "5deg",
    duration: "8.2s",
    delay: "-0.8s"
  },
  {
    id: "tile-analytics",
    label: "Analytics",
    sublabel: "Operational intelligence",
    icon: iconAnalytics,
    position: "middle-right",
    top: "190px",
    right: "3%",
    rotate: "2deg",
    duration: "8.6s",
    delay: "-2.6s"
  },
  {
    id: "tile-connected",
    label: "Connected Devices",
    sublabel: "Live device state",
    icon: iconConnected,
    position: "bottom-right",
    top: "340px",
    right: "2%",
    rotate: "4deg",
    duration: "8.0s",
    delay: "-4.2s"
  }
];

export const heroNetworkPaths: NetworkPathData[] = [
  {
    id: "beam-1",
    name: "AI Intelligence",
    d: "M 150 80 C 300 110, 460 260, 640 440",
    signalGradientId: "beamGrad1",
    color: "#C759E1",
    stopColor1: "#C759E1",
    stopColor2: "#FFFFFF",
    duration: "3.2s",
    delay: "0s"
  },
  {
    id: "beam-2",
    name: "Hardware",
    d: "M 278 210 C 380 230, 500 300, 640 440",
    signalGradientId: "beamGrad2",
    color: "#9A4DC1",
    stopColor1: "#9A4DC1",
    stopColor2: "#FFFFFF",
    duration: "3.6s",
    delay: "-0.6s"
  },
  {
    id: "beam-3",
    name: "IoT",
    d: "M 188 340 C 320 360, 500 380, 640 440",
    signalGradientId: "beamGrad3",
    color: "#CB6CE6",
    stopColor1: "#CB6CE6",
    stopColor2: "#FFFFFF",
    duration: "3.9s",
    delay: "-1.2s"
  },
  {
    id: "beam-4",
    name: "Automation",
    d: "M 1130 80 C 960 110, 800 260, 640 440",
    signalGradientId: "beamGrad4",
    color: "#DB97F5",
    stopColor1: "#DB97F5",
    stopColor2: "#FFFFFF",
    duration: "3.0s",
    delay: "-1.8s"
  },
  {
    id: "beam-5",
    name: "Analytics",
    d: "M 1002 210 C 900 230, 760 300, 640 440",
    signalGradientId: "beamGrad5",
    color: "#A35AC8",
    stopColor1: "#A35AC8",
    stopColor2: "#FFFFFF",
    duration: "3.7s",
    delay: "-2.4s"
  },
  {
    id: "beam-6",
    name: "Connected Devices",
    d: "M 1092 340 C 960 360, 780 380, 640 440",
    signalGradientId: "beamGrad6",
    color: "#5B3AC4",
    stopColor1: "#5B3AC4",
    stopColor2: "#FFFFFF",
    duration: "3.4s",
    delay: "-3.0s"
  }
];
