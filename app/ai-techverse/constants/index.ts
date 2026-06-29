import { EventDetailProps } from "@/lib/types";
import { SITE_NAME, SITE_URL } from "@/lib/basemeta";

// Speakers
export const SPEAKERS = [
  {
    name: 'Esther Raina Monterio',
    designation: 'Data Scientist',
    topic: 'A Basic Guide to Create a RAG Application Using LangChain and LLM',
    image: '/ai-techverse/speakers/esther.jpeg',
    socialLinks: 'https://in.linkedin.com/in/esther-raina-monteiro-4342161b6',
    company: "CodeCraft Technologies Pvt Ltd",
    order: 1
  },
  {
    name: 'Prajnesh Shetty',
    designation: 'Software Developer',
    topic: 'A Basic Guide to Using YOLOv8 and Annotation Tools for Customized Object Detection Models',
    image: '/ai-techverse/speakers/prajnesh.jpeg',
    socialLinks: 'https://www.linkedin.com/in/prajnesh-shetty-a44275127/',
    company: "CodeCraft Technologies Pvt Ltd",
    order: 2
  },
  {
    name: 'Avinash',
    designation: 'Director of R&D at Qxf2 Services',
    topic: 'Insights and Strategies On Testing Machine Learning Models',
    image: '/ai-techverse/speakers/avinash.jpeg',
    socialLinks: 'http://linkedin.com/in/avinash010',
    company: "Qxf2 Services",
    order: 3
  },
  {
    name: 'Harshit Poojari',
    designation: 'Software Engineer at Unicourt',
    topic: 'A.I in Devops',
    image: '/ai-techverse/speakers/harshit.jpeg',
    socialLinks: 'https://www.linkedin.com/in/harshit-poojari-3a590916a/',
    company: "UniCourt",
    order: 4
  },
  {
    name: 'Kiran Shetty',
    designation: 'Unknown',
    topic: 'Journey Through AI: From Perceptron to Advanced Classification',
    image: '/ai-techverse/speakers/kiran.jpeg',
    socialLinks: 'https://www.linkedin.com/in/kiran-shetty-b4833899/',
    company: "Bix Bytes Solutions Pvt. Ltd",
    order: 5
  }
];

export const EVENT_DETAIL: EventDetailProps = {
  title: "#AiTechVerse",
  subtitle: "Talks on cutting edge AI technologies!",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("07/07/2024"), // MM/DD/YYYY
  tracks: [
    {
      name: "Main Track",
      registrationLink: "https://buytickets.at/hackerspacemangaluru/1308788"
    }
  ],
  registrationStartOn: new Date("07/07/2024"), // MM/DD/YYYY
  registrationEndOn: new Date("07/07/2024"),
};

export const HERO_CARD_URL =
  "https://hackersmang.org/ai-techverse/cards/hero-card.png";

export const eventMetaData = {
  title:
    "AI TechVerse | HackersMang, 2024 July Edition by Hackerspace Mangaluru",
  description:
    "HackersMang, 2024 July Edition hosted by Hackerspace Mangaluru.",
  bookmarks: "https://hackersmang.org/ai-techverse",
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
    availability: "https://schema.org/SoldOut",
  },
  image: [HERO_CARD_URL],
};