import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

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
  return (
    <Card className={`relative overflow-hidden hover-elevate cursor-pointer transition-all duration-300 ${isPopular ? 'ring-2 ring-primary' : ''}`} data-testid={`card-agent-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {isPopular && (
        <Badge className="absolute top-4 right-4 bg-brand-gradient text-white z-10" data-testid="badge-popular">
          Most Popular
        </Badge>
      )}
      
      {/* Gradient Background */}
      <div className={`absolute inset-0 opacity-5 ${gradient}`}></div>
      
      <CardContent className="p-8 relative z-10">
        <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 shadow-lg`} data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-foreground" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-foreground" data-testid={`text-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {price}
            </span>
            <span className="text-sm text-muted-foreground">per use</span>
          </div>
          
          <Button 
            className="w-full hover-elevate" 
            variant={isPopular ? "default" : "outline"}
            onClick={() => console.log(`${title} agent selected`)}
            data-testid={`button-select-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Choose {title}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}