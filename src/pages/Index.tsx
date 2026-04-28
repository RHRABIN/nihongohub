import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
// import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NihongoHub - Learn Japanese the Modern Way</title>
        <meta
          name="description"
          content="Master Japanese with NihongoHub. Interactive lessons, native audio, AI-powered practice, and JLPT preparation. Start learning Japanese for free today."
        />
        <meta
          name="keywords"
          content="learn Japanese, Japanese language, JLPT, hiragana, katakana, kanji, Japanese lessons"
        />
        <link rel="canonical" href="https://NihongoHub.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          {/* <Testimonials /> */}
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
