import { TrendingUp, Brain, Shield, UserCheck, BookOpen, Trophy } from "lucide-react";
import tradeProfit1 from "@/assets/trade-profit-1.jpg";
import tradeProfit2 from "@/assets/trade-profit-2.jpg";
import tradingSetup from "@/assets/trading-setup.jpg";
import chartAnalysis from "@/assets/chart-analysis.jpg";

const teachings = [
  {
    icon: TrendingUp,
    title: "Forex From Zero to Pro",
    description: "Learn price action, structure, liquidity & institutional logic.",
    image: chartAnalysis,
    gradient: "from-emerald/20 to-emerald/5",
  },
  {
    icon: Brain,
    title: "Trading Psychology Mastery",
    description: "Control emotions, over-trading & revenge trading.",
    image: tradeProfit1,
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: Shield,
    title: "Risk Management & Capital Protection",
    description: "Build consistency before profits.",
    image: tradeProfit2,
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: UserCheck,
    title: "1-to-1 Personal Mentorship",
    description: "Direct WhatsApp & live chart guidance.",
    image: tradingSetup,
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: BookOpen,
    title: "Proven Trading Strategies (PDF)",
    description: "Tested setups with entry, stop loss & target logic.",
    image: chartAnalysis,
    gradient: "from-emerald/20 to-emerald/5",
  },
  {
    icon: Trophy,
    title: "Live Market Trade Reviews",
    description: "Real trade breakdowns every week.",
    image: tradeProfit1,
    gradient: "from-gold/20 to-gold/5",
  },
];

const WhatWeTeachSection = () => {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="text-sm font-medium text-gold">Our Curriculum</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What We <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Teach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the markets with our comprehensive trading education program
          </p>
        </div>

        {/* Teaching Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachings.map((item, index) => (
            <TeachingCard key={index} {...item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeachingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  gradient: string;
  delay: number;
}

const TeachingCard = ({ icon: Icon, title, description, image, gradient, delay }: TeachingCardProps) => {
  return (
    <div 
      className="group glass-card overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-gold/30">
          <Icon className="w-6 h-6 text-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default WhatWeTeachSection;
