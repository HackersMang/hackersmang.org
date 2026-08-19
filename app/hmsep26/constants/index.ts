import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMSep26",
  subtitle: "HackersMang, 2026 September Edition",
  pageUrl: "/hmsep26",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("09/19/2026"),

  tracks: [],

  callForSpeakerLink: "https://sessionize.com/hackersmang-sep-2026-edition",
  callForSpeakerStartOn: new Date("08/19/2026"),
  callForSpeakerEndOn: new Date("09/16/2026"),

  isSchedulePublished: false,
  sessionizeApiId: "rrdtspnq",
  showComingSoonBanner: false,
  summitAffiliation: null,
};

export const HERO_CARD_URL = "https://hackersmang.org/2026/hmsep26-hero-card.png";

export const eventMetaData = {
  title:
    "HMSep26 | HackersMang, 2026 September Edition | Hackerspace Mangaluru",
  description:
    "Join HackersMang, Mangaluru's community tech meetup. September 19, 2026 at UniCourt Mangaluru. Theme: AI in Action — Beyond the Prompt: Engineering Real AI.",
  bookmarks: "https://hackersmang.org/hmsep26",
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
    "@type": "Organization",
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
