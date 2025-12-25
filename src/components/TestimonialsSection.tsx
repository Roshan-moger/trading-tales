import { Star, Quote } from "lucide-react";
import tradeProfit1 from "@/assets/trade-profit-1.jpg";
import tradeProfit2 from "@/assets/trade-profit-2.jpg";

const testimonials = [
  {
    name: "Rahul M.",
    role: "Forex Trader",
    content: "I doubled my account in 3 months after joining TradingTales mentorship. The structured approach to price action completely changed my game.",
    image: tradeProfit1,
    profit: "+$5,550",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Stock Investor",
    content: "This mentorship changed my mindset completely. Now I trade with discipline and patience. No more revenge trading!",
    image: tradeProfit2,
    profit: "+$2,000",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Part-time Trader",
    content: "From zero knowledge to consistent profits. The 1-on-1 sessions with the mentor were incredibly valuable. Best investment I ever made.",
    image: tradeProfit1,
    profit: "+$3,200",
    rating: 5,
  },
  {
    name: "Sneha R.",
    role: "Full-time Trader",
    content: "Risk management techniques taught here saved my account multiple times. I finally understand how professionals trade.",
    image: tradeProfit2,
    profit: "+$4,800",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 mb-6">
            <span className="text-sm font-medium text-emerald">Student Success Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Real <span className="bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">Results</span> From Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – see what our students have achieved
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  profit: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, image, profit, rating }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 hover:border-emerald/50 transition-all duration-500 group">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-gold/30 mb-4" />

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6 text-lg">
        "{content}"
      </p>

      {/* Profit Screenshot */}
      <div className="relative rounded-lg overflow-hidden mb-6 border border-border">
        <img 
          src={image} 
          alt="Trading profit screenshot"
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald/20 border border-emerald/30 text-emerald font-bold text-sm">
            {profit}
          </span>
        </div>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
