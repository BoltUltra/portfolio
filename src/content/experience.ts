import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    company: "Nitx",
    role: "Frontend Developer",
    duration: "2024 – Present",
    logo: "/media/placeholders/nitx.svg",
    achievements: [
      "Led the rebuild of operational dashboards with motion-first UX.",
      "Introduced performance budgets and CI lighthouse checks to keep CLS under 0.1.",
    ],
    technologies: ["Next.js", "GSAP", "Shadcn/UI", "Firebase"],
  },
  {
    company: "TGPC",
    role: "Frontend Developer",
    duration: "2022 – 2024",
    logo: "/media/placeholders/tgpc.svg",
    achievements: [
      "Shipped immersive learning experiences with custom animations and 3D flourishes.",
      "Partnered with designers to codify a design system powering 6+ TGPC products.",
    ],
    technologies: ["React", "Next.js", "TailwindCSS", "Auth0"],
  },
  {
    company: "Spatial Data Science Society",
    role: "Web Developer",
    duration: "2021 – 2022",
    logo: "/media/placeholders/sdsn.svg",
    achievements: [
      "Worked on geospatial tooling for government partners with dynamic map layers.",
      "Built approval workflows and interactive data tables with real-time updates.",
    ],
    technologies: ["Vue", "Nuxt", "Mapbox", "Firebase"],
  },
  {
    company: "Vehance",
    role: "Frontend Developer (Contract)",
    duration: "2020 – 2021",
    logo: "/media/placeholders/vehance.svg",
    achievements: [
      "Created conversion-focused marketing websites with subtle 3D scenes.",
      "Optimized lighthouse performance scores from 62 → 95 in four weeks.",
    ],
    technologies: ["Next.js", "Three.js", "Contentful", "TailwindCSS"],
  },
];
