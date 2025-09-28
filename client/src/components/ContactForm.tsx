import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-contact">
            <Mail className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
            Ready to Transform Your 
            <span className="block text-primary">E-commerce Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Start your free trial today or get in touch with our team to discuss custom solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="hover-elevate bg-card/80 backdrop-blur-sm" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="hover-elevate focus:ring-2 focus:ring-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="hover-elevate focus:ring-2 focus:ring-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <Input
                  name="company"
                  placeholder="Company name (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="hover-elevate focus:ring-2 focus:ring-primary"
                  data-testid="input-company"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your e-commerce business and how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="hover-elevate focus:ring-2 focus:ring-primary resize-none"
                  data-testid="textarea-message"
                />
                
                <Button 
                  type="submit" 
                  className="w-full shadow-lg hover-elevate" 
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground overflow-hidden relative" data-testid="card-trial-cta">
              <div className="absolute inset-0 bg-brand-gradient opacity-90"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4">Start Your Free Trial</h3>
                <p className="mb-6 text-primary-foreground/90">
                  No credit card required. Get full access to all AI agents for 14 days.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-gray-100 shadow-lg hover-elevate"
                  onClick={() => console.log('Start free trial clicked')}
                  data-testid="button-start-free-trial"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="text-support-title">
                  24/7 Support
                </h4>
                <p className="text-muted-foreground text-sm" data-testid="text-support-description">
                  Our team is available around the clock to help you maximize your e-commerce potential.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="text-response-title">
                  Quick Response
                </h4>
                <p className="text-muted-foreground text-sm" data-testid="text-response-description">
                  We typically respond to all inquiries within 2 hours during business days.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2" data-testid="text-setup-title">
                  Free Setup
                </h4>
                <p className="text-muted-foreground text-sm" data-testid="text-setup-description">
                  Our experts will help you set up and optimize your AI workflow at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}