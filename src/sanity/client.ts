import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-02-25",
  useCdn: false, // Set to false to ensure we always get fresh data when building
  token: process.env.SANITY_API_TOKEN, // Add token to authorize fetching private datasets if applicable
});

const builder = imageUrlBuilder(client);

// Helper function to resolve Sanity image URLs
export function urlFor(source: any) {
  return builder.image(source);
}
