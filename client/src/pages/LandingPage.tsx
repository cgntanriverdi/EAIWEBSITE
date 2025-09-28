import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import PricingSection from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Camera, Target, Users, TrendingUp } from "lucide-react";

export default function LandingPage() {
  // todo: remove mock functionality
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Manager",
      company: "Fashion Forward Co",
      content: "Our conversion rates jumped 85% after implementing the AI agents. The product descriptions are incredibly persuasive and the automated pricing keeps us competitive.",
      rating: 5,
      metrics: { label: "Conversion Increase", value: "85%", color: "bg-green-500" }
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Tech Gadgets Pro",
      content: "The image generation agent is a game-changer. Studio-quality photos from basic product shots - our listings look like they belong in a premium catalog.",
      rating: 5,
      metrics: { label: "Time Saved", value: "20 hrs/week", color: "bg-blue-500" }
    },
    {
      name: "Elena Volkov",
      role: "Operations Director",
      company: "Global Marketplace Inc",
      content: "We've automated our entire listing workflow. What used to take our team 3 days now happens in 30 minutes. The ROI is incredible.",
      rating: 5,
      metrics: { label: "Revenue Growth", value: "145%", color: "bg-purple-500" }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-muted/30" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-problem-solution">
              <Target className="w-3 h-3 mr-1" />
              The E-commerce Challenge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-problem-title">
              Amateur Listings Kill Sales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-problem-description">
              Generic descriptions, poor pricing strategies, and low-quality images are costing you thousands in lost revenue. Transform your e-commerce presence with professional-grade AI automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid="text-problem-low-conversions">Low Conversions</h3>
              <p className="text-muted-foreground">Poor product descriptions fail to engage customers and drive sales</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid="text-problem-pricing">Wrong Pricing</h3>
              <p className="text-muted-foreground">Manual pricing leads to lost profits and competitive disadvantage</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid="text-problem-images">Amateur Images</h3>
              <p className="text-muted-foreground">Low-quality photos make products look unprofessional and cheap</p>
            </div>
          </div>
        </div>
      </section>


      {/* Workflow Visualization */}
      <WorkflowVisualization />

      {/* Social Proof */}
      <section className="py-20 px-4 bg-muted/30" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-testimonials">
              <Users className="w-3 h-3 mr-1" />
              Customer Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-testimonials-title">
              Trusted by E-commerce Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
              Join thousands of successful sellers who have transformed their businesses with our AI-powered platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="animate-stagger-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Contact */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AI Commerce Studio</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Elevating e-commerce with professional AI automation
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 AI Commerce Studio</span>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}