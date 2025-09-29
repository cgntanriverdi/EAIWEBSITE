import { motion } from "framer-motion";
import EmailSignupForm from "./EmailSignupForm";
import DashboardPreview from "./DashboardPreview";

export default function HeroStripe() {
  return (
    <section className="hero-stripe relative min-h-screen overflow-hidden" data-testid="hero-stripe-section">
      {/* Stripe's signature vibrant gradient background */}
      <div 
        className="hero-background absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, #6ec3f4 0%, #3a3aff 25%, #ff61ab 50%, #E63946 75%, #6ec3f4 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Light overlay to ensure text readability while maintaining color interaction */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
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
                className="stripe-layered-text text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-black relative"
                data-testid="text-hero-stripe-title"
                data-text="Agentic AI
for perfect
e-commerce
listings"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '-0.02em'
                }}
              >
                Agentic AI
                <br />
                for perfect
                <br />
                e-commerce
                <br />
                listings
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-stripe-subtitle"
            >
              Create compelling product descriptions, calculate optimal pricing, generate professional AI model photography, and publish perfect listings in one click.
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