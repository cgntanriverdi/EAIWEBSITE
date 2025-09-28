import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Features", href: "#features", icon: Zap },
    { label: "Workflow", href: "#workflow", icon: Sparkles },
    { label: "Pricing", href: "#pricing", icon: ArrowRight },
    { label: "Contact", href: "#contact", icon: Menu }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-premium' 
          : 'bg-transparent'
      }`} 
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <div className="flex items-center gap-3 hover-lift transition-transform duration-300" data-testid="logo">
            <div className="relative">
              <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center shadow-glow hover-glow transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-brand-gradient rounded-xl blur-xl opacity-20 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">AI Commerce</span>
              <span className="text-sm text-white/70 font-medium">Studio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-6 py-3 text-white/80 hover:text-white font-medium transition-all duration-300 rounded-xl hover-lift"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Navigate to ${item.label}`);
                }}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>{item.label}</span>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl -z-10"></div>
                
                {/* Active indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-8 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="glass-card p-1 rounded-full">
              <ThemeToggle />
            </div>
            
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white glass-card border-white/10 hover-lift hover-glow transition-all duration-300"
              onClick={() => console.log('Sign in clicked')}
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
            
            <Button
              className="bg-white text-black hover:bg-white/90 font-semibold shadow-premium hover-lift hover-glow transition-all duration-300 px-6 relative overflow-hidden group"
              onClick={() => console.log('Start trial clicked')}
              data-testid="button-start-trial-nav"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="glass-card p-1 rounded-full">
              <ThemeToggle />
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="glass-card text-white border-white/10 hover-glow transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`} 
          data-testid="mobile-menu"
        >
          <div className="glass-card mx-4 mb-4 rounded-2xl p-6 shadow-premium">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white rounded-xl hover-lift transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    console.log(`Navigate to ${item.label}`);
                  }}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">{item.label}</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
            
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-white/80 hover:text-white glass-card border-white/10 h-12"
                onClick={() => {
                  setIsMenuOpen(false);
                  console.log('Sign in clicked');
                }}
                data-testid="button-mobile-sign-in"
              >
                Sign In
              </Button>
              
              <Button
                className="w-full bg-white text-black hover:bg-white/90 font-semibold shadow-lg h-12 relative overflow-hidden group"
                onClick={() => {
                  setIsMenuOpen(false);
                  console.log('Start trial clicked');
                }}
                data-testid="button-mobile-start-trial"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                
                {/* Mobile shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}