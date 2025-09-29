import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Sparkles, Zap, ArrowRight, Clock, Shield, Users } from "lucide-react";

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 px-4 overflow-hidden" ref={ref}>
      {/* Glassmorphic background with dynamic gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-indigo-500/5 to-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced header section */}
        <motion.div 
          className="text-center mb-20"
          style={{ y: y1 }}
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
            <Badge className="mb-6 bg-violet-50 text-violet-700 border-violet-200 px-6 py-3 text-base" data-testid="badge-contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" 
            data-testid="text-contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{" "}
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              E-commerce Business?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" 
            data-testid="text-contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start your free trial today or get in touch with our team to discuss custom solutions for your business.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Form */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500" data-testid="card-contact-form">
              <CardHeader className="p-8 pb-6">
                <CardTitle className="flex items-center gap-3 text-gray-900 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  Send us a message
                </CardTitle>
                <p className="text-gray-600 mt-2">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all duration-300"
                        data-testid="input-name"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all duration-300"
                        data-testid="input-email"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      name="company"
                      placeholder="Company name (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all duration-300"
                      data-testid="input-company"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Tell us about your e-commerce business and how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-gray-50/50 border-gray-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 resize-none transition-all duration-300"
                      data-testid="textarea-message"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all duration-300" 
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </div>
          </motion.div>

          {/* Enhanced CTA and Info Cards */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Premium Trial CTA */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-violet-600 to-indigo-700 text-white overflow-hidden rounded-2xl shadow-2xl" data-testid="card-trial-cta">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Start Your Free Trial</h3>
                  </div>
                  <p className="mb-8 text-white/90 text-lg leading-relaxed">
                    No credit card required. Get full access to all AI agents for 14 days and see immediate results.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full h-12 bg-white text-violet-700 hover:bg-gray-50 font-semibold shadow-lg transition-all duration-300"
                      onClick={() => console.log('Start free trial clicked')}
                      data-testid="button-start-free-trial"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </CardContent>
              </div>
            </motion.div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Users,
                  title: "24/7 Expert Support",
                  description: "Our team is available around the clock to help you maximize your e-commerce potential.",
                  testId: "text-support"
                },
                {
                  icon: Clock,
                  title: "Quick Response",
                  description: "We typically respond to all inquiries within 2 hours during business days.",
                  testId: "text-response"
                },
                {
                  icon: Shield,
                  title: "Free Setup & Migration",
                  description: "Our experts will help you set up and optimize your AI workflow at no extra cost.",
                  testId: "text-setup"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2" data-testid={`${item.testId}-title`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed" data-testid={`${item.testId}-description`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating background elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`contact-particle-${i}`}
          className="absolute w-2 h-2 bg-violet-400/20 rounded-full"
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}