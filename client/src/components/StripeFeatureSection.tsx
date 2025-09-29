import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import animationPlainImg from "@assets/animation_plain_1759133742500.png";
import animationBackImg from "@assets/animation_back_1759133767968.png";
import animationSideImg from "@assets/animation_side_1759133769482.png";
import animationDetailImg from "@assets/animation_detail_1759133770646.png";

interface FeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  features?: string[];
  mockupType?: 'dashboard' | 'mobile' | 'card' | 'billing' | 'photography';
  reverse?: boolean;
}

export default function StripeFeatureSection({ 
  badge, 
  title, 
  description, 
  features = [], 
  mockupType = 'dashboard',
  reverse = false 
}: FeatureSectionProps) {
  
  const renderMockup = () => {
    switch (mockupType) {
      case 'mobile':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white border border-gray-200 shadow-2xl rounded-2xl w-80 mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-600">Payment</div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">$89.00</div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Card information</div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-4 bg-gray-200 rounded flex-1"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">
                    Pay $89.00
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      
      case 'card':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-2xl rounded-2xl w-80 mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm opacity-90">ROCKET RIDES</div>
                      <div className="text-xs opacity-75">Digital Access</div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="text-lg font-mono">•••• •••• •••• 4242</div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>VALID THRU</span>
                      <span>12/25</span>
                    </div>
                  </div>
                  <div className="text-xs opacity-75">VISA</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      
      case 'billing':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white border border-gray-200 shadow-2xl rounded-2xl w-96 mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-900">Subscription</div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">Pro Plan</div>
                        <div className="text-sm text-gray-500">Billed monthly</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$99</div>
                        <div className="text-sm text-gray-500">/month</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next billing date</span>
                      <span className="text-gray-900">Jan 1, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Payment method</span>
                      <span className="text-gray-900">•••• 4242</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium">
                    Manage subscription
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      
      case 'photography':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative w-full max-w-2xl mx-auto"
          >
            {/* Clean, minimal background */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[480px]">
              
              {/* Subtle light sweep effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "200%"]
                }}
                transition={{
                  duration: 3,
                  ease: [0.25, 0.1, 0.25, 1],
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />

              {/* Main transformation container */}
              <div className="relative flex items-center justify-center h-full p-12">
                
                {/* Stage 1: Plain product - completely disappears */}
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    opacity: [1, 1, 0, 0, 1],
                    scale: [1, 1.02, 0.95, 0.95, 1],
                    y: [0, -5, -15, -15, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    times: [0, 0.25, 0.35, 0.9, 1],
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity
                  }}
                  className="absolute"
                >
                  <div className="relative">
                    <img
                      src={animationPlainImg}
                      alt="Plain product before AI transformation"
                      className="w-56 h-56 object-contain"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Stage 2: Hero model photo with staggered supporting frames */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 1, 0.8],
                    y: [20, 0, 0, 0, 20]
                  }}
                  transition={{ 
                    duration: 8,
                    times: [0, 0.35, 0.4, 0.92, 1],
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity
                  }}
                  className="absolute"
                >
                  <div className="flex items-center justify-center gap-6">
                    
                    {/* Supporting frame - Back view */}
                    <motion.div
                      initial={{ opacity: 0, x: -30, scale: 0.85 }}
                      animate={{ 
                        opacity: [0, 0.6, 0.6, 0.6, 0],
                        x: [-30, 0, 0, 0, -30],
                        scale: [0.85, 0.9, 0.9, 0.9, 0.85]
                      }}
                      transition={{ 
                        duration: 8,
                        times: [0, 0.37, 0.4, 0.92, 1],
                        ease: [0.25, 0.1, 0.25, 1],
                        repeat: Infinity
                      }}
                      className="relative"
                    >
                      <img
                        src={animationBackImg}
                        alt="Professional back view"
                        className="w-32 h-40 object-cover rounded-2xl shadow-lg"
                        style={{
                          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))'
                        }}
                      />
                    </motion.div>

                    {/* Hero frame - Side view (main focus) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: [0, 1, 1, 1, 0],
                        scale: [0.8, 1, 1, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 8,
                        times: [0, 0.35, 0.4, 0.92, 1],
                        ease: [0.25, 0.1, 0.25, 1],
                        repeat: Infinity
                      }}
                      className="relative z-10"
                    >
                      <img
                        src={animationSideImg}
                        alt="Professional hero view"
                        className="w-48 h-56 object-cover rounded-3xl shadow-2xl"
                        style={{
                          filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))'
                        }}
                      />
                      {/* Hero glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-white/10 rounded-3xl"
                        animate={{
                          opacity: [0, 0.3, 0.3, 0.3, 0],
                        }}
                        transition={{
                          duration: 8,
                          times: [0, 0.35, 0.4, 0.92, 1],
                          ease: [0.25, 0.1, 0.25, 1],
                          repeat: Infinity
                        }}
                      />
                    </motion.div>

                    {/* Supporting frame - Detail view */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.85 }}
                      animate={{ 
                        opacity: [0, 0.6, 0.6, 0.6, 0],
                        x: [30, 0, 0, 0, 30],
                        scale: [0.85, 0.9, 0.9, 0.9, 0.85]
                      }}
                      transition={{ 
                        duration: 8,
                        times: [0, 0.42, 0.45, 0.92, 1],
                        ease: [0.25, 0.1, 0.25, 1],
                        repeat: Infinity
                      }}
                      className="relative"
                    >
                      <img
                        src={animationDetailImg}
                        alt="Professional detail view"
                        className="w-32 h-40 object-cover rounded-2xl shadow-lg"
                        style={{
                          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))'
                        }}
                      />
                    </motion.div>

                  </div>
                </motion.div>

              </div>

              {/* Minimal depth cue */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                animate={{
                  opacity: [0, 0, 0.5, 0.5, 0]
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.35, 0.4, 0.92, 1],
                  ease: [0.25, 0.1, 0.25, 1],
                  repeat: Infinity
                }}
              />

            </div>
          </motion.div>
        );
      
      default: // dashboard
        return (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white border border-gray-200 shadow-2xl rounded-2xl w-96 mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-900">Analytics</div>
                    <div className="text-sm text-gray-500">Last 30 days</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">$47,200</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1,234</div>
                      <div className="text-sm text-gray-500">Customers</div>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 65, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-indigo-500 rounded-sm w-3"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={reverse ? 'lg:order-2' : 'lg:order-1'}
          >
            {badge && (
              <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200 font-medium">
                {badge}
              </Badge>
            )}
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {features.length > 0 && (
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Mockup */}
          <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
            {renderMockup()}
          </div>
        </div>
      </div>
    </section>
  );
}