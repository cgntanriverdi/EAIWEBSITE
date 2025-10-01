import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, TrendingUp } from "lucide-react";
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
            <Card className="bg-gradient-to-br from-white via-white/95 to-blue-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl w-[400px] mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-gray-900">
                        Payment
                      </CardTitle>
                      <p className="text-xs text-gray-500 mt-1">Secure checkout</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      $89.00
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Total amount</div>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-3 font-medium">Card information</div>
                    <div className="space-y-3">
                      <div className="h-10 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200"></div>
                      <div className="flex gap-3">
                        <div className="h-10 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg flex-1 border border-gray-200"></div>
                        <div className="h-10 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg w-20 border border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow">
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
            <Card className="bg-gradient-to-br from-white via-white/95 to-purple-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl w-[400px] mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold text-gray-900">
                    Subscription
                  </CardTitle>
                  <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="text-lg font-bold text-gray-900">Pro Plan</div>
                        <div className="text-xs text-gray-500">Billed monthly</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          $99
                        </div>
                        <div className="text-xs text-gray-500">/month</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Next billing</div>
                      <div className="text-sm font-bold text-gray-900">Jan 1, 2024</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Payment</div>
                      <div className="text-sm font-bold text-gray-900">•••• 4242</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
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
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative w-full max-w-[720px] mx-auto"
          >
            {/* Apple-like stage with 4:3 aspect ratio and perspective */}
            <div 
              className="relative aspect-[4/3] overflow-hidden rounded-3xl transform-gpu"
              style={{
                background: 'radial-gradient(120% 120% at 50% 20%, #fff 0%, #fafafa 60%, #f5f5f5 100%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.08)',
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
            >
              
              {/* Refined light sweep effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 6,
                  ease: [0.2, 0.8, 0.2, 1],
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 8
                }}
              />

              {/* Main transformation container */}
              <div className="relative flex items-center justify-center h-full px-8">
                
                {/* Stage 1: Plain product with depth blur */}
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    opacity: [1, 1, 0, 0, 0, 1, 1],
                    scale: [1, 1, 0.96, 0.96, 0.96, 1, 1],
                    filter: ["blur(0px)", "blur(0px)", "blur(6px)", "blur(6px)", "blur(6px)", "blur(0px)", "blur(0px)"]
                  }}
                  transition={{ 
                    duration: 14,
                    times: [0, 0.075, 0.175, 0.7, 0.85, 0.925, 1],
                    ease: [0.2, 0.8, 0.2, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute origin-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <img
                    src={animationPlainImg}
                    alt="Plain product before AI transformation"
                    className="object-contain rounded-[28px]"
                    style={{
                      width: 'clamp(240px, 56vw, 420px)',
                      height: 'auto',
                      aspectRatio: '1',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  />
                </motion.div>

                {/* Stage 2: Professional photos arrangement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0, 1, 1, 1, 0, 0]
                  }}
                  transition={{ 
                    duration: 14,
                    times: [0, 0.075, 0.175, 0.7, 0.85, 0.925, 1],
                    ease: [0.2, 0.8, 0.2, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Continuous breathing animation for idle state */}
                  <motion.div
                    animate={{ 
                      y: [0, -2, 0],
                      rotateZ: [-0.1, 0.1, -0.1]
                    }}
                    transition={{ 
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity
                    }}
                    className="flex items-center justify-center origin-center"
                    style={{ gap: 'clamp(12px, 3vw, 24px)' }}
                  >
                    
                    {/* Supporting frame - Back view */}
                    <motion.div
                      initial={{ opacity: 0, x: -32, scale: 0.94 }}
                      animate={{ 
                        opacity: [0, 0, 0.7, 0.7, 0.7, 0, 0],
                        x: [-32, -32, 0, 0, 0, -32, -32],
                        scale: [0.94, 0.94, 0.98, 0.98, 0.98, 0.94, 0.94]
                      }}
                      transition={{ 
                        duration: 14,
                        times: [0, 0.15, 0.25, 0.7, 0.82, 0.92, 1],
                        ease: [0.2, 0.8, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="relative origin-center"
                      style={{ 
                        transform: 'translateZ(8px) rotateY(-2deg)',
                        willChange: 'transform, opacity'
                      }}
                    >
                      <img
                        src={animationBackImg}
                        alt="Professional back view"
                        className="object-cover rounded-[20px]"
                        style={{
                          width: 'clamp(120px, 26vw, 180px)',
                          height: 'auto',
                          aspectRatio: '4/5',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }}
                      />
                    </motion.div>

                    {/* Hero frame - Side view (main focus) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ 
                        opacity: [0, 0, 1, 1, 1, 0, 0],
                        scale: [0.96, 0.96, 1.00, 1.00, 1.00, 0.96, 0.96]
                      }}
                      transition={{ 
                        duration: 14,
                        times: [0, 0.075, 0.175, 0.7, 0.85, 0.925, 1],
                        ease: [0.2, 0.8, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="relative z-10 origin-center"
                      style={{ 
                        transform: 'translateZ(24px)',
                        willChange: 'transform, opacity'
                      }}
                    >
                      <img
                        src={animationSideImg}
                        alt="Professional hero view"
                        className="object-cover rounded-[28px]"
                        style={{
                          width: 'clamp(240px, 56vw, 420px)',
                          height: 'auto',
                          aspectRatio: '4/5',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }}
                      />
                      {/* Subtle premium glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-indigo-500/2 via-transparent to-white/5 rounded-[28px]"
                        animate={{
                          opacity: [0, 0, 0.3, 0.3, 0.3, 0, 0]
                        }}
                        transition={{
                          duration: 14,
                          times: [0, 0.075, 0.175, 0.7, 0.85, 0.925, 1],
                          ease: [0.2, 0.8, 0.2, 1],
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />
                    </motion.div>

                    {/* Supporting frame - Detail view */}
                    <motion.div
                      initial={{ opacity: 0, x: 32, scale: 0.94 }}
                      animate={{ 
                        opacity: [0, 0, 0.7, 0.7, 0.7, 0, 0],
                        x: [32, 32, 0, 0, 0, 32, 32],
                        scale: [0.94, 0.94, 0.98, 0.98, 0.98, 0.94, 0.94]
                      }}
                      transition={{ 
                        duration: 14,
                        times: [0, 0.21, 0.31, 0.7, 0.82, 0.92, 1],
                        ease: [0.2, 0.8, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="relative origin-center"
                      style={{ 
                        transform: 'translateZ(8px) rotateY(2deg)',
                        willChange: 'transform, opacity'
                      }}
                    >
                      <img
                        src={animationDetailImg}
                        alt="Professional detail view"
                        className="object-cover rounded-[20px]"
                        style={{
                          width: 'clamp(120px, 26vw, 180px)',
                          height: 'auto',
                          aspectRatio: '4/5',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }}
                      />
                    </motion.div>

                  </motion.div>
                </motion.div>

              </div>

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
            <Card className="bg-gradient-to-br from-white via-white/95 to-indigo-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl w-[400px] mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-gray-900">
                        Analytics
                      </CardTitle>
                      <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        $47K
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Revenue</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        1,234
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Customers</div>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gradient-to-br from-gray-50 to-indigo-50/50 rounded-xl flex items-end justify-between p-3 gap-1 border border-gray-100">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 65, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-md shadow-lg"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
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