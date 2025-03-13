import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "HackersMang",
  subtitle: "2025 April Edition",

  locationName: "UniCourt Mangaluru",
  locationUrl: new URL("https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7"),
  happeningOn: new Date("04/12/2025"), // MM/DD/YYYY

  callForSpeakerLink: new URL("https://sessionize.com/hackersmang-april-2025-edition"),
  callForSpeakerStartOn: new Date("03/08/2025"),
  callForSpeakerEndOn: new Date("04/05/2025"),

  registrationLink: null,
  registrationStartOn: new Date("03/15/2025"),
  registrationEndOn: new Date("03/21/2025"),

  isSchedulePublished: false,
  sessionizeApiId: null,
};

// Hero card
export const HERO_CARD_URL = "https://hackersmang.org/2025/april-hero-card.png";

// Meta data
export const eventMetaData = {
  title: "HackersMang | 2025 April edition by Hackerspace Mangaluru | Premier Tech Conference in Mangaluru",
  description: "Join HackersMang, Mangaluru's premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more. Network with industry experts and innovators. April 2025 at Hackerspace Mangaluru.",
  bookmarks: 'https://hackersmang.org/2025-april',
  category: 'Tech Conference',
};

// DO NOT EDIT BELOW THIS LINE

// SEO meta data
export const openGraph = {
  title: eventMetaData.title,
  description: eventMetaData.description,
  url: eventMetaData.bookmarks,
  siteName: SITE_NAME,
  images: [
    {
      url: HERO_CARD_URL,
      width: 1200,
      height: 630,
      alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Banner`
    },
  ],
  locale: 'en_US',
  type: 'website',
}

export const twitter = {
  card: 'summary_large_image',
  title: eventMetaData.title,
  description: eventMetaData.description,
  images: {
      url: HERO_CARD_URL,
      alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Preview`
  },
  creator: SITE_CREATOR,
  site: SITE_NAME,
};

export const alternates = {
  canonical: eventMetaData.bookmarks,
  languages: {
      'en-US': '/en-US',
  },
};

// JSON-LD
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: eventMetaData.title,
  description: eventMetaData.description,
  startDate: EVENT_DETAIL.happeningOn,
  endDate: EVENT_DETAIL.happeningOn,
  location: {
      '@type': 'Place',
      name: EVENT_DETAIL.locationName,
      address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mangaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN'
      }
  },
  organizer: {
      '@type': eventMetaData.category,
      name: SITE_NAME,
      url: SITE_URL
  },
  offers: {
      '@type': 'Offer',
      url: eventMetaData.bookmarks,
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
  },
  image: [
      HERO_CARD_URL,
  ]
};