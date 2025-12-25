import { Button } from "@/components/ui/button";
import { MessageCircle, Send, BarChart3, Users, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-trading-desk.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-sm font-medium text-gold">Live Trading Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-foreground">Trading</span>
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">Tales</span>
            <span className="text-foreground"> Community</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light">
            Learn Forex & Stock Trading From Market Experts
          </p>
          <p className="text-lg text-gold font-semibold mb-12">
            No Fake Tips. Only Real Learning & Discipline.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://t.me/+33ey24fbeAxIMzA1" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Join Free Telegram Channel
              </a>
            </Button>
            <Button variant="emerald" size="xl" className="group" asChild>
              <a href="https://wa.me/917619618640" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Mentorship – WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <StatItem icon={<BarChart3 className="w-6 h-6 text-gold" />} value="99+" label="Educational Posts" />
            <StatItem icon={<Users className="w-6 h-6 text-gold" />} value="700+" label="Followers" />
            <StatItem icon={<GraduationCap className="w-6 h-6 text-gold" />} value="400+" label="Students Trained" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3 glass-card px-6 py-4">
    {icon}
    <div className="text-left">
      <p className="text-2xl font-bold font-display text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default HeroSection;
