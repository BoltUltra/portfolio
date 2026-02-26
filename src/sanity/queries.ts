import { groq } from "next-sanity";

// Query for About Section data
export const aboutQuery = groq`*[_type == "abouts"]{
  title,
  description,
  imgUrl
}`;

// Query for Work/Projects Section data
export const workQuery = groq`*[_type == "works"]{
  title,
  description,
  projectLink,
  codeLink,
  imgUrl,
  tags
}`;

// Query for Skills & Experience Section data
export const skillsQuery = groq`*[_type == "skills"]{
  name,
  bgColor,
  icon
}`;

export const experiencesQuery = groq`*[_type == "experiences"]{
  year,
  works[] {
    name,
    company,
    desc
  }
}`;

// Query for Testimonials & Brands Section data
export const testimonialsQuery = groq`*[_type == "testimonials"]{
  name,
  company,
  imageurl,
  feedback
}`;

export const brandsQuery = groq`*[_type == "brands"]{
  _id,
  name,
  imgUrl
}`;
