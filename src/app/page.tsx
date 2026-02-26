import { HeroAnimation } from "@/components/animations/HeroAnimation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextScramble } from "@/components/animations/TextScramble";
import { ProjectsSection } from "@/components/sections/projects-section";
import { client, urlFor } from "@/sanity/client";
import {
  workQuery,
  aboutQuery,
  skillsQuery,
  experiencesQuery,
  testimonialsQuery,
  brandsQuery,
} from "@/sanity/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const [projects, abouts, skills, experiences, testimonials, brands] =
    await Promise.all([
      client.fetch(workQuery).catch((e) => {
        console.error("Work fetch error:", e);
        return [];
      }),
      client.fetch(aboutQuery).catch((e) => {
        console.error("About fetch error:", e);
        return [];
      }),
      client.fetch(skillsQuery).catch((e) => {
        console.error("Skills fetch error:", e);
        return [];
      }),
      client.fetch(experiencesQuery).catch((e) => {
        console.error("Experiences fetch error:", e);
        return [];
      }),
      client.fetch(testimonialsQuery).catch((e) => {
        console.error("Testimonials fetch error:", e);
        return [];
      }),
      client.fetch(brandsQuery).catch((e) => {
        console.error("Brands fetch error:", e);
        return [];
      }),
    ]);

  const aboutData = abouts?.[0] || {
    title: "About Me",
    description:
      "Passionate developer creating beautiful web experiences with cutting-edge animations",
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroAnimation>
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center px-4 pt-20"
        >
          <h1 className="hero-title text-6xl md:text-7xl font-bold mb-4 text-center">
            <TextScramble text="Mayowa Sunusi" />
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
          <h2 className="text-4xl font-bold text-center mb-12">
            {aboutData.title}
          </h2>
          <p className="max-w-2xl mx-auto text-center text-lg text-gray-300">
            {aboutData.description}
          </p>
        </section>
      </ScrollReveal>

      <ProjectsSection projects={projects} />

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
