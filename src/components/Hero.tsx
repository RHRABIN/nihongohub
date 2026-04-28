import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating cherry blossoms */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-sakura opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-sakura opacity-40 animate-float-slow stagger-2" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-sakura opacity-30 animate-float stagger-3" />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-primary/20 animate-float-slow stagger-4" />
        
        {/* Large decorative circle */}
        <div className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full bg-secondary opacity-50" />
        <div className="absolute -left-20 bottom-20 w-[300px] h-[300px] rounded-full bg-sakura opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-in-up opacity-0 stagger-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            Learn Japanese the natural way
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2">
            Master Japanese with{" "}
            <span className="text-gradient">NihongoHub</span>
          </h1>

          {/* Japanese subtitle */}
          <p className="text-2xl md:text-3xl font-display text-primary/80 mb-6 animate-fade-in-up opacity-0 stagger-3">
            日本語を楽しく学ぼう
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 stagger-4">
            From complete beginner to fluent speaker. Interactive lessons, 
            native audio, and AI-powered practice sessions designed to make 
            learning Japanese intuitive and enjoyable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-5">
            <Button variant="hero" size="xl">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 50,000+ learners worldwide
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(2,400+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
