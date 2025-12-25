import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Phone, MapPin } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[200px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Card */}
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-gold/30 relative overflow-hidden">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl opacity-50">
            <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-gold via-emerald to-gold animate-pulse" style={{ filter: 'blur(4px)' }} />
          </div>
          
          {/* Inner Content */}
          <div className="relative bg-card rounded-lg p-8 md:p-12">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-gold/10 border border-gold/30">
                <Phone className="w-8 h-8 text-gold" />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Start Your <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Trading Journey</span> Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Get personalized mentorship and transform your trading career
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border">
                <Phone className="w-5 h-5 text-gold" />
                <span className="font-medium">+91 7483487822</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-medium">Karnataka, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="emerald" size="xl" className="group" asChild>
                <a href="https://wa.me/7483487822" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://t.me/+33ey24fbeAxlMzA1" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Join Free Telegram Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
