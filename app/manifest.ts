import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mayowa Sunusi Portfolio",
    short_name: "MSU Portfolio",
    description:
      "Frontend developer crafting premium React, Next.js, Vue, Nuxt experiences with motion, performance, and polish.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0ABDE3",
    icons: [
      {
        src: "/og.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
