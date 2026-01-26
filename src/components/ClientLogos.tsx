const ClientLogos = () => {
  const clients = [
    "TechCorp", "InnovateLabs", "FutureWorks", "DigitalEdge", 
    "CloudSync", "DataFlow", "SmartSoft", "NextGen",
    "TechCorp", "InnovateLabs", "FutureWorks", "DigitalEdge",
  ];

  return (
    <section className="py-16 border-y border-border/30 overflow-hidden">
      <div className="container px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
          Trusted by Leading Brands
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Gradient Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <div className="glass px-8 py-4 rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl font-semibold text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
