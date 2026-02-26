"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/interactive/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  // { label: "Services", href: "#services" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 120);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace(/^#/, "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Accounts for fixed header offset
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 py-6"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-gray-300 dark:border-white/10 px-6 py-3 backdrop-blur ${
          scrolled
            ? "bg-white/90 dark:bg-gray-950/80 shadow-lg"
            : "bg-white/60 dark:bg-gray-950/40"
        }`}
      >
        <Link
          href="/"
          className="font-display text-sm tracking-[0.4em] text-gray-900 dark:text-white"
        >
          MAYOWA
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-white/70 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" variant="outline">
            <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
              View Work
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
