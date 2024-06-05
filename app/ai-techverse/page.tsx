import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";

import "@/app/ai-techverse/assets/style.css"
import "@/app/ai-techverse/assets/fonts.css"

function page() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default page