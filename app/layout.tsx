import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Londrina_Solid, Andika } from "next/font/google";
import "./globals.css";
import { jsonLd } from "./seo";

const londrina = Londrina_Solid({ subsets: ["latin"], weight: ["400", "900"], variable: "--font-londrina", display: "swap" });
const andika = Andika({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-andika", display: "swap" });

const SITE = "https://katoro.in";
const TITLE = "Katoro – Craft Your Own Bowl | Build-Your-Own Noodle Bowls in Vadodara";
const DESC =
  "Katoro is Vadodara's build-your-own noodle bowl brand. 100% vegetarian, Jain-safe (no onion, no garlic), vegan-tagged. Pick base, protein, veg, sauce, spice and crunch, pay per gram, delivered hot across Vadodara.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s | Katoro" },
  description: DESC,
  applicationName: "Katoro",
  keywords: [
    "Katoro", "katoro.in", "craft your bowl", "craft your own bowl", "custom noodle bowl Vadodara", "build your own bowl Vadodara",
    "Jain noodles Vadodara", "Jain food delivery Vadodara", "vegetarian noodle bowl Vadodara", "vegan noodles Vadodara",
    "no onion no garlic noodles", "noodle delivery Vadodara", "food delivery Vadodara", "ramen Vadodara", "hakka noodles Vadodara",
    "custom bowl", "bowl builder app", "pure veg Asian food Vadodara", "Jain Chinese Vadodara", "healthy bowls Vadodara",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website", url: SITE, siteName: "Katoro", locale: "en_IN", title: TITLE, description: DESC,
    images: [{ url: "/og.jpg", width: 1264, height: 848, alt: "Katoro build-your-own noodle bowl" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og.jpg"], site: "@katoro.in" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/favicon-64.png", type: "image/png", sizes: "64x64" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }, { url: "/assets/logo-primary.png", type: "image/png", sizes: "512x512" }], apple: "/assets/logo-primary.png", shortcut: "/favicon-64.png" },
  manifest: "/manifest.webmanifest",
  category: "food",
  other: {
    "geo.region": "IN-GJ", "geo.placename": "Vadodara", "geo.position": "22.3072;73.1812", "ICBM": "22.3072, 73.1812",
  },
};

export const viewport: Viewport = { themeColor: "#D81E20", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${londrina.variable} ${andika.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Script src="/lenis.min.js" strategy="beforeInteractive" />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
