import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#TechMang27",
  subtitle: "AI Beyond the Hype: Ideas, Innovation and Impact.",
  pageUrl: "/techmang27",
  locationName: undefined,
  locationUrl: undefined,
  // Date TBA — new date will be announced; keep a placeholder for sitemap lastmod only
  happeningOn: new Date(),
  tracks: null,

  callForSpeakers: [
    {
      name: "Student Edition",
      link: "https://sessionize.com/techmang27-student-edition/",
      buttonText: "Submit — Student Edition",
      description: "For students sharing projects, learning journeys, and fresh ideas.",
    },
    {
      name: "Professional Edition",
      link: "https://sessionize.com/techmang27-professional-edition/",
      buttonText: "Submit — Professional Edition",
      description: "For professionals sharing industry experience, demos, and deep-dives.",
    },
  ],
  callForSpeakerStartOn: new Date("10/01/2026"), // MM/DD/YYYY
  callForSpeakerEndOn: new Date("01/05/2027"), // MM/DD/YYYY — update if needed

  registrationStartOn: null,
  registrationEndOn: null,

  isSchedulePublished: false,
  sessionizeApiId: null,
  sessionizeScheduleAppUrl: null,
  showComingSoonBanner: true,
  summitAffiliation: null,
  partners: [],
};

export const HERO_CARD_URL = `${SITE_URL}/2027/techmang27-hero-card.png`;

export const eventMetaData = {
  title:
    "TechMang27 | The Annual Flagship Event of Hackerspace Mangaluru | 2027 edition",
  description:
    "Join TechMang27 — AI Beyond the Hype: Ideas, Innovation and Impact. Date to be announced. Call for Speakers open for Student and Professional editions.",
  bookmarks: "https://hackersmang.org/techmang27",
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
  // startDate/endDate omitted until the new date is announced
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Mangaluru",
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
