import { AlertTriangle, TrendingUp, Shield, Brain } from "lucide-react";

const DisclaimerFooter = () => {
  return (
    <footer className="py-12 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        {/* Disclaimer Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-destructive/5 border border-destructive/20">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-foreground mb-2">Risk Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trading in Forex and Stock markets involves substantial risk and is not suitable for every investor. 
                Past performance is not indicative of future results. We provide <strong>education only</strong> – 
                no tips, no guaranteed profits. Always trade with capital you can afford to lose.
              </p>
            </div>
          </div>
        </div>

        {/* Motto */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-border">
            <TrendingUp className="w-5 h-5 text-gold" />
            <span className="font-medium">Only Learning</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-border">
            <Brain className="w-5 h-5 text-emerald" />
            <span className="font-medium">Only Discipline</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-border">
            <Shield className="w-5 h-5 text-gold" />
            <span className="font-medium">Only Growth</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-display text-2xl font-bold">
              <span className="text-foreground">Trading</span>
              <span className="text-gold">Tales</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 TradingTales Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DisclaimerFooter;
