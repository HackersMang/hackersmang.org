import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMJun26",
  subtitle: "HackersMang, 2026 June Edition",
  pageUrl: "/hmjun26",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("06/27/2026"),

  tracks: [],

  callForSpeakerLink: "https://sessionize.com/hmjun26/",
  callForSpeakerStartOn: new Date("05/01/2026"),
  callForSpeakerEndOn: new Date("06/27/2026"),

  registrationStartOn: new Date("05/01/2026"),
  registrationEndOn: new Date("06/26/2026"),

  isSchedulePublished: false,
  sessionizeApiId: null,
  sessionizeScheduleAppUrl: "https://hmjun26.sessionize.com",
  showComingSoonBanner: true,
  summitAffiliation: null,
};

export const HERO_CARD_URL = "https://hackersmang.org/2026/hmjun26-hero-card.png";

export const eventMetaData = {
  title:
    "HMJun26 | HackersMang, 2026 June Edition | Hackerspace Mangaluru",
  description:
    "Join HackersMang, Mangaluru's community tech meetup. June 27, 2026 at Hackerspace Mangaluru. Network with builders and innovators.",
  bookmarks: "https://hackersmang.org/hmjun26",
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
