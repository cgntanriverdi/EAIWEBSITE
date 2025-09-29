import { motion } from "framer-motion";

export default function CompanyLogosMarquee() {
  // Company logos data matching Stripe's featured companies
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
    <section className="py-20 bg-white" data-testid="company-logos-marquee">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean grid layout like Stripe */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              className="flex items-center justify-center h-12 opacity-40 hover:opacity-70 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`logo-${company.toLowerCase()}`}
            >
              <span className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}