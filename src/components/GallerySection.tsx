import tradeProfit1 from "@/assets/trade-profit-1.jpg";
import tradeProfit2 from "@/assets/trade-profit-2.jpg";
import tradingSetup from "@/assets/trading-setup.jpg";
import chartAnalysis from "@/assets/chart-analysis.jpg";
import heroImage from "@/assets/hero-trading-desk.jpg";

const galleryImages = [
  { src: tradeProfit1, label: "Profit Result", category: "Results" },
  { src: tradingSetup, label: "Trading Setup", category: "Setup" },
  { src: chartAnalysis, label: "Chart Analysis", category: "Education" },
  { src: tradeProfit2, label: "Student Profit", category: "Results" },
  { src: heroImage, label: "Pro Workspace", category: "Setup" },
  { src: tradeProfit1, label: "Weekly Gains", category: "Results" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="text-sm font-medium text-gold">Our Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Trades & <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real screenshots from our trading journey and student results
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-500 ${
                index === 0 || index === 4 ? 'row-span-2' : ''
              }`}
            >
              <img 
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-medium mb-2">
                  {image.category}
                </span>
                <p className="font-display font-bold text-foreground">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
