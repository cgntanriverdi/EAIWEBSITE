import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  metrics?: {
    label: string;
    value: string;
    color: string;
  };
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  avatar,
  metrics 
}: TestimonialCardProps) {
  return (
    <Card className="bg-card hover:bg-card/80 transition-colors" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4" data-testid="rating-stars">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        {/* Testimonial Content */}
        <blockquote className="text-lg text-foreground mb-6 leading-relaxed" data-testid="text-testimonial-content">
          "{content}"
        </blockquote>
        
        {/* Metrics Badge */}
        {metrics && (
          <Badge 
            className={`mb-6 ${metrics.color} text-white`} 
            data-testid="badge-metrics"
          >
            {metrics.label}: {metrics.value}
          </Badge>
        )}
        
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12" data-testid="avatar-author">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground" data-testid="text-author-name">
              {name}
            </div>
            <div className="text-sm text-muted-foreground" data-testid="text-author-role">
              {role} • {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}