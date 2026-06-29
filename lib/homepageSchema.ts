import { SITE_NAME, SITE_URL } from "./basemeta";

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hackerspace Mangaluru",
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        "Runs HackersMang — free tech meetups, workshops, and conferences for developers, students, and builders in Mangaluru.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mangaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hackerspace Mangaluru",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
