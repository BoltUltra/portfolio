import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "bills-payment-app",
    title: "Bills Payment App",
    summary: "Multi-service fintech experience for effortless bills and airtime.",
    description:
      "Modernized the bill-pay workflow with conversational flows, biomorphic cards, and realtime transaction feedback.",
    category: "Fintech Experience",
    roles: ["Lead Frontend", "Product Engineer"],
    tech: ["Next.js", "Tailwind", "Firebase", "GSAP"],
    media: {
      cover: "/media/projects/bills/cover.svg",
      gallery: ["/media/projects/bills/screen-1.svg", "/media/projects/bills/screen-2.svg"]
    },
    metrics: [
      { label: "LCP", value: "1.4s" },
      { label: "CLS", value: "0.02" }
    ],
    actions: {
      live: "https://example.com/bills",
      github: "https://github.com/mayowa/bills-app",
      caseStudy: "/work/bills-payment-app"
    }
  },
  {
    slug: "investment-platform",
    title: "Investment Platform",
    summary: "Wealth-tech dashboard with dynamic portfolio visualizations.",
    description:
      "Architected an immersive gradients-first dashboard with 3D charts, motion-driven onboarding, and accessibility baked in.",
    category: "Investment",
    roles: ["Frontend Developer"],
    tech: ["Nuxt 3", "Tailwind", "D3.js", "Supabase"],
    media: {
      cover: "/media/projects/investment/cover.svg",
      gallery: ["/media/projects/investment/screen-1.svg"]
    },
    metrics: [
      { label: "Sessions uplift", value: "+38%" },
      { label: "Bundle size", value: "220kb" }
    ],
    actions: {
      live: "https://example.com/invest",
      caseStudy: "/work/investment-platform"
    }
  },
  {
    slug: "elearning-portal",
    title: "E-learning Portal",
    summary: "TGPC cohort platform with cinematic transitions and progress tracking.",
    description:
      "Developed a modular learning system, interactive roadmaps, and custom playback experiences for asynchronous sessions.",
    category: "EdTech",
    roles: ["Product Engineer"],
    tech: ["Next.js", "Framer Motion", "Supabase", "TailwindCSS"],
    media: {
      cover: "/media/projects/elearning/cover.svg",
      gallery: ["/media/projects/elearning/screen-1.svg"]
    },
    metrics: [
      { label: "Active learners", value: "12k+" },
      { label: "Drop-off reduction", value: "-25%" }
    ],
    actions: {
      live: "https://example.com/elearn",
      caseStudy: "/work/e-learning-portal"
    }
  },
  {
    slug: "easy-buy-marketplace",
    title: "Easy Buy Marketplace",
    summary: "Rich commerce marketplace with AR previews and lightning search.",
    description:
      "Implemented conversational filters, 3D cards, and offline-ready PWA features for a mobile-first buying experience.",
    category: "Commerce",
    roles: ["Frontend Dev"],
    tech: ["Next.js", "Algolia", "Tailwind", "Firebase"],
    media: {
      cover: "/media/projects/easy-buy/cover.svg",
      gallery: ["/media/projects/easy-buy/screen-1.svg"]
    },
    metrics: [
      { label: "Search latency", value: "120ms" },
      { label: "Conversion lift", value: "+19%" }
    ],
    actions: {
      live: "https://example.com/easybuy",
      github: "https://github.com/mayowa/easybuy",
      caseStudy: "/work/easy-buy-marketplace"
    }
  },
  {
    slug: "tgpc-platforms",
    title: "TGPC Websites & Platforms",
    summary: "System of marketing sites and onboarding funnels for TGPC.",
    description:
      "Unified brand visuals, added GSAP microinteractions, and built a component library powering six marketing experiences.",
    category: "Platform",
    roles: ["Lead Frontend"],
    tech: ["Next.js", "GSAP", "Contentlayer", "TailwindCSS"],
    media: {
      cover: "/media/projects/tgpc/cover.svg",
      gallery: ["/media/projects/tgpc/screen-1.svg"]
    },
    metrics: [
      { label: "Launches", value: "6 sites" },
      { label: "Build time", value: "6 weeks" }
    ],
    actions: {
      live: "https://example.com/tgpc",
      caseStudy: "/work/tgpc-platforms"
    }
  },
  {
    slug: "sdsn-mapping",
    title: "SDSN Mapping & Approval",
    summary: "Geospatial approval tooling for Spatial Data Science Network.",
    description:
      "Crafted an approvals interface layering Mapbox, real-time markers, and workflow states for multi-team collaboration.",
    category: "GovTech",
    roles: ["Web Developer"],
    tech: ["Nuxt", "Mapbox", "Firebase", "TailwindCSS"],
    media: {
      cover: "/media/projects/sdsn/cover.svg",
      gallery: ["/media/projects/sdsn/screen-1.svg"]
    },
    metrics: [
      { label: "Approval speed", value: "2x faster" },
      { label: "Support tickets", value: "-40%" }
    ],
    actions: {
      live: "https://example.com/sdsn",
      caseStudy: "/work/sdsn-mapping-platform"
    }
  },
  {
    slug: "ui-laboratory",
    title: "Personal UI Experiments",
    summary: "Weekly explorations in Framer Motion, shader art, and 3D UI.",
    description:
      "Designed a sandbox for sharing playful UI widgets, command palettes, and multi-layered micro interactions.",
    category: "Experimental",
    roles: ["Motion Engineer"],
    tech: ["React", "Framer Motion", "Three.js", "Tailwind"],
    media: {
      cover: "/media/projects/laboratory/cover.svg",
      gallery: ["/media/projects/laboratory/screen-1.svg"]
    },
    metrics: [
      { label: "Components", value: "32+" },
      { label: "Open source", value: "Yes" }
    ],
    actions: {
      github: "https://github.com/mayowa/ui-lab",
      caseStudy: "/work/ui-laboratory"
    }
  },
  {
    slug: "sidekick-chat",
    title: "Sidekick Assistant",
    summary: "Floating AI assistant prototype for developer portfolios.",
    description:
      "Built an AI sidekick that surfaces project facts, resume links, and micro-interactions triggered by Konami codes.",
    category: "R&D",
    roles: ["Product Explorer"],
    tech: ["Next.js", "Langchain", "Tailwind", "Framer Motion"],
    media: {
      cover: "/media/projects/sidekick/cover.svg",
      gallery: ["/media/projects/sidekick/screen-1.svg"]
    },
    metrics: [
      { label: "Response time", value: "800ms" },
      { label: "Handoff clicks", value: "3x" }
    ],
    actions: {
      live: "https://example.com/sidekick",
      github: "https://github.com/mayowa/sidekick",
      caseStudy: "/work/sidekick-assistant"
    }
  }
];

