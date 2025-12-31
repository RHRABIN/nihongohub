import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground/10 animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary-foreground/5 animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gold/20 animate-float stagger-2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Start your Japanese journey today
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-4 font-display">
            今日から日本語の旅を始めよう
          </p>
          <p className="text-lg text-primary-foreground/70 mb-10">
            Join 50,000+ learners who are already on their path to fluency. 
            No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="sakura"
              size="xl"
              className="min-w-[200px]"
            >
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            ✓ Free forever plan available &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
