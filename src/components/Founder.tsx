import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <section id="founder" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-accent/5 to-transparent rounded-full" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our <span className="font-serif italic text-gradient">Founder</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <span className="text-7xl font-bold text-gradient">R</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground text-2xl">🚀</span>
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Md. Rafikuzzaman
              </h3>
              <p className="text-xl text-primary font-medium mb-4">
                Founder & CEO
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A visionary leader with over 8 years of experience in digital design and development. 
                Passionate about creating impactful digital experiences that help businesses grow and succeed 
                in the modern digital landscape.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="mailto:rafikuzzaman10@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">rafikuzzaman10@gmail.com</span>
                </a>
                <a 
                  href="tel:+8801791208768" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+8801791-208768</span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Button variant="glass" size="icon" className="rounded-xl">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="hero" className="group">
                  <span>Connect</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
