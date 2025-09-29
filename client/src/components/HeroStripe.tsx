import { motion } from "framer-motion";
import EmailSignupForm from "./EmailSignupForm";
import DashboardPreview from "./DashboardPreview";

export default function HeroStripe() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16" data-testid="hero-stripe-section">
      {/* Stripe-style animated gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              hsl(265 45% 12%) 0%, 
              hsl(270 50% 18%) 20%, 
              hsl(275 55% 24%) 40%, 
              hsl(280 60% 30%) 60%, 
              hsl(270 50% 20%) 80%, 
              hsl(265 45% 12%) 100%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left column - Hero content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
                data-testid="text-hero-stripe-title"
              >
                Financial
                <br />
                infrastructure
                <br />
                to grow your
                <br />
                <span className="text-primary">revenue</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-stripe-subtitle"
            >
              Join the millions of companies that use AI Commerce Studio to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
            </motion.p>

            {/* Email signup form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <EmailSignupForm />
            </motion.div>
          </div>

          {/* Right column - Dashboard preview */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full max-w-lg"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}