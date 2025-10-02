import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroStripe from "@/components/HeroStripe";
import CompanyLogosMarquee from "@/components/CompanyLogosMarquee";
import StripeFeatureSection from "@/components/StripeFeatureSection";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Camera, Target, Users, TrendingUp, Star } from "lucide-react";

export default function LandingPage() {
  const testimonialsRef = useRef(null);
  const { scrollYProgress: testimonialsProgress } = useScroll({
    target: testimonialsRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for testimonials section
  const backgroundY = useTransform(testimonialsProgress, [0, 1], [0, -100]);
  const cardY = useTransform(testimonialsProgress, [0, 1], [0, -50]);
  const glowY = useTransform(testimonialsProgress, [0, 1], [0, -75]);

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
        badge="Descriptions"
        title="AI-powered product descriptions that convert"
        description="Generate compelling, SEO-optimized product descriptions that drive sales using advanced language models trained on high-converting e-commerce copy across millions of successful listings."
        features={[
          "SEO-optimized content",
          "Conversion-focused copy",
          "Brand voice matching",
          "Multi-language support"
        ]}
        mockupType="descriptions"
      />
      
      <StripeFeatureSection
        badge="Pricing"
        title="Smart pricing that maximizes profit"
        description="Calculate optimal prices with AI-powered market analysis, competitor tracking, and demand forecasting to maximize your margins while staying competitive."
        features={[
          "Dynamic pricing models",
          "Competitor price tracking",
          "Profit margin optimization",
          "Market demand analysis"
        ]}
        mockupType="billing"
        reverse={true}
      />
      
      <StripeFeatureSection
        badge="Photography"
        title="Professional AI model photography"
        description="Transform basic product photos into stunning professional images with AI models, perfect lighting, and premium backgrounds that make your products irresistible."
        features={[
          "AI model generation",
          "Professional backgrounds",
          "Lighting optimization",
          "Multiple style variants"
        ]}
        mockupType="photography"
      />
      
      <StripeFeatureSection
        title="One-click publishing to all your sales channels"
        description="Instantly publish your perfected listings across multiple marketplaces and platforms with a single click. Our agentic system handles formatting, optimization, and platform-specific requirements automatically."
        features={[
          "Multi-platform publishing",
          "Automated formatting",
          "Real-time sync",
          "Performance tracking"
        ]}
        mockupType="dashboard"
        reverse={true}
      />

      {/* Social Proof - Stripe-inspired glassmorphic design */}
      <section ref={testimonialsRef} className="relative py-32 px-4 overflow-hidden" id="testimonials">
        {/* Parallax background layers */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute inset-0 bg-indigo-500/5 blur-3xl"
          style={{ y: glowY }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional parallax background layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-indigo-400/5"
          style={{ y: useTransform(testimonialsProgress, [0, 1], [0, -25]) }}
        />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2" data-testid="badge-testimonials">
                <Users className="w-3 h-3 mr-2" />
                Customer Success
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" 
              data-testid="text-testimonials-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Powered by Agentic AI Success
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" 
              data-testid="text-testimonials-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover how autonomous AI agents have revolutionized e-commerce for businesses of all sizes with perfect descriptions, optimal pricing, and professional photography.
            </motion.p>
          </motion.div>
          
          {/* Glassmorphic testimonial cards with parallax */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            style={{ y: cardY }}
          >
            {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-500 group-hover:bg-white">
                    <div className="relative">
                      {/* Testimonial content */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                      
                      {/* Author info */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Subtle floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </section>

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
            Autonomous AI agents perfecting e-commerce listings worldwide
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