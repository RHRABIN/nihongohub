import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const PrivacyPolicy = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/privacy-policy.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error fetching privacy policy:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - NihongoHub</title>
        <meta
          name="description"
          content="Privacy Policy for NihongoHub. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                prose-headings:font-display prose-headings:font-bold 
                prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:mb-8
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-blockquote:border-primary prose-blockquote:bg-muted prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-lg prose-blockquote:italic
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                ">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
