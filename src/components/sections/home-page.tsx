"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FloatingAssistant } from "@/components/interactive/floating-assistant";
import { MissionOverlay } from "@/components/interactive/mission-overlay";
import { Preloader } from "@/components/interactive/preloader";
import { CustomCursor } from "@/components/interactive/custom-cursor";

export function HomePage({
  projects = [],
  abouts = [],
  skills = [],
  experiences = [],
  testimonials = [],
  brands = [],
}: {
  projects?: any[];
  abouts?: any[];
  skills?: any[];
  experiences?: any[];
  testimonials?: any[];
  brands?: any[];
}) {
  console.log("HomePage received projects:", projects?.length);

  return (
    <>
      <CustomCursor />
      <Preloader />
      <MissionOverlay />
      <SiteHeader />
      <main className="relative flex flex-col gap-24">
        <HeroSection />
        <AboutSection abouts={abouts} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ServicesSection />
        <TestimonialsSection testimonials={testimonials} />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
      {/* <FloatingAssistant projects={projects} /> */}
    </>
  );
}
