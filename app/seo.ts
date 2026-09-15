const SITE = "https://katoro.in";
const SAME_AS = ["https://www.instagram.com/katoro.in", "https://www.facebook.com/katoro.in", "https://x.com/katoro_in"];

const menu = {
  "@type": "Menu",
  "@id": `${SITE}/#menu`,
  name: "Katoro Ingredients – priced per 50 g",
  description: "Every ingredient is pure vegetarian and Jain-safe. Build your bowl from base, protein, vegetables, sauce, spice and crunch.",
  hasMenuSection: [
    { "@type": "MenuSection", name: "Base", hasMenuItem: [["Rice Noodles", 40], ["Glass Noodles", 45], ["Hakka Noodles", 35], ["Udon", 50], ["Jasmine Rice", 30]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Protein", hasMenuItem: [["Paneer", 60], ["Tofu", 55], ["Soya Chunks", 40], ["Edamame", 65], ["Tempeh", 70]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Vegetables", hasMenuItem: [["Bok Choy", 30], ["Broccoli", 35], ["Bell Peppers", 30], ["Baby Corn", 30], ["Mushroom", 40], ["Zucchini", 30], ["Cabbage", 20], ["French Beans", 25]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Sauce", hasMenuItem: [["Sesame-Soy", 35], ["Chilli-Ginger", 35], ["Peanut Satay", 45], ["Sweet Chilli", 30]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Spice", hasMenuItem: [["Chilli Oil", 20], ["Sichuan Pepper", 20], ["White Pepper", 15], ["Green Chilli", 15]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Crunch", hasMenuItem: [["Roasted Peanuts", 25], ["Crispy Noodles", 20], ["Toasted Sesame", 15], ["Nori Flakes", 30]].map(([n, p]) => item(n as string, p as number)) },
    { "@type": "MenuSection", name: "Sips", hasMenuItem: [["Lemon Iced Tea", 60], ["Lychee Cooler", 80], ["Jasmine Cold Brew", 70], ["Tender Coconut", 60]].map(([n, p]) => item(n as string, p as number)) },
  ],
};

function item(name: string, price: number) {
  return {
    "@type": "MenuItem",
    name,
    offers: { "@type": "Offer", price, priceCurrency: "INR", description: "per 50 g" },
    suitableForDiet: ["https://schema.org/VegetarianDiet", ...(name === "Paneer" ? [] : ["https://schema.org/VeganDiet"])],
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "Katoro",
      alternateName: ["Katoro Vadodara", "katoro.in", "Craft Your Own Bowl"],
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/assets/logo-primary.png`, width: 1024, height: 1024 },
      slogan: "Craft Your Own Bowl",
      sameAs: SAME_AS,
      contactPoint: [{ "@type": "ContactPoint", telephone: "+91-90000-00000", contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "hi", "gu"] }],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Katoro – Craft Your Own Bowl",
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: "en-IN",
    },
    {
      "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
      "@id": `${SITE}/#restaurant`,
      name: "Katoro",
      image: [`${SITE}/og.jpg`, `${SITE}/assets/ai/starter-2.jpg`, `${SITE}/assets/ai/about-1.jpg`],
      url: SITE,
      telephone: "+91-90000-00000",
      email: "hello@katoro.in",
      priceRange: "₹100–₹500",
      servesCuisine: ["Asian", "Noodles", "Vegetarian", "Jain", "Vegan"],
      acceptsReservations: false,
      hasMenu: { "@id": `${SITE}/#menu` },
      address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390001", addressCountry: "IN" },
      geo: { "@type": "GeoCoordinates", latitude: 22.3072, longitude: 73.1812 },
      areaServed: [{ "@type": "City", name: "Vadodara" }],
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:00", closes: "23:00" }],
      potentialAction: { "@type": "RegisterAction", name: "Join the Katoro waitlist", target: { "@type": "EntryPoint", urlTemplate: `${SITE}/#Waitlist`, actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] } },
      keywords: "craft your own bowl, custom noodle bowl Vadodara, Jain noodles, vegan noodles, no onion no garlic, build your own bowl",
      sameAs: SAME_AS,
      parentOrganization: { "@id": `${SITE}/#org` },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Delivery only", value: true },
        { "@type": "LocationFeatureSpecification", name: "Jain-safe menu (no onion, no garlic, no root vegetables)", value: true },
        { "@type": "LocationFeatureSpecification", name: "100% vegetarian", value: true },
      ],
    },
    menu,
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "Katoro – Craft Your Own Bowl | Build-Your-Own Noodle Bowls in Vadodara",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#restaurant` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/og.jpg` },
      inLanguage: "en-IN",
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }] },
    },
    {
      "@type": "ItemList",
      name: "Starter builds",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "MenuItem", name: "The Light One", description: "Glass noodles, one vegetable, light sesame-soy glaze.", offers: { "@type": "Offer", price: 100, priceCurrency: "INR" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "MenuItem", name: "The Classic", description: "Rice noodles, paneer, bok choy, broccoli, sesame-soy.", offers: { "@type": "Offer", price: 300, priceCurrency: "INR" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "MenuItem", name: "The Loaded", description: "Hakka noodles, tofu, edamame, mushrooms, peanuts, chilli oil.", offers: { "@type": "Offer", price: 450, priceCurrency: "INR" } } },
      ],
    },
  ],
};
