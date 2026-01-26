import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      content: "TeamBDx transformed our entire digital presence. Their attention to detail and creative vision exceeded our expectations. The results speak for themselves - our conversions increased by 150%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateLab",
      content: "Working with TeamBDx was a game-changer. They understood our vision immediately and delivered a product that our users absolutely love. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Solutions",
      content: "The team's expertise in UI/UX design is unmatched. They created an intuitive healthcare app that has received outstanding feedback from both patients and doctors.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Marketing Director, GlobalBrand",
      content: "Our brand identity has never been stronger. TeamBDx delivered a complete branding package that perfectly captures our company values and resonates with our audience.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="font-serif italic text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl hover-lift"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
