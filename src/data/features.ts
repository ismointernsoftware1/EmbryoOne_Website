import type { FeaturesSectionProps } from '../types/features';

export const featuresData: FeaturesSectionProps = {
  id: "solution",
  tag: "UNIFIED INTELLIGENCE",
  title: "Architected for edge-to-cloud operations",
  description: "EmbryoOne eliminates the boundary between machine sensors, autonomous AI inference, and operational workflows.",
  features: [
    {
      iconColorClass: "purple",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`,
      title: "Real-World AI Models",
      description: "Deploy specialized vision and telemetry models directly to edge nodes with sub-5ms latency execution."
    },
    {
      iconColorClass: "iris",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`,
      title: "Universal Hardware Integration",
      description: "Seamlessly connect legacy industrial equipment, IoT microcontrollers, and modern edge gateways without custom drivers."
    },
    {
      iconColorClass: "amethyst",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      title: "Autonomous Closed-Loop Control",
      description: "Automatically adjust equipment parameters, trigger safety interventions, and optimize real-time throughput based on AI stream predictions."
    }
  ]
};
