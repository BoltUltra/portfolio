import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content";
import { Button } from "@/components/ui/button";

const siteUrl = "https://mayowa-sunusi.dev";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  const projectUrl = `${siteUrl}/work/${project.slug}`;
  return {
    title: `${project.title} · Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} · Case Study`,
      description: project.summary,
      url: projectUrl,
      images: [{ url: `${siteUrl}${project.media.cover}` }],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();
  const projectUrl = `${siteUrl}/work/${project.slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: projectUrl,
    image: `${siteUrl}${project.media.cover}`,
    creator: {
      "@type": "Person",
      name: "Mayowa Sunusi Usman",
      url: siteUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${siteUrl}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([creativeWorkJsonLd, breadcrumbJsonLd]),
        }}
      />
      <article className="container mt-24 space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Case Study
          </p>
          <h1 className="font-display text-4xl text-white">{project.title}</h1>
          <p className="text-lg text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            {project.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 px-3 py-1"
              >
                {role}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.actions.live && (
              <Button asChild>
                <a href={project.actions.live}>Live site</a>
              </Button>
            )}
            {project.actions.github && (
              <Button asChild variant="outline">
                <a href={project.actions.github}>GitHub</a>
              </Button>
            )}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:col-span-2">
            <Image
              src={project.media.cover}
              alt={project.title}
              width={1600}
              height={900}
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl text-white">Key metrics</h3>
            <ul className="space-y-3 text-gray-200">
              {project.metrics.map((metric) => (
                <li key={metric.label}>
                  {metric.label}: {metric.value}
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-white/50">
                Tech Stack
              </h4>
              <p className="text-white">{project.tech.join(" · ")}</p>
            </div>
          </div>
        </div>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gray-950/60 p-6">
            <h3 className="text-2xl text-white">Problem</h3>
            <p className="text-gray-300">
              Disconnected workflows, dated visuals, and slow load times were
              blocking adoption. We needed a brave new interface.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gray-950/60 p-6">
            <h3 className="text-2xl text-white">Solution</h3>
            <p className="text-gray-300">
              A motion-first rebuild with GSAP timelines, Lenis smooth scroll,
              and carefully tuned performance budgets shipped in weeks.
            </p>
          </div>
        </section>
        <section className="space-y-6">
          <h3 className="text-2xl text-white">Gallery</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {project.media.gallery.map((image) => (
              <Image
                key={image}
                src={image}
                alt={`${project.title} screen`}
                width={900}
                height={600}
                className="rounded-2xl border border-white/5"
              />
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-2xl text-white">Learnings</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              Motion and performance can coexist with intentional planning.
            </li>
            <li>Design tokens + Tailwind keep glassmorphism manageable.</li>
            <li>
              Case-study storytelling helps stakeholders appreciate the craft.
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
