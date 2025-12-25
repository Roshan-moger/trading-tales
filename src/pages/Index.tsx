import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeTeachSection from "@/components/WhatWeTeachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactCTASection from "@/components/ContactCTASection";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TradingTales - Premium Forex & Stock Trading Mentorship</title>
        <meta 
          name="description" 
          content="Learn Forex and Stock trading from market experts. Join 400+ students who transformed their trading with our premium mentorship program. No fake tips, only real learning and discipline." 
        />
        <meta name="keywords" content="forex trading, stock trading, trading mentorship, learn trading, forex education, trading psychology, risk management" />
        <link rel="canonical" href="https://tradingtales.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TradingTales - Premium Forex & Stock Trading Mentorship" />
        <meta property="og:description" content="Learn Forex and Stock trading from market experts. Join 400+ students who transformed their trading career." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TradingTales - Premium Forex & Stock Trading Mentorship" />
        <meta name="twitter:description" content="Learn Forex and Stock trading from market experts. No fake tips, only real learning." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <WhatWeTeachSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactCTASection />
        <DisclaimerFooter />
      </main>
    </>
  );
};

export default Index;
