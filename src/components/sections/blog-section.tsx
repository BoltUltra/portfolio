"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";

export function BlogSection() {
  return (
    <section id="blog" className="container mt-32 space-y-10">
      <SectionHeading
        eyebrow="Blog"
        title="Writing on frontend craft, Nigeria, and backend explorations."
        description="Minimal cards with hover animation and tags."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <motion.article
            key={post.slug}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Link href={`/blog/${post.slug}`}>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                {new Date(post.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
              <h3 className="mt-3 font-display text-2xl text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full border border-white/10 px-3 py-1">
                  {post.minutes} min read
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

