import { motion } from "framer-motion";

export default function CompanyLogosMarquee() {
  // Company logos data - using text for now since we don't have actual logo assets
  const companies = [
    "OpenAI",
    "amazon", 
    "Google",
    "ANTHROPIC",
    "Adobe",
    "shopify",
    "airbnb",
    "Stripe"
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-background/50 backdrop-blur border-y border-border/50" data-testid="company-logos-marquee">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by millions of businesses worldwide
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
            style={{ width: "200%" }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ minWidth: "120px" }}
                data-testid={`logo-${company.toLowerCase()}-${index}`}
              >
                <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}