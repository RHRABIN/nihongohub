const steps = [
  {
    number: "01",
    title: "Start with the Basics",
    description: "Begin your journey with hiragana and katakana. Our interactive flashcards and writing exercises make memorization effortless.",
    japanese: "基礎から始める",
  },
  {
    number: "02",
    title: "Build Your Vocabulary",
    description: "Learn essential words and phrases through contextual lessons. Each word comes with native audio and example sentences.",
    japanese: "語彙を増やす",
  },
  {
    number: "03",
    title: "Master Grammar",
    description: "Understand Japanese sentence structure through clear explanations and plenty of practice exercises.",
    japanese: "文法をマスター",
  },
  {
    number: "04",
    title: "Practice Conversation",
    description: "Apply what you've learned in AI-powered conversations and community practice sessions with native speakers.",
    japanese: "会話を練習する",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-sakura-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Your path to Japanese fluency
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven four-step method takes you from complete beginner 
            to confident Japanese speaker.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index !== steps.length - 1 ? "mb-16" : ""
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary shadow-glow flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[calc(50%-1px)] mt-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <span className="text-sm text-primary/70 font-display">
                  {step.japanese}
                </span>
                <h3 className="text-2xl font-display font-semibold text-foreground mt-1 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
