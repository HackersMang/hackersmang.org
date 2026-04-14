import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMApr26",
  subtitle: "HackersMang, 2026 April Edition",
  pageUrl: "/hmapr26",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("04/25/2026"),

  tracks: [
    {
      name: "AI Talks",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2163830",
      buttonText: "Register for AI Talks",
    },
    {
      name: "Workshops & Talks",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2163831",
      buttonText: "Register for AI Workshops & Talks",
    },
  ],

  callForSpeakerLink: "https://sessionize.com/hmapr26/",
  callForSpeakerStartOn: new Date("11/01/2025"),
  callForSpeakerEndOn: new Date("04/11/2026"),

  registrationStartOn: new Date("01/01/2026"),
  registrationEndOn: new Date("04/24/2026"),

  isSchedulePublished: false,
  sessionizeApiId: 'yak8jheq',
  sessionizeScheduleAppUrl: "https://hmapr26.sessionize.com",
  showComingSoonBanner: true,
  summitAffiliation: null,
};

export const HERO_CARD_URL = "https://hackersmang.org/2026/hmapr26-hero-card.png";

export const eventMetaData = {
  title:
    "HMApr26 | HackersMang, 2026 April Edition | Hackerspace Mangaluru",
  description:
    "Join HackersMang, Mangaluru's community tech meetup. April 25, 2026 at Hackerspace Mangaluru. Network with builders and innovators.",
  bookmarks: "https://hackersmang.org/hmapr26",
  category: "Tech Conference",
};

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
      alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Banner`,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const twitter = {
  card: "summary_large_image",
  title: eventMetaData.title,
  description: eventMetaData.description,
  images: {
    url: HERO_CARD_URL,
    alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Preview`,
  },
  creator: SITE_CREATOR,
  site: SITE_NAME,
};

export const alternates = {
  canonical: eventMetaData.bookmarks,
  languages: {
    "en-US": "/en-US",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventMetaData.title,
  description: eventMetaData.description,
  startDate: EVENT_DETAIL.happeningOn,
  endDate: EVENT_DETAIL.happeningOn,
  location: {
    "@type": "Place",
    name: EVENT_DETAIL.locationName,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mangaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": eventMetaData.category,
    name: SITE_NAME,
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    url: eventMetaData.bookmarks,
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  image: [HERO_CARD_URL],
};

export const RESOURCES: Resource[] = [];
