import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Travel App Redesign",
      category: "UI/UX Design",
      metric: "36% Retention Growth",
      description: "Complete redesign of a travel booking platform focusing on user experience.",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Restaurant Dashboard",
      category: "Web Development",
      metric: "45% Faster Operations",
      description: "A comprehensive restaurant management system with real-time analytics.",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "SaaS Platform",
      category: "Full Stack",
      metric: "200% User Growth",
      description: "End-to-end development of a B2B SaaS platform for project management.",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Healthcare App",
      category: "Mobile App",
      metric: "4.9 App Store Rating",
      description: "Patient management and telemedicine app for healthcare providers.",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "E-commerce Platform",
      category: "Branding & Dev",
      metric: "180% Revenue Increase",
      description: "Complete brand identity and e-commerce store development.",
      gradient: "from-purple-500/20 to-violet-500/20",
    },
    {
      title: "Fintech Dashboard",
      category: "UI/UX Design",
      metric: "60% Time Saved",
      description: "Financial analytics dashboard with intuitive data visualization.",
      gradient: "from-cyan-500/20 to-sky-500/20",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industry <span className="font-serif italic text-gradient">Wins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects that have transformed businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Category Badge */}
                <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                  {project.category}
                </span>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metric */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{project.metric}</span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
