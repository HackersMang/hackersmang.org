import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <main className="relative bg-grainy min-h-screen w-screen overflow-hidden">
      <Header />
      <VelocityScroll
        text="Open Source, Cloud, Devops, Testing, Big Data, Search Engines, RDBMS, NoSQL, NLP, Machine Learning, Automation, Python, PHP, NodeJS, Angular, HTML5, CSS3, Docker, SaltStack, Ansible, Linux, MySQL, Postgres, MongoDB, Sphinx, ElasticSearch and more."
        default_velocity={1}
        className="font-extrabold text-3xl md:text-5xl tracking-[-0.02em] text-[#9b9b9b] drop-shadow-sm dark:text-white md:leading-[5rem]"
      />
      <Hero />
    </main>
  );
}
