import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource, Partner } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#TechMang26",
  subtitle: "AI in Action: Build · Test · Ship",
  pageUrl: "/techmang26",
  locationName: "Wrkwrk Triangle",
  locationUrl: "https://www.google.com/maps/dir/12.9204224,74.8388352/wrkwrk+Triangle,+3rd,+4th,+5th+floor,+Wrkwrk+triangle,+wrkwrk+Triangle,+NH+66,+Kottara+Chowki,+Derabail,+Mangaluru+575008,+Panvel+-+Kochi+-+Kanyakumari+Hwy,+Derebail,+Mangaluru,+Karnataka+575006/@12.8870616,74.8561301,13.58z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba35b463be9c45f:0x8f5bdede4e4f1e52!2m2!1d74.8377175!2d12.9089805?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
  happeningOn: new Date("01/31/2026"), // MM/DD/YYYY - Update with actual date
  tracks: [
    {
      name: "AI Talks",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2012555",
      buttonText: "Register for AI Talks"
    },
    {
      name: "AI workshops",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2012553",
      buttonText: "Register for AI workshops"
    }
  ],
  registrationStartOn: new Date("01/01/2026"), // MM/DD/YYYY
  registrationEndOn: new Date("01/31/2026"), // MM/DD/YYYY
  callForSpeakerLink: "https://sessionize.com/hackersmang-techmang-2026/",
  callForSpeakerStartOn: new Date("11/28/2025"), // MM/DD/YYYY
  callForSpeakerEndOn: new Date("01/30/2026"), // MM/DD/YYYY
  isSchedulePublished: false,
  sessionizeApiId: "bgrouyg6",
  showComingSoonBanner: false,

  summitAffiliation: {
    isEnabled: false,
    summitName: "AI Impact Summit 2026",
    tagline: "Official Pre-Summit Event of India - AI Impact Summit 2026",
    summitWebsiteUrl: "https://impact.indiaai.gov.in/",
    imageUrl: "/branding/2026/ai-impact-summit/logo.png"
  },
  partners: [
    {
      label: "Co-hosted",
      logoPath: "/branding/2026/tie/logo.png",
      alt: "TiE Mangaluru Logo",
      url: "https://tiemangaluru.org/"
    },
    {
      label: "Venue Partner",
      logoPath: "/branding/2026/wrkwrk/logo.png",
      alt: "Wrkwrk Logo",
      url: "https://www.wrkwrk.in/"
    }
  ] as Partner[],
};

// Hero card
export const HERO_CARD_URL = "https://hackersmang.org/2026/techmang26-hero-card.png";

// Meta data
export const eventMetaData = {
  title: "TechMang26 | The Annual Flagship Event of Hackerspace Mangaluru | 2026 edition by Hackerspace Mangaluru",
  description: "Join TechMang26, The Annual Flagship Event of Hackerspace Mangaluru. Network with industry experts and innovators. January 2026 at Hackerspace Mangaluru.",
  bookmarks: 'https://hackersmang.org/techmang26',
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

// Resources
export const RESOURCES: Resource[] = [];

