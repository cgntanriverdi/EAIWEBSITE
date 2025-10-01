import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, TrendingUp, DollarSign, Send, ShoppingBag, Store, Package, FileText, Edit3, Sparkles, Star, Check } from "lucide-react";
import animationPlainImg from "@assets/animation_plain_1759133742500.png";
import animationBackImg from "@assets/animation_back_1759133767968.png";
import animationSideImg from "@assets/animation_side_1759133769482.png";
import animationDetailImg from "@assets/animation_detail_1759133770646.png";

interface FeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  features?: string[];
  mockupType?: 'dashboard' | 'mobile' | 'card' | 'billing' | 'photography' | 'descriptions';
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
      
      case 'descriptions':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 w-full max-w-[600px] mx-auto">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 bg-white rounded px-3 py-2 text-xs text-gray-600">
                  <span className="text-gray-400">🔒</span>
                  <span className="font-mono">description-ai.com/editor</span>
                </div>
              </div>
              
              {/* Editor Content */}
              <div className="bg-gray-50">
                {/* Toolbar */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900 text-lg">Product Descriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium" data-testid="button-mockup-edit">
                        <Edit3 className="w-4 h-4 inline mr-1" />
                        Edit
                      </button>
                      <button className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 font-medium shadow-md" data-testid="button-mockup-generate">
                        Generate
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900">2,847</div>
                      <div className="text-xs text-gray-500 mt-1">Created today</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="text-2xl font-bold text-green-600">96%</div>
                      <div className="text-xs text-gray-500 mt-1">Quality score</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="text-2xl font-bold text-indigo-600">0.9s</div>
                      <div className="text-xs text-gray-500 mt-1">Avg. time</div>
                    </div>
                  </div>

                  {/* Description Card 1 - Ready */}
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-md" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Premium Wireless Headphones</div>
                          <div className="text-xs text-gray-500">Electronics</div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                        ✓ Ready
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-gray-100 rounded-full w-full" />
                      <div className="h-2 bg-gray-100 rounded-full w-11/12" />
                      <div className="h-2 bg-gray-100 rounded-full w-4/5" />
                      <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="font-medium">184 words</span>
                        <span>•</span>
                        <span className="text-green-600 font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3" /> SEO optimized
                        </span>
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>

                  {/* Description Card 2 - Generating */}
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-md" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Smart Coffee Maker Pro</div>
                          <div className="text-xs text-gray-500">Home & Kitchen</div>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-3 h-3" />
                        </motion.div>
                        Generating...
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-indigo-200 to-indigo-100 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Description Card 3 - Ready */}
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-md" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Ergonomic Office Chair</div>
                          <div className="text-xs text-gray-500">Furniture</div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                        ✓ Ready
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-gray-100 rounded-full w-full" />
                      <div className="h-2 bg-gray-100 rounded-full w-10/12" />
                      <div className="h-2 bg-gray-100 rounded-full w-9/12" />
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="font-medium">156 words</span>
                        <span>•</span>
                        <span className="text-green-600 font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3" /> SEO optimized
                        </span>
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100"
            >
              <div className="text-xs text-gray-500 mb-1 font-medium">Conversion rate</div>
              <div className="text-3xl font-bold text-gray-900">+156%</div>
              <div className="text-xs text-green-600 mt-1 font-semibold">↑ Above baseline</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100"
            >
              <div className="text-xs text-gray-500 mb-1 font-medium">Descriptions written</div>
              <div className="text-3xl font-bold text-indigo-600">2.4M+</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">This month</div>
            </motion.div>
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
            <Card className="bg-gradient-to-br from-white via-white/95 to-purple-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl w-full max-w-[500px] mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Smart Pricing
                      </CardTitle>
                      <p className="text-xs text-gray-500 mt-1">AI Price Optimizer</p>
                    </div>
                  </div>
                  <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                    Optimized
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-5">
                {/* Current vs Recommended Price */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Current Price</div>
                      <div className="text-2xl font-bold text-gray-400 line-through">$79.99</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">AI Recommended</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        $89.99
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full font-semibold">+12.5%</div>
                    <span className="text-gray-600">Price increase recommended</span>
                  </div>
                </div>
                
                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Revenue Impact</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      +$2.4K
                    </div>
                    <div className="text-xs text-gray-500 mt-1">per month</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Market Position</div>
                    <div className="text-2xl font-bold text-gray-900">
                      2nd
                    </div>
                    <div className="text-xs text-gray-500 mt-1">in category</div>
                  </div>
                </div>
                
                {/* Action Button */}
                <button 
                  data-testid="button-apply-pricing"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                >
                  Apply Optimal Pricing
                </button>
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
            <Card className="bg-gradient-to-br from-white via-white/95 to-indigo-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl w-full max-w-[550px] mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl" />
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Send className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Multi-Platform Publishing
                      </CardTitle>
                      <p className="text-xs text-gray-500 mt-1">Distribution Hub</p>
                    </div>
                  </div>
                  <Badge className="text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg">
                    6 Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {/* Platform Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'Amazon', icon: ShoppingBag, status: 'active', color: 'from-orange-500 to-amber-500' },
                    { name: 'eBay', icon: Package, status: 'syncing', color: 'from-blue-500 to-cyan-500' },
                    { name: 'Shopify', icon: Store, status: 'active', color: 'from-green-500 to-emerald-500' },
                    { name: 'Etsy', icon: ShoppingBag, status: 'active', color: 'from-orange-500 to-red-500' },
                    { name: 'Walmart', icon: Package, status: 'active', color: 'from-blue-600 to-blue-500' },
                    { name: 'Facebook', icon: Store, status: 'syncing', color: 'from-blue-500 to-indigo-500' }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.name}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-100 hover:border-indigo-200 transition-all"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <div className={`w-9 h-9 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
                        <platform.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">{platform.name}</div>
                      <div className="flex items-center gap-1.5">
                        {platform.status === 'active' ? (
                          <>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-[10px] text-green-600 font-medium">Active</span>
                          </>
                        ) : (
                          <>
                            <motion.div 
                              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            ></motion.div>
                            <span className="text-[10px] text-blue-600 font-medium">Syncing</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 border border-indigo-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Products Distributed</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        2,847
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Total Reach</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        12.4M
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-3">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full font-semibold">+245%</div>
                    <span className="text-gray-600">vs. single platform</span>
                  </div>
                </div>
                
                {/* Action Button */}
                <button 
                  data-testid="button-publish-platforms"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                >
                  Publish to All Platforms
                </button>
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