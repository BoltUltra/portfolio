import { HomePage } from "@/components/sections/home-page";
import { client } from "@/sanity/client";
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

export default async function Page() {
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

  console.log("--- DATA FETCH RESULTS ---");
  console.log("Projects length:", projects?.length);

  const formattedExperiences =
    experiences?.flatMap((expYear: any) =>
      (expYear.works || []).map((work: any) => ({
        company: work.company || "Unknown Company",
        role: work.name || "Developer",
        duration: expYear.year || "Past",
        logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&q=80",
        achievements: work.desc ? [work.desc] : [],
        technologies: [],
      })),
    ) || [];

  return (
    <HomePage
      projects={projects}
      abouts={abouts}
      skills={skills}
      experiences={formattedExperiences}
      testimonials={testimonials}
      brands={brands}
    />
  );
}
