import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { label: "UI/UX Design", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Branding", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#founder" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "Behance", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/30">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground text-lg">
                T
              </div>
              <span className="text-xl font-bold text-foreground">
                Team<span className="text-gradient">BDx</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading UI/UX design agency creating digital experiences that drive results.
            </p>
            <Button 
              variant="glass" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-xl"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Follow Us</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2024 TeamBDx. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Bangladesh
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
