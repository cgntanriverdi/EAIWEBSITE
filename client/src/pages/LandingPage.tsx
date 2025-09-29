import Navigation from "@/components/Navigation";
import HeroStripe from "@/components/HeroStripe";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import StripeFeatureSection from "@/components/StripeFeatureSection";
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
      
      {/* Stripe-style Hero Section */}
      <HeroStripe />
      
      {/* Company Logos Marquee */}
      <CompanyLogosMarquee />
      
      {/* Stripe-style Feature Sections */}
      <StripeFeatureSection
        badge="Payments"
        title="Accept and optimize payments, globally"
        description="Increase authorization rates, offer local payment methods, and reduce fraud using machine learning models trained on billions of transactions across the AI Commerce Studio network."
        features={[
          "135+ global payment methods",
          "Machine learning optimization",
          "Real-time fraud detection",
          "Global processing at scale"
        ]}
        mockupType="mobile"
      />
      
      <StripeFeatureSection
        badge="Billing"
        title="Capture recurring revenue"
        description="Manage your subscription business, minimize churn, and automate invoice operations with customizable pricing models, subscription intelligence, and automated billing."
        features={[
          "Flexible pricing models",
          "Automated billing workflows",
          "Subscription intelligence",
          "Revenue optimization"
        ]}
        mockupType="billing"
        reverse={true}
      />
      
      <StripeFeatureSection
        badge="Connect"
        title="Set up multiparty payments and payouts"
        description="Integrate payments into your platform or marketplace with tools to handle KYC, compliance, fraud, reporting, and revenue—so you can focus on your core business."
        features={[
          "Marketplace payments",
          "Automated KYC compliance",
          "Split payments",
          "Real-time reporting"
        ]}
        mockupType="card"
      />
      
      <StripeFeatureSection
        title="A fully integrated suite of financial and payments products"
        description="Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use AI Commerce Studio to handle all of your payments-related needs, or integrate with your existing financial stack."
        features={[
          "Unified commerce platform",
          "Advanced analytics",
          "Global scale infrastructure",
          "Developer-friendly APIs"
        ]}
        mockupType="dashboard"
        reverse={true}
      />

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
              <div key={testimonial.name} className="animate-fadeUpStagger" style={{ animationDelay: `${index * 0.1}s` }}>
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