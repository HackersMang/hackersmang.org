import { EventDetailProps } from "@/lib/types";

// Speakers
export const SPEAKERS = [
  {
    name: 'Divya Raj K',
    designation: 'Data Scientist',
    topic: 'Data Manipulation with Polars',
    image: '/2024-november/speakers/divyak.png',
    socialLinks: 'https://www.linkedin.com/in/divyark22/',
    company: "(UniCourt) Mangalore Infotech Solutions Pvt. Ltd.",
    order: 2
  },
  {
    name: 'Subramanya C',
    designation: 'Software Developer',
    topic: 'Demystifying Pythons Memory Model',
    image: '/2024-november/speakers/subramanyac.jpg',
    socialLinks: 'http://www.linkedin.com/in/subramanya-c',
    company: "CodeCraft Technologies Pvt Ltd",
    order: 1
  },
  {
    name: 'Karthik Suvarna',
    designation: 'Director of R&D at Qxf2 Services',
    topic: 'Advanced Data Visualization Techniques',
    image: '/2024-november/speakers/karthik.jpg',
    socialLinks: 'http://linkedin.com/in/karthik-suvarna-16489bb0',
    company: "AIOTRIX PRIVATE LIMITED",
    order: 3
  },
  {
    name: 'Manoj Singh',
    designation: 'Software Engineer at Unicourt',
    topic: 'Leveraging AWS Bedrock Hosted Models for Data Extraction from HTML, Images, and PDFs',
    image: '/2024-november/speakers/manojs.jpg',
    socialLinks: 'https://www.linkedin.com/in/manoj-singh-04434121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    company: "(UniCourt) Mangalore Infotech Solutions Pvt. Ltd.",
    order: 4
  },
  {
    name: 'Mohammed Akhnas Gawai',
    designation: 'Software Engineer L1',
    topic: 'AI Meets WhatsApp',
    image: '/2024-november/speakers/akhnas.jpg',
    socialLinks: 'https://www.linkedin.com/in/mohammed-akhnas-gawai-b07319201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    company: "Pace Wisdom Solutions",
    order: 5
  }
];

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMNov24",
  subtitle: "HackersMang, 2024 November Edition",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("11/23/2024"), // MM/DD/YYYY
  tracks: [
    {
      name: "Main Track",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/1475735"
    }
  ],
  registrationStartOn: new Date("11/20/2024"), // MM/DD/YYYY
  registrationEndOn: new Date("11/23/2024"),
};
