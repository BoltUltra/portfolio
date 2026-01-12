import type { SkillsContent } from "./types";

export const skillsContent: SkillsContent = {
  badges: [
    "React",
    "Next.js",
    "Vue",
    "Nuxt 3",
    "TailwindCSS",
    "Firebase",
    "REST APIs",
    "Git",
    "Auth tooling",
  ],
  radial: [
    { label: "Frontend architecture", value: 92 },
    { label: "Motion & interactions", value: 88 },
    { label: "Performance", value: 90 },
    { label: "Backend-in-progress", value: 64 },
  ],
  categories: [
    {
      label: "Frontend",
      description:
        "React/Next/Vue ecosystems, design systems, motion, accessibility.",
      stack: [
        {
          title: "React / Next.js",
          level: 92,
          tagline: "App Router, RSC, Turbopack",
        },
        { title: "Vue / Nuxt 3", level: 86, tagline: "Nitro, Islands, SSR" },
        {
          title: "Tailwind + Shadcn",
          level: 90,
          tagline: "Design systems & tokens",
        },
      ],
    },
    // {
    //   label: "Backend (Learning)",
    //   description: "Diving into Node, serverless, and database orchestration.",
    //   stack: [
    //     { title: "Node + Express", level: 58 },
    //     { title: "tRPC / GraphQL", level: 44 },
    //     { title: "Serverless (Firebase, Vercel)", level: 67 }
    //   ]
    // },
    {
      label: "Tools",
      description: "Rigorous workflows for collaboration and delivery.",
      stack: [
        { title: "WebStorm / VS Code", level: 95 },
        { title: "Storybook / Ladle", level: 82 },
        { title: "Jest / Vitest / Playwright", level: 75 },
      ],
    },
    {
      label: "Soft Skills",
      description: "Teaching, mentoring, cross-functional collaboration.",
      stack: [
        { title: "Client communication", level: 90 },
        { title: "Mentorship / Teaching", level: 88 },
        { title: "Product thinking", level: 84 },
      ],
    },
  ],
};
