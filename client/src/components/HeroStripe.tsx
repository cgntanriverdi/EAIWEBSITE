import { motion } from "framer-motion";
import EmailSignupForm from "./EmailSignupForm";
import DashboardPreview from "./DashboardPreview";

export default function HeroStripe() {
  return (
    <section className="hero-stripe relative min-h-screen overflow-hidden" data-testid="hero-stripe-section">
      {/* Stripe's signature gradient background with animation - this will be inherited by text */}
      <div 
        className="hero-background absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, 
              hsla(260, 100%, 60%, 0.3) 0%, 
              transparent 60%
            ),
            var(--hero-gradient)
          `,
          backgroundSize: '400% 400%',
          backgroundAttachment: 'fixed',
          animation: 'gradientShift 20s ease infinite'
        }}
      />

      {/* Darker overlay for proper white text contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 100%)'
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
                className="stripe-layered-text relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
                data-testid="text-hero-stripe-title"
                data-text="Agentic AI for perfect e-commerce listings"
                style={{
                  color: '#000000',
                  position: 'relative',
                  zIndex: 1
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