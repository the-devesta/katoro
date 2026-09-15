import type { MetadataRoute } from "next";

const SITE = "https://katoro.in";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE}/og.jpg`, `${SITE}/assets/ai/starter-2.jpg`, `${SITE}/assets/ai/about-1.jpg`, `${SITE}/assets/ai/values.jpg`],
    },
    { url: `${SITE}/#About`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#Menu`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/#How`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#Waitlist`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#Contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
