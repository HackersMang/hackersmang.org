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
        "Hosts talks and workshops on open source technologies and works towards building a thriving tech ecosystem in Mangaluru.",
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
