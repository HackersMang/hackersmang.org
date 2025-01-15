import Hero from "./components/Hero";

import "@/assets/ai-techverse.css"
import "@/assets/fonts.css"
// import Speakers from "./components/Speakers";
// import Agendas from "./components/Agendas";
import { Metadata } from "next";
import Particles from "@/components/magicui/particles";
import { WordFadeIn } from "@/components/magicui/word-fade-in";

export const metadata: Metadata = {
    metadataBase: new URL('https://hackersmang.org'),
    title: "TECHMANG25 | 2025 edition by Hackerspace Mangaluru",
    description: "TECHMANG25, 2025 edition hosted by Hackerspace Mangaluru.",
    generator: 'HackersMang',
    applicationName: 'HackersMang',
    referrer: 'origin-when-cross-origin',
    keywords: [
        'TECHMANG25', 'Hackers Mang', 'Open Source', 'Cloud Computing', 'DevOps', 'Testing', 'Big Data', 'Search Engines', 'RDBMS', 'NoSQL', 'NLP', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Automation', 'Python', 'PHP', 'Node.js', 'Angular', 'React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Docker', 'Kubernetes', 'SaltStack', 'Ansible', 'Linux', 'MySQL', 'PostgreSQL', 'MongoDB', 'Sphinx', 'Elasticsearch', 'Data Science', 'TensorFlow', 'PyTorch', 'Blockchain', 'Cybersecurity', 'IoT', 'Edge Computing', 'Quantum Computing', '5G', 'AR/VR', 'Robotics', 'Microservices', 'Serverless', 'GraphQL', 'Jenkins', 'Terraform', 'AWS', 'Azure', 'Google Cloud', 'CI/CD', 'Agile', 'Scrum', 'Kanban', 'JIRA', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'CI/CD', 'SaaS', 'PaaS', 'IaaS', 'Firebase', 'Heroku', 'API', 'REST', 'GraphQL', 'WebAssembly', 'Progressive Web Apps', 'Single Page Applications', 'Server-Side Rendering', 'Jamstack', 'Headless CMS', 'Contentful', 'Strapi', 'Sanity', 'Hugo', 'Jekyll', 'Gatsby', 'Next.js', 'Nuxt.js', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'Laravel', 'Ruby on Rails'
    ],
    authors: [{ name: 'Hackerspace' }, { name: 'Mangaluru', url: 'https://hackersmang.org' }],
    creator: 'Mashfooq Hussain',
    publisher: 'Hackerspace Mangaluru',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "TECHMANG25 | 2025 edition by Hackerspace Mangaluru",
        description: "TECHMANG25, 2025 edition hosted by Hackerspace Mangaluru.",
        url: 'https://hackersmang.org/techmang25',
        siteName: 'Hackerspace Mangaluru',
        images: [
            {
                url: 'https://hackersmang.org/techmang25/cards/hero-card.png',
                width: 800,
                height: 600,
            },
            {
                url: 'https://hackersmang.org/techmang25/cards/hero-card.png',
                width: 1800,
                height: 1600,
                alt: 'TECHMANG 2025',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "TECHMANG25 | 2025 edition by Hackerspace Mangaluru",
        description: "TECHMANG25, 2025 edition hosted by Hackerspace Mangaluru.",
        images: 'https://hackersmang.org/techmang25/cards/hero-card.png',
    },
    alternates: {
        canonical: 'https://hackersmang.org/techmang25',
        languages: {
            'en-US': '/en-US',
        },
    },
    bookmarks: ['https://hackersmang.org/techmang25'],
    category: 'technology',
};

function page() {
    return (
        <main className="relative bg-grainy">
            <Particles
                quantity={100}
                ease={80}
                color="#d4e20b"
                refresh
            />
            <Hero />
            {/* <Agendas /> */}
            {/* <Speakers /> */}
            <footer className='pt-8 slg:pt-24 lg:pb-8'>
                <WordFadeIn words="H a c k e r s M a n g" className="text-[2.5rem] text-center mt-auto lg:mb-0 outfit-black -space-x-2" delay={0.08} />
            </footer>
        </main>
    );
}

export default page