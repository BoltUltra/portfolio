export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: string;
};

export type HighlightStat = {
  label: string;
  value: string;
  helper?: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctas: CTA[];
  highlights: HighlightStat[];
  ticker: string[];
  location: string;
  availability: string;
};

export type AboutContent = {
  title: string;
  narrative: string[];
  mission: string;
  experiences: string[];
  funFacts: { label: string; value: string }[];
  tooling: string[];
};

export type SkillCategory = {
  label: string;
  description: string;
  stack: { title: string; level: number; tagline?: string }[];
};

export type SkillsContent = {
  badges: string[];
  radial: { label: string; value: number }[];
  categories: SkillCategory[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  logo: string;
  achievements: string[];
  technologies: string[];
  location?: string;
};

export type ProjectMedia = {
  cover: string;
  gallery: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  roles: string[];
  tech: string[];
  media: ProjectMedia;
  metrics: { label: string; value: string }[];
  actions: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  outcomes: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  minutes: number;
};

export type ContactContent = {
  title: string;
  subtitle: string;
  email: string;
  socials: { label: string; href: string }[];
  orbiting: string[];
};

