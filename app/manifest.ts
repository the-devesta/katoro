import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Katoro – Craft Your Own Bowl",
    short_name: "Katoro",
    description: "Build-your-own vegetarian, Jain-safe noodle bowls. Delivery in Vadodara.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F2F2",
    theme_color: "#D81E20",
    icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/assets/logo-primary.png", sizes: "512x512", type: "image/png", purpose: "any" }],
  };
}
