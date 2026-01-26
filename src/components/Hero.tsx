import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 Rating</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Leading </span>
            <span className="text-gradient">UI/UX</span>
            <br />
            <span className="text-foreground">Design Agency</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We Design Products That
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Drive</span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif italic text-gradient">Results</span>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              <span>Book a Call</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "25+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
