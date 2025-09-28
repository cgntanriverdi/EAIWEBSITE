import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Star, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoize particle positions to prevent regeneration on re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: `particle-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: i * 0.3,
      animationDuration: 6 + Math.random() * 4,
    }));
  }, []);

  // Memoize magnetic particle positions
  const magneticParticles = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: `magnetic-${i}`,
      left: 20 + i * 20,
      top: 30 + i * 15,
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Cosmic Background */}
      <div className="absolute inset-0 bg-cosmic-gradient">
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-800/20"></div>
        
        {/* Dynamic light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-purple-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-breathe"></div>
      </div>
      
      {/* Advanced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
        
        {/* Interactive magnetic particles */}
        {magneticParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) * 0.01}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) * 0.01}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-3 h-3 border border-purple-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-3/4 right-20 w-4 h-4 border border-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-2 h-6 bg-gradient-to-b from-purple-400/20 to-transparent animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content with Glass Morphism */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Premium Badge */}
        <div className="mb-8 animate-fade-in-scale">
          <Badge className="glass-card text-white border-white/20 hover-glow hover-lift px-6 py-2 text-sm font-medium shadow-glow" data-testid="badge-new-feature">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            AI-Powered Commerce Revolution
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </Badge>
        </div>
        
        {/* Hero Title with Advanced Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-stagger-up text-shadow-glow" data-testid="text-hero-title">
          <span className="block text-white">Elevate Your</span>
          <span className="block text-gradient-brand animate-gradient-shift">E-commerce</span>
          <span className="block text-lg md:text-2xl lg:text-3xl font-normal text-white/80 mt-4">
            With AI Precision
          </span>
        </h1>
        
        {/* Subtitle with Enhanced Typography */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed animate-stagger-up font-light" style={{ animationDelay: "0.1s" }} data-testid="text-hero-subtitle">
          Transform amateur listings into <span className="text-gradient-brand font-medium">agency-grade masterpieces</span>. 
          Choose individual AI agents or deploy our complete automation workflow.
        </p>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-stagger-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/95 h-14 px-10 text-lg font-semibold shadow-premium hover-lift hover-glow transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => console.log('Start Free Trial clicked')}
            data-testid="button-start-trial"
          >
            Start Free Trial
            <ArrowRight className={`w-5 h-5 ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-card text-white border-white/30 h-14 px-10 text-lg hover-lift hover-glow transition-all duration-300"
            onClick={() => console.log('Watch Demo clicked')}
            data-testid="button-watch-demo"
          >
            <Zap className="w-5 h-5 mr-3" />
            Watch Demo
          </Button>
        </div>
        
        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-stagger-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card p-6 rounded-2xl hover-lift hover-glow transition-all duration-300" data-testid="stat-conversions">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">85%</div>
            <div className="text-white/70 font-medium">Higher Conversions</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-lift hover-glow transition-all duration-300" data-testid="stat-time-saved">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">10x</div>
            <div className="text-white/70 font-medium">Faster Creation</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-lift hover-glow transition-all duration-300" data-testid="stat-revenue">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">40%</div>
            <div className="text-white/70 font-medium">Revenue Increase</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
      </div>
    </section>
  );
}