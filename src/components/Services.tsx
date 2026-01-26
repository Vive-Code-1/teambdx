import { Palette, Code, Layers, Megaphone, PenTool, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that drive engagement and conversions.",
      features: ["App Design", "Website Design", "Dashboard Design", "Product Design"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building robust, scalable web applications with cutting-edge technologies.",
      features: ["Full Stack", "Mobile App", "API Integration", "E-commerce"],
    },
    {
      icon: Layers,
      title: "Logo & Branding",
      description: "Crafting memorable brand identities that resonate with your target audience.",
      features: ["Visual Identity", "Brand Strategy", "3D Logos", "Brand Guidelines"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that amplify your brand and drive growth.",
      features: ["SEO", "Social Media", "Content Strategy", "PPC Campaigns"],
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your message effectively.",
      features: ["Print Design", "Packaging", "Illustrations", "Motion Graphics"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What We <span className="font-serif italic text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and elevate your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-3xl hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
