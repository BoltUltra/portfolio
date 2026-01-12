import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-motion-playbook",
    title: "My Next.js + Framer Motion Playbook for Cinematic Interfaces",
    excerpt:
      "From scroll-linked scenes to orchestrated entrance effects—here’s how I approach motion that still feels performant.",
    date: "2024-08-12",
    tags: ["Next.js", "Framer Motion", "Animation"],
    minutes: 7
  },
  {
    slug: "nuxt3-enterprise-patterns",
    title: "Nuxt 3 Architectures I Love for Enterprise Dashboards",
    excerpt:
      "Nitro server routes, typed composables, and API layer patterns powering resilient dashboards.",
    date: "2024-05-03",
    tags: ["Nuxt", "Architecture"],
    minutes: 6
  },
  {
    slug: "life-as-ng-frontend-dev",
    title: "Building Premium Products from Nigeria",
    excerpt:
      "Thoughts on collaborating across timezones, charging for expertise, and staying inspired in Lagos.",
    date: "2024-02-18",
    tags: ["Career", "Nigeria"],
    minutes: 5
  },
  {
    slug: "backend-journey",
    title: "Documenting My Backend Journey",
    excerpt:
      "The roadmap, the blockers, and the small wins as I move toward being a full-stack engineer.",
    date: "2023-12-08",
    tags: ["Learning", "Backend"],
    minutes: 4
  }
];

