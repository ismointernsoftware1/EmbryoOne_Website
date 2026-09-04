import type { NavigationData } from '../types/navigation';

export const navigationData: NavigationData = {
  megaMenus: {
    products: {
      id: "products",
      triggerLabel: "Products",
      layout: "grid-3-col",
      dropdownClass: "dropdown-products",
      columns: [
        {
          title: "LAB SYSTEM",
          items: [
            {
              id: "witness",
              title: "Witness",
              description: "Track every lab action and prevent mismatches in real time",
              href: "#witness",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
            },
            {
              id: "lab-health",
              title: "Lab Health",
              description: "Monitor temperature, air quality, and lab conditions continuously",
              href: "#lab-health",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 3 6 1.5-3h5.28"/></svg>`
            },
            {
              id: "consumption",
              title: "Consumption",
              description: "Track inventory usage and reduce manual errors in the lab",
              href: "#consumption",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`
            },
            {
              id: "cryo-tracker",
              title: "Cryo Tracker",
              description: "Manage embryo storage, location, and lifecycle with precision",
              href: "#cryo-tracker",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/></svg>`
            }
          ]
        },
        {
          title: "EMBRYO INTELLIGENCE",
          items: [
            {
              id: "embryo-capture",
              title: "Embryo Capture",
              description: "Capture high-resolution embryo images directly from the workstation",
              href: "#embryo-capture",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`
            },
            {
              id: "ai-grading",
              title: "AI Grading",
              description: "Standardize embryo assessment with AI-assisted grading",
              href: "#ai-grading",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`
            }
          ]
        },
        {
          title: "CLINICAL & PATIENT",
          items: [
            {
              id: "ehr",
              title: "EHR",
              description: "Manage IVF cycles, records, and clinical workflows in one system",
              href: "#ehr",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`
            },
            {
              id: "patient-experience",
              title: "Patient Experience",
              description: "Give patients real-time visibility into their treatment journey",
              href: "#patient-experience",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a4 4 0 0 1 4-4h2"/></svg>`
            },
            {
              id: "people",
              title: "People",
              description: "Coordinate staff roles, tasks, and lab responsibilities efficiently",
              href: "#people",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
            }
          ]
        }
      ]
    },

    solutions: {
      id: "solutions",
      triggerLabel: "Solutions",
      layout: "grid-2-col",
      dropdownClass: "dropdown-solutions",
      columns: [
        {
          title: "BY ROLE",
          items: [
            {
              id: "role-embryologists",
              title: "Embryologists",
              description: "Reduce manual work and improve consistency in lab procedures",
              href: "#role-embryologists",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`
            },
            {
              id: "role-lab-directors",
              title: "Lab Directors",
              description: "Gain full visibility into lab operations and performance",
              href: "#role-lab-directors",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="19" cy="11" r="2"/><path d="M19 8v1M19 13v1M16 11h1M21 11h1"/></svg>`
            },
            {
              id: "role-doctors",
              title: "Doctors",
              description: "Access cycle data and embryo insights for faster decisions",
              href: "#role-doctors",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`
            },
            {
              id: "role-clinic-admin",
              title: "Clinic Admin",
              description: "Streamline operations, reporting, and resource management",
              href: "#role-clinic-admin",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>`
            }
          ]
        },
        {
          title: "BY WORKFLOW",
          items: [
            {
              id: "workflow-traceability",
              title: "Lab Traceability",
              description: "Track every action to reduce risk and improve accountability",
              href: "#workflow-traceability",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
            },
            {
              id: "workflow-embryo-selection",
              title: "Embryo Selection",
              description: "Use imaging and AI to support consistent decision-making",
              href: "#workflow-embryo-selection",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`
            },
            {
              id: "workflow-cryo-management",
              title: "Cryo Management",
              description: "Monitor storage, movement, and status of all cryo samples",
              href: "#workflow-cryo-management",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/></svg>`
            },
            {
              id: "workflow-inventory-tracking",
              title: "Inventory Tracking",
              description: "Ensure accurate usage and availability of lab consumables",
              href: "#workflow-inventory-tracking",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>`
            }
          ]
        }
      ]
    },

    ai: {
      id: "ai",
      triggerLabel: "AI",
      layout: "grid-2-col",
      dropdownClass: "dropdown-ai",
      columns: [
        {
          title: "AI",
          items: [
            {
              id: "ai-grading-overview",
              title: "AI Grading Overview",
              description: "Bring objectivity to embryo assessment with AI support",
              href: "#ai-grading-overview",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`
            },
            {
              id: "clinical-use-cases",
              title: "Clinical Use Cases",
              description: "Support embryo selection and lab decision workflows",
              href: "#clinical-use-cases",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/></svg>`
            }
          ]
        },
        {
          title: "VALIDATION & ROADMAP",
          items: [
            {
              id: "accuracy-validation",
              title: "Accuracy & Validation",
              description: "Built on real data with clinically relevant performance",
              href: "#accuracy-validation",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
            },
            {
              id: "roadmap",
              title: "Roadmap",
              description: "Advancing toward deeper insights and predictive capabilities.",
              href: "#roadmap",
              icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
            }
          ]
        }
      ]
    }
  },

  directLinks: [
    { label: "Security", href: "#security" }
  ],

  actions: {
    login: {
      label: "Log in",
      href: "#login",
      variant: "ghost"
    },
    bookDemo: {
      label: "Book Demo",
      href: "#book-demo",
      variant: "primary"
    }
  }
};
