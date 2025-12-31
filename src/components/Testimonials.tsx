const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    location: "San Francisco, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Nigongohub made learning Japanese feel like a game. I went from zero to passing N4 in just 8 months!",
    japanese: "楽しく学べました！",
  },
  {
    name: "Marcus Weber",
    role: "University Student",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "The AI conversation partner is incredible. It's like having a patient tutor available 24/7.",
    japanese: "素晴らしい体験",
  },
  {
    name: "Yuki Tanaka",
    role: "Language Teacher",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "As a Japanese teacher, I recommend Nigongohub to all my students. The curriculum is well-structured.",
    japanese: "おすすめです",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Loved by learners worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied learners who have transformed 
            their Japanese skills with Nigongohub.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-background border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              <p className="text-primary font-display text-lg mb-6">
                {testimonial.japanese}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
