"use client";

import { HeroAnimation } from "@/components/animations/HeroAnimation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextScramble } from "@/components/animations/TextScramble";
import { ProjectCard } from "@/components/animations/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroAnimation>
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center px-4 pt-20"
        >
          <h1 className="hero-title text-6xl md:text-7xl font-bold mb-4 text-center">
            <TextScramble text="John Doe" />
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-8 text-center">
            <TextScramble text="Full Stack Developer" />
          </p>
          <MagneticButton className="hero-cta bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-colors">
            View My Work
          </MagneticButton>
          <div className="hero-scroll-indicator hero-float mt-16 text-2xl animate-bounce">
            ↓
          </div>
        </section>
      </HeroAnimation>

      <ScrollReveal>
        <section id="about" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <p className="max-w-2xl mx-auto text-center text-lg text-gray-300">
            Passionate developer creating beautiful web experiences with
            cutting-edge animations
          </p>
        </section>
      </ScrollReveal>

      <StaggerContainer>
        <section id="projects" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ProjectCard
              title="Project 1"
              description="Amazing project with cutting-edge animations"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
              tags={["React", "TypeScript", "GSAP"]}
            />
            <ProjectCard
              title="Project 2"
              description="Interactive dashboard with smooth transitions"
              image="https://images.unsplash.com/photo-1633356122544-f134324331cd?w=500"
              tags={["Next.js", "Tailwind", "Framer Motion"]}
            />
            <ProjectCard
              title="Project 3"
              description="Real-time collaboration platform"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
              tags={["Node.js", "MongoDB", "WebSocket"]}
            />
          </div>
        </section>
      </StaggerContainer>

      <ScrollReveal>
        <section id="contact" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <MagneticButton className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-colors">
              Contact Me
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
