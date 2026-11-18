import type { MetadataRoute } from "next";
const routes = ["", "/vacuums", "/tc-100", "/tc-500", "/tc-200", "/aboutus", "/support-tc-100", "/contact-us", "/warranty", "/partnership", "/privacy-policy", "/terms-and-conditions"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://www.tidea-tech.com${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 })); }
