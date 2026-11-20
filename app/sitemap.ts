import type { MetadataRoute } from "next";

const baseUrl = "https://www.tidea-tech.com";
const routes = ["", "/vacuums", "/tc-100", "/tc-500", "/tc-200", "/aboutus", "/customer-care", "/contact-us", "/warranty", "/partnership", "/privacy-policy", "/terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const languages = {
      en: `${baseUrl}${route}`,
      fr: `${baseUrl}/fr${route}`,
    };
    return [
      {url: languages.en, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8, alternates: {languages}},
      {url: languages.fr, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8, alternates: {languages}},
    ];
  });
}
