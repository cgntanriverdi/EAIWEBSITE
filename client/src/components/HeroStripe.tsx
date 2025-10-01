import { motion } from "framer-motion";
import EmailSignupForm from "./EmailSignupForm";
import DashboardPreview from "./DashboardPreview";

export default function HeroStripe() {
  return (
    <section className="hero-stripe relative min-h-screen overflow-hidden" data-testid="hero-stripe-section">
      {/* 3D Layered gradient background with distinct color boundaries and looping animation */}
      
      {/* Base animated gradient layer - creates the flowing loop effect with full spectrum */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Second layer - Cyan/Teal overlay with radial gradient for 3D depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, #06B6D4 0%, rgba(6, 182, 212, 0.6) 30%, transparent 60%)',
          mixBlendMode: 'screen',
          opacity: 0.7
        }}
      />

      {/* Third layer - Pink/Rose accent overlay for color distinction */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, #EC4899 0%, rgba(236, 72, 153, 0.5) 25%, transparent 50%)',
          mixBlendMode: 'screen',
          opacity: 0.6
        }}
      />

      {/* Color boundary layer - creates distinct color separations for 3D depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              transparent 0%, 
              rgba(99, 102, 241, 0.3) 35%, 
              rgba(59, 130, 246, 0.4) 50%,
              rgba(6, 182, 212, 0.3) 65%,
              transparent 100%
            )
          `,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Subtle noise texture for additional depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
          opacity: 0.3
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