import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Gradient */}
      <div className="absolute inset-0 bg-brand-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <Badge className="mb-6 bg-white/10 text-white border-white/20 hover-elevate" data-testid="badge-new-feature">
          <Sparkles className="w-3 h-3 mr-1" />
          AI-Powered Commerce Revolution
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-stagger-up" data-testid="text-hero-title">
          Elevate Your E-commerce
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            With AI Precision
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-stagger-up" style={{ animationDelay: "0.1s" }} data-testid="text-hero-subtitle">
          Transform amateur listings into agency-grade masterpieces. Choose individual AI agents or deploy our complete automation workflow for professional e-commerce success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-stagger-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 h-12 px-8 text-lg font-semibold shadow-xl hover-elevate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => console.log('Start Free Trial clicked')}
            data-testid="button-start-trial"
          >
            Start Free Trial
            <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white bg-white/10 backdrop-blur-sm h-12 px-8 text-lg hover-elevate"
            onClick={() => console.log('Watch Demo clicked')}
            data-testid="button-watch-demo"
          >
            <Zap className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 animate-stagger-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2" data-testid="stat-conversions">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>85% Higher Conversions</span>
          </div>
          <div className="flex items-center gap-2" data-testid="stat-time-saved">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>10x Faster Listing Creation</span>
          </div>
          <div className="flex items-center gap-2" data-testid="stat-revenue">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>40% Revenue Increase</span>
          </div>
        </div>
      </div>
    </section>
  );
}