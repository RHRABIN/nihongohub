import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    japanese: "無料",
    price: "$0",
    period: "forever",
    description: "Perfect for casual learners getting started",
    features: [
      "Basic hiragana & katakana lessons",
      "100+ vocabulary words",
      "Limited practice exercises",
      "Community forum access",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Premium",
    japanese: "プレミアム",
    price: "$12",
    period: "per month",
    description: "For dedicated learners seeking fluency",
    features: [
      "Full curriculum access",
      "5,000+ vocabulary words",
      "Unlimited AI conversation practice",
      "JLPT preparation courses",
      "Offline mode",
      "Priority support",
    ],
    cta: "Start 7-Day Trial",
    featured: true,
  },
  {
    name: "Lifetime",
    japanese: "永久",
    price: "$199",
    period: "one-time",
    description: "Best value for committed learners",
    features: [
      "Everything in Premium",
      "Lifetime access",
      "All future updates included",
      "Exclusive masterclasses",
      "1-on-1 tutor sessions (monthly)",
      "Certificate of completion",
    ],
    cta: "Get Lifetime Access",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pb-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your learning goals. 
            Start free and upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-glow scale-105"
                  : "bg-card text-card-foreground border-border hover:shadow-card"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gold text-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <span
                  className={`text-sm font-display ${
                    plan.featured ? "text-primary-foreground/80" : "text-primary/70"
                  }`}
                >
                  {plan.japanese}
                </span>
                <h3
                  className={`text-2xl font-display font-bold mt-1 ${
                    plan.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${
                      plan.featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      plan.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    plan.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-gold" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "sakura" : "hero"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
