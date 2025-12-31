import { BookOpen, Headphones, Brain, Users, Gamepad2, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description: "Progress from hiragana to advanced kanji with our carefully designed curriculum tailored for all levels.",
    japanese: "体系的な学習",
  },
  {
    icon: Headphones,
    title: "Native Audio",
    description: "Perfect your pronunciation with recordings from native Japanese speakers in real-world contexts.",
    japanese: "ネイティブ音声",
  },
  {
    icon: Brain,
    title: "AI Practice Partner",
    description: "Engage in realistic conversations with our AI tutor that adapts to your skill level and interests.",
    japanese: "AI会話練習",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with fellow learners, join study groups, and practice with native speakers worldwide.",
    japanese: "コミュニティ",
  },
  {
    icon: Gamepad2,
    title: "Gamified Progress",
    description: "Stay motivated with streaks, achievements, and friendly competitions as you level up your skills.",
    japanese: "ゲーム要素",
  },
  {
    icon: Award,
    title: "JLPT Preparation",
    description: "Prepare for the Japanese Language Proficiency Test with targeted practice and mock exams.",
    japanese: "JLPT対策",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Everything you need to become fluent
          </h2>
          <p className="text-lg text-muted-foreground">
            Nigongohub combines proven learning methods with modern technology 
            to create the most effective Japanese learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Japanese Label */}
              <span className="text-sm text-primary/70 font-display">
                {feature.japanese}
              </span>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-foreground mt-2 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
