import type { HeroContent } from "./types";

export const heroContent: HeroContent = {
  eyebrow: "Mayowa Sunusi Usman · Nigeria",
  title:
    "Frontend Developer • React • Next.js • Vue • Nuxt • Builder of beautiful, fast experiences.",
  subtitle:
    "Transforming ideas into clean, scalable, high-performance web interfaces.",
  description:
    "I architect resilient design systems, orchestrate motion with intent, and obsess over performance budgets while helping teams ship ambitious products.",
  ctas: [
    { label: "View My Work", href: "#projects", variant: "primary" },
    {
      label: "Download Resume",
      href: "/media/docs/mayowa-resume.pdf",
      variant: "secondary",
    },
    { label: "Let’s Build Together", href: "#contact", variant: "ghost" },
  ],
  highlights: [
    { label: "Projects", value: "45+", helper: "Startups & enterprises" },
    {
      label: "Experience",
      value: "4+ yrs",
      helper: "TGPC · Vehance · SDSN · Nitx",
    },
    { label: "Focus", value: "Premium UX", helper: "Motion · Performance" },
  ],
  ticker: [
    "React ecosystems",
    "Nuxt 3 adventures",
    "Firebase architect",
    "API integrations",
    "Teaching frontend",
    "Backend journey",
  ],
  location: "Lagos, Nigeria",
  availability: "Accepting select collaborations",
};
