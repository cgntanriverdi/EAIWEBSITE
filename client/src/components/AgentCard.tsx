import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, ArrowRight, Sparkles, Check } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
  gradient: string;
}

export default function AgentCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price, 
  isPopular = false,
  gradient 
}: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-105`}></div>
      
      <Card 
        className={`relative overflow-hidden bg-card border border-card-border hover-lift hover-glow cursor-pointer transition-all duration-500 rounded-3xl shadow-premium ${
          isPopular ? 'ring-2 ring-primary shadow-glow' : ''
        }`} 
        data-testid={`card-agent-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {/* Premium Popular Badge */}
        {isPopular && (
          <div className="absolute top-6 right-6 z-10">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-4 py-2 rounded-full shadow-glow animate-pulse-glow" data-testid="badge-popular">
              <Sparkles className="w-4 h-4 mr-2" />
              Most Popular
            </Badge>
          </div>
        )}
        
        {/* Dynamic gradient background */}
        <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-all duration-500`}></div>
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-shift"></div>
        
        <CardContent className="p-8 relative z-10">
          {/* Premium Icon Container */}
          <div className="relative mb-8">
            <div className={`w-20 h-20 rounded-2xl ${gradient} flex items-center justify-center shadow-premium hover-glow transition-all duration-500 group-hover:scale-110`} data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            {/* Icon glow effect */}
            <div className={`absolute inset-0 w-20 h-20 rounded-2xl ${gradient} blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
            
            {/* Floating particles around icon */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Enhanced Typography */}
          <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-gradient-brand transition-all duration-300" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          
          <p className="text-card-foreground mb-8 leading-relaxed text-base transition-all duration-300" data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          
          {/* Premium Feature List */}
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 group/item"
                data-testid={`feature-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-0 group-hover/item:opacity-30 transition-all duration-300"></div>
                </div>
                <span className="text-card-foreground transition-colors duration-300 font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Premium Pricing Section */}
          <div className="relative">
            <div className="bg-card border border-card-border p-6 rounded-2xl mb-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span 
                    className="text-4xl font-bold text-card-foreground" 
                    data-testid={`text-price-${title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {price}
                  </span>
                  <span className="text-card-foreground/70 ml-2 font-medium">per use</span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 text-sm font-semibold">Best Value</div>
                  <div className="text-card-foreground/60 text-xs">Save 40%</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <Button 
              className={`w-full h-14 text-lg font-semibold rounded-2xl relative overflow-hidden group/btn transition-all duration-500 hover-lift hover-glow ${
                isPopular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-premium' 
                  : 'bg-card border border-border hover:bg-card/80'
              }`}
              onClick={() => console.log(`${title} agent selected`)}
              data-testid={`button-select-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Choose {title}
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </span>
              
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
              
              {/* Button glow for popular cards */}
              {isPopular && (
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover/btn:opacity-20 transition-all duration-500"></div>
              )}
            </Button>
          </div>
        </CardContent>
        
        {/* Premium corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </Card>
    </div>
  );
}