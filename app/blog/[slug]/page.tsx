import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content";

const siteUrl = "https://mayowa-sunusi.dev";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} · Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} · Blog`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: `${siteUrl}/og.png`,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Mayowa Sunusi Usman",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
      />
      <article className="container prose prose-invert mt-24">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <h1 className="font-display text-4xl text-white">{post.title}</h1>
        <p className="text-lg text-gray-300">{post.excerpt}</p>
        <p className="text-white/80">
          Full article content placeholder. Replace this copy inside
          `content/blog.ts` or convert this route to MDX when ready.
        </p>
      </article>
    </>
  );
}
