import { useState, useEffect } from "react";
import { WorkflowProvider, useWorkflow } from "@/lib/WorkflowContext";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Package, 
  Upload, 
  DollarSign, 
  Rocket,
  Globe,
  Sparkles,
  Settings,
  Info,
  Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 0, name: "Description", icon: Package },
  { id: 1, name: "Images", icon: Upload },
  { id: 2, name: "Pricing", icon: DollarSign },
  { id: 3, name: "Publishing", icon: Rocket },
];

const languages = [
  "English",
  "Turkish", 
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Chinese"
];

const qualityLevels = [
  { 
    value: "standard", 
    label: "Standard", 
    description: "Basic optimization for everyday listings",
    features: ["AI optimization", "Standard speed", "Email support"]
  },
  { 
    value: "enhanced", 
    label: "Enhanced", 
    description: "Advanced optimization with better quality",
    features: ["Advanced AI", "Fast processing", "Priority support"]
  },
  { 
    value: "premium", 
    label: "Premium", 
    description: "Premium quality for professional listings",
    features: ["Premium AI", "Fastest speed", "Live chat support"]
  },
  { 
    value: "enterprise", 
    label: "Enterprise", 
    description: "Custom solutions for large catalogs",
    features: ["Custom AI models", "Dedicated support", "API access"]
  },
];

const encouragingMessages = [
  "Great start! Let's create something amazing 🎨",
  "Looking good! Your product is taking shape ✨",
  "Almost there! You're doing fantastic 🚀",
  "Ready to launch! Let's make it happen 🎉"
];

const platforms = [
  { 
    name: "Shopify", 
    color: "bg-green-500", 
    letter: "S", 
    status: "connected",
    description: "Your primary store" 
  },
  { 
    name: "Amazon", 
    color: "bg-orange-500", 
    letter: "A", 
    status: "coming_soon",
    description: "Global marketplace" 
  },
  { 
    name: "eBay", 
    color: "bg-blue-500", 
    letter: "E", 
    status: "coming_soon",
    description: "Auction platform" 
  },
  { 
    name: "Etsy", 
    color: "bg-orange-600", 
    letter: "E", 
    status: "coming_soon",
    description: "Handmade & vintage" 
  },
];

function WorkflowContent() {
  const { workflowData, updateWorkflowData } = useWorkflow();
  const [currentStep, setCurrentStep] = useState(workflowData.currentStep || 0);
  const [showSaved, setShowSaved] = useState(false);

  const progressPercentage = Math.round(((currentStep + 1) / steps.length) * 100);

  useEffect(() => {
    setShowSaved(true);
    const timer = setTimeout(() => setShowSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [workflowData]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      updateWorkflowData({ currentStep: nextStep });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      updateWorkflowData({ currentStep: prevStep });
    }
  };

  const handleProcess = () => {
    console.log("Processing product with data:", workflowData);
  };

  const isNextDisabled = currentStep === 0 && !workflowData.productTitle;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Rainbow Gradient Background - matching PricingPage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[85%] h-[120%] -top-[10%] left-1/2 -translate-x-1/2"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 10%, #EC4899 20%, #F472B6 30%, #FBBF24 40%, #FCD34D 50%, #34D399 60%, #10B981 70%, #06B6D4 80%, #22D3EE 90%, #8B5CF6 100%)',
            transform: 'translateX(-50%) rotate(-12deg) skewY(-6deg)',
            opacity: 0.7,
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        
        <div 
          className="absolute w-[80%] h-[110%] -bottom-[15%] left-1/2 -translate-x-1/2"
          style={{
            background: 'linear-gradient(225deg, #EF4444 0%, #F97316 12%, #FBBF24 24%, #84CC16 36%, #10B981 48%, #06B6D4 60%, #3B82F6 72%, #6366F1 84%, #8B5CF6 96%, #EF4444 100%)',
            transform: 'translateX(-50%) rotate(18deg) skewY(8deg)',
            opacity: 0.5,
            backgroundSize: '400% 400%',
            animation: 'gradientShift 20s ease infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(255, 255, 255, 0.4) 100%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      <Navigation />
      
      {/* Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="text-workflow-title">
            AI Product Workflow
          </h1>
          <p className="text-xl text-gray-600 mb-4" data-testid="text-workflow-subtitle">
            Transform your product listings with our intelligent AI agents
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Badge variant="outline" className="text-sm px-4 py-1.5 bg-white/80 backdrop-blur-sm" data-testid="badge-progress">
              {progressPercentage}% Complete
            </Badge>
            <p className="text-sm font-medium text-indigo-600" data-testid="text-encouraging-message">
              {encouragingMessages[currentStep]}
            </p>
          </motion.div>
        </div>

        {showSaved && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            data-testid="indicator-saved"
          >
            <Save className="w-4 h-4" />
            <span className="text-sm font-medium">Saved</span>
          </motion.div>
        )}

        {/* Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-indigo-600 text-white scale-110 shadow-lg' 
                          : isCompleted
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white/80 text-gray-400 backdrop-blur-sm border border-gray-200/50'
                      }`}
                      data-testid={`step-indicator-${step.id}`}
                    >
                      {isCompleted ? <Check className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <span className={`mt-2 text-sm font-medium ${
                      isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-4 transition-all ${
                      isCompleted ? 'bg-indigo-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {steps[currentStep].name} Agent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1 - Description Agent */}
                {currentStep === 0 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  >
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Label htmlFor="productTitle" className="flex items-center gap-2 text-gray-900">
                        <Package className="w-4 h-4 text-indigo-600" />
                        Product Title <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        💡 <strong>Why this matters:</strong> Your title is the first thing customers see. A clear, specific title increases click-through rates by up to 40% and helps search engines rank your product better.
                      </p>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <Input
                          id="productTitle"
                          placeholder="e.g., Premium Wireless Bluetooth Headphones with Noise Cancellation"
                          value={workflowData.productTitle}
                          onChange={(e) => updateWorkflowData({ productTitle: e.target.value })}
                          data-testid="input-product-title"
                          className="transition-all duration-200"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Label htmlFor="productDetails" className="flex items-center gap-2 text-gray-900">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        Product Details (Optional)
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        ✨ <strong>Boost conversion:</strong> The more context you provide, the better our AI can craft compelling descriptions. Include features, materials, dimensions, and unique selling points to create descriptions that convert browsers into buyers.
                      </p>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <Textarea
                          id="productDetails"
                          placeholder="e.g., Made from premium leather, features 30-hour battery life, comes with carrying case..."
                          value={workflowData.productDetails}
                          onChange={(e) => updateWorkflowData({ productDetails: e.target.value })}
                          rows={4}
                          data-testid="textarea-product-details"
                          className="transition-all duration-200"
                        />
                      </motion.div>
                    </motion.div>

                    <div className="space-y-2">
                      <Label htmlFor="language" className="flex items-center gap-2 text-gray-900">
                        <Globe className="w-4 h-4 text-indigo-600" />
                        Language
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        🌍 <strong>Expand your reach:</strong> Generate descriptions in your customers' native language. Products with localized content see 3x higher engagement in international markets.
                      </p>
                      <Select 
                        value={workflowData.language} 
                        onValueChange={(value) => updateWorkflowData({ language: value as any })}
                      >
                        <SelectTrigger id="language" data-testid="select-language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang} data-testid={`option-language-${lang.toLowerCase()}`}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="flex items-center gap-2 text-gray-900">
                        <Settings className="w-4 h-4 text-indigo-600" />
                        AI Model Gender Preference
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        🎯 <strong>Target your audience:</strong> Choose the model gender that resonates with your target demographic. Research shows customers engage 60% more with images featuring models they identify with. Auto-select lets our AI choose based on your product category.
                      </p>
                      <RadioGroup 
                        value={workflowData.aiModelGender} 
                        onValueChange={(value) => updateWorkflowData({ aiModelGender: value as any })}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="relative">
                          <RadioGroupItem 
                            value="female" 
                            id="female" 
                            className="peer sr-only"
                            data-testid="radio-gender-female"
                          />
                          <Label
                            htmlFor="female"
                            className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-all text-gray-900"
                          >
                            <span className="text-sm font-medium">Female Model</span>
                          </Label>
                        </div>
                        <div className="relative">
                          <RadioGroupItem 
                            value="male" 
                            id="male" 
                            className="peer sr-only"
                            data-testid="radio-gender-male"
                          />
                          <Label
                            htmlFor="male"
                            className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-all text-gray-900"
                          >
                            <span className="text-sm font-medium">Male Model</span>
                          </Label>
                        </div>
                        <div className="relative">
                          <RadioGroupItem 
                            value="non-binary" 
                            id="non-binary" 
                            className="peer sr-only"
                            data-testid="radio-gender-non-binary"
                          />
                          <Label
                            htmlFor="non-binary"
                            className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-all text-gray-900"
                          >
                            <span className="text-sm font-medium">Non-Binary</span>
                          </Label>
                        </div>
                        <div className="relative">
                          <RadioGroupItem 
                            value="auto" 
                            id="auto" 
                            className="peer sr-only"
                            data-testid="radio-gender-auto"
                          />
                          <Label
                            htmlFor="auto"
                            className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-all text-gray-900"
                          >
                            <span className="text-sm font-medium">Auto-Select</span>
                            <span className="text-xs text-gray-500 mt-1">Recommended</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tonePersona" className="flex items-center gap-2 text-gray-900">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        Tone & Persona
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        🗣️ <strong>Voice consistency:</strong> Your brand's tone shapes how customers perceive your products. Choose a voice that aligns with your brand identity and resonates with your target audience. Consistent tone increases brand trust by 33%.
                      </p>
                      <Select 
                        value={workflowData.tonePersona || 'professional'} 
                        onValueChange={(value) => updateWorkflowData({ tonePersona: value as any })}
                      >
                        <SelectTrigger id="tonePersona" data-testid="select-tone-persona">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional" data-testid="option-tone-professional">Professional - Trusted & Authoritative</SelectItem>
                          <SelectItem value="casual" data-testid="option-tone-casual">Casual - Relaxed & Approachable</SelectItem>
                          <SelectItem value="luxury" data-testid="option-tone-luxury">Luxury - Elegant & Exclusive</SelectItem>
                          <SelectItem value="friendly" data-testid="option-tone-friendly">Friendly - Warm & Personal</SelectItem>
                          <SelectItem value="technical" data-testid="option-tone-technical">Technical - Precise & Detailed</SelectItem>
                          <SelectItem value="creative" data-testid="option-tone-creative">Creative - Bold & Innovative</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="flex items-center gap-2 text-gray-900">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        Quality Level
                      </Label>
                      <p className="text-xs text-gray-600 mb-2">
                        ⚡ <strong>Performance vs. Quality:</strong> Higher quality levels use more advanced AI models for better results but may take slightly longer. Choose based on your needs - Standard works great for most products, while Premium is perfect for high-value items.
                      </p>
                      <RadioGroup 
                        value={workflowData.qualityLevel} 
                        onValueChange={(value) => updateWorkflowData({ qualityLevel: value as any })}
                        className="grid grid-cols-2 gap-4"
                      >
                        {qualityLevels.map((level, index) => (
                          <motion.div 
                            key={level.value} 
                            className="relative"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                          >
                            <RadioGroupItem 
                              value={level.value} 
                              id={level.value} 
                              className="peer sr-only"
                              data-testid={`radio-quality-${level.value}`}
                            />
                            <Label
                              htmlFor={level.value}
                              className="flex flex-col p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-all relative overflow-hidden group text-gray-900"
                            >
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                              </div>
                              <span className="text-sm font-semibold mb-1 relative z-10 text-gray-900">{level.label}</span>
                              <span className="text-xs text-gray-600 mb-2 relative z-10">{level.description}</span>
                              <div className="space-y-1 relative z-10">
                                {level.features.map((feature) => (
                                  <div key={feature} className="flex items-center gap-1 text-xs text-gray-700">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 - Image Agent */}
                {currentStep === 1 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-images-title">
                        Product Images (Optional)
                      </h3>
                      <div className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-900">
                          Upload your product images and our AI will automatically process and optimize them for different angles and poses. Images are processed securely through AWS.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-400 hover:bg-indigo-50/50 transition-all cursor-pointer"
                        data-testid="dropzone-images"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium mb-2">
                          Drag and drop your images here
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          or click to browse from your computer
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Supports JPG, PNG, WebP (max 10MB each)
                        </Badge>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-sm text-gray-600">Poses assigned</span>
                      <Badge className="bg-indigo-600" data-testid="badge-poses-count">
                        {workflowData.images?.length || 0}/6
                      </Badge>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="space-y-4"
                    >
                      <h4 className="text-md font-semibold text-gray-900">Image Directives</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="lighting" className="text-sm">Lighting</Label>
                          <Select 
                            value={workflowData.imagePromptDirectives?.lighting || 'natural'} 
                            onValueChange={(value) => updateWorkflowData({ 
                              imagePromptDirectives: { 
                                ...workflowData.imagePromptDirectives, 
                                lighting: value as any 
                              } 
                            })}
                          >
                            <SelectTrigger id="lighting" data-testid="select-lighting">
                              <SelectValue placeholder="Select lighting" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="natural">Natural</SelectItem>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="golden-hour">Golden Hour</SelectItem>
                              <SelectItem value="dramatic">Dramatic</SelectItem>
                              <SelectItem value="soft">Soft</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mood" className="text-sm">Mood</Label>
                          <Select 
                            value={workflowData.imagePromptDirectives?.mood || 'bright'} 
                            onValueChange={(value) => updateWorkflowData({ 
                              imagePromptDirectives: { 
                                ...workflowData.imagePromptDirectives, 
                                mood: value as any 
                              } 
                            })}
                          >
                            <SelectTrigger id="mood" data-testid="select-mood">
                              <SelectValue placeholder="Select mood" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bright">Bright</SelectItem>
                              <SelectItem value="warm">Warm</SelectItem>
                              <SelectItem value="cool">Cool</SelectItem>
                              <SelectItem value="vibrant">Vibrant</SelectItem>
                              <SelectItem value="minimalist">Minimalist</SelectItem>
                              <SelectItem value="elegant">Elegant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cameraAngle" className="text-sm">Camera Angle</Label>
                          <Select 
                            value={workflowData.imagePromptDirectives?.cameraAngle || 'front'} 
                            onValueChange={(value) => updateWorkflowData({ 
                              imagePromptDirectives: { 
                                ...workflowData.imagePromptDirectives, 
                                cameraAngle: value as any 
                              } 
                            })}
                          >
                            <SelectTrigger id="cameraAngle" data-testid="select-camera-angle">
                              <SelectValue placeholder="Select angle" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="front">Front</SelectItem>
                              <SelectItem value="side">Side</SelectItem>
                              <SelectItem value="angled">Angled</SelectItem>
                              <SelectItem value="top-down">Top Down</SelectItem>
                              <SelectItem value="close-up">Close Up</SelectItem>
                              <SelectItem value="full-body">Full Body</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="style" className="text-sm">Style</Label>
                          <Select 
                            value={workflowData.imagePromptDirectives?.style || 'realistic'} 
                            onValueChange={(value) => updateWorkflowData({ 
                              imagePromptDirectives: { 
                                ...workflowData.imagePromptDirectives, 
                                style: value as any 
                              } 
                            })}
                          >
                            <SelectTrigger id="style" data-testid="select-style">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realistic">Realistic</SelectItem>
                              <SelectItem value="artistic">Artistic</SelectItem>
                              <SelectItem value="lifestyle">Lifestyle</SelectItem>
                              <SelectItem value="editorial">Editorial</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 3 - Pricing Agent */}
                {currentStep === 2 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-pricing-title">
                        Product Pricing & Variants
                      </h3>
                      <div className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-900">
                          Our AI will analyze your product and suggest optimal pricing strategies based on market data and competitor analysis.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="space-y-4"
                    >
                      <h4 className="text-md font-semibold text-gray-900">Pricing Structure</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="currency" className="text-sm">Currency</Label>
                          <Select 
                            value={workflowData.variantPricing?.currency || 'USD'} 
                            onValueChange={(value) => updateWorkflowData({ 
                              variantPricing: { 
                                ...workflowData.variantPricing, 
                                currency: value 
                              } 
                            })}
                          >
                            <SelectTrigger id="currency" data-testid="select-currency">
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD ($)</SelectItem>
                              <SelectItem value="EUR">EUR (€)</SelectItem>
                              <SelectItem value="GBP">GBP (£)</SelectItem>
                              <SelectItem value="JPY">JPY (¥)</SelectItem>
                              <SelectItem value="TRY">TRY (₺)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="price" className="text-sm">Price</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={workflowData.variantPricing?.price || ''}
                            onChange={(e) => updateWorkflowData({ 
                              variantPricing: { 
                                currency: workflowData.variantPricing?.currency || 'USD',
                                ...workflowData.variantPricing, 
                                price: e.target.value ? parseFloat(e.target.value) : undefined 
                              } 
                            })}
                            data-testid="input-price"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="compareAtPrice" className="text-sm">Compare-at Price</Label>
                          <Input
                            id="compareAtPrice"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={workflowData.variantPricing?.compareAtPrice || ''}
                            onChange={(e) => updateWorkflowData({ 
                              variantPricing: { 
                                currency: workflowData.variantPricing?.currency || 'USD',
                                ...workflowData.variantPricing, 
                                compareAtPrice: e.target.value ? parseFloat(e.target.value) : undefined 
                              } 
                            })}
                            data-testid="input-compare-at-price"
                          />
                        </div>
                      </div>

                      {workflowData.variantPricing?.price && workflowData.variantPricing?.compareAtPrice && 
                       workflowData.variantPricing.compareAtPrice > workflowData.variantPricing.price && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-600">
                              {Math.round(((workflowData.variantPricing.compareAtPrice - workflowData.variantPricing.price) / workflowData.variantPricing.compareAtPrice) * 100)}% OFF
                            </Badge>
                            <span className="text-sm text-green-900">
                              Customers save {(workflowData.variantPricing.compareAtPrice - workflowData.variantPricing.price).toFixed(2)} {workflowData.variantPricing.currency}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    <motion.div 
                      className="flex items-center justify-between p-6 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Product options</p>
                        <p className="text-lg font-semibold text-gray-900" data-testid="text-variants-count">
                          {workflowData.productOptions?.length || 0} options configured
                        </p>
                      </div>
                      <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                        <Button 
                          variant="outline" 
                          className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                          data-testid="button-configure-pricing"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Add Options
                        </Button>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Card className="border-indigo-200 bg-indigo-50/50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-indigo-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">AI Pricing Optimization</h4>
                              <p className="text-sm text-gray-700">
                                Our pricing agent will automatically suggest competitive prices based on your product category, market trends, and competitor pricing data.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 4 - Publishing Agent */}
                {currentStep === 3 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-publishing-title">
                        Review & Publish
                      </h3>
                      <div className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-900">
                          Review your product details and choose where to publish. Our AI will automatically format and optimize your listing for each platform.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Card className="border-gray-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Product Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Product Title</p>
                              <p className="text-sm font-semibold text-gray-900" data-testid="review-product-title">
                                {workflowData.productTitle || 'Not set'}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Language</p>
                              <p className="text-sm font-semibold text-gray-900">{workflowData.language}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Quality Level</p>
                              <p className="text-sm font-semibold text-gray-900 capitalize">{workflowData.qualityLevel}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Tone & Persona</p>
                              <p className="text-sm font-semibold text-gray-900 capitalize">{workflowData.tonePersona || 'Professional'}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">AI Model Gender</p>
                              <p className="text-sm font-semibold text-gray-900 capitalize">{workflowData.aiModelGender}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Price</p>
                              <p className="text-sm font-semibold text-gray-900">
                                {workflowData.variantPricing?.price 
                                  ? `${workflowData.variantPricing.currency} ${workflowData.variantPricing.price.toFixed(2)}` 
                                  : 'Not set'}
                              </p>
                            </div>
                          </div>
                          {workflowData.productDetails && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Product Details</p>
                              <p className="text-sm text-gray-700 line-clamp-3">{workflowData.productDetails}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Label className="text-sm font-medium mb-3 block">Select Publishing Platforms</Label>
                      <div className="grid grid-cols-2 gap-4">
                        {platforms.map((platform, index) => {
                          const isSelected = workflowData.publishingPlatforms?.includes(platform.name) || false;
                          const canSelect = platform.status === 'connected';
                          
                          return (
                            <motion.div
                              key={platform.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                              whileHover={canSelect ? { scale: 1.02 } : {}}
                              className="relative group"
                              onClick={() => {
                                if (canSelect) {
                                  const currentPlatforms = workflowData.publishingPlatforms || [];
                                  const newPlatforms = isSelected
                                    ? currentPlatforms.filter(p => p !== platform.name)
                                    : [...currentPlatforms, platform.name];
                                  updateWorkflowData({ publishingPlatforms: newPlatforms });
                                }
                              }}
                            >
                              <Card className={`border-2 transition-all ${
                                isSelected
                                  ? 'border-indigo-600 bg-indigo-50/50 shadow-lg' 
                                  : canSelect
                                  ? 'border-gray-200 hover:border-gray-300 cursor-pointer'
                                  : 'border-gray-200 opacity-60'
                              }`}>
                                <CardContent className="p-6">
                                  <div className="flex items-center justify-between mb-3">
                                    <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                                      <span className="text-white text-xl font-bold">{platform.letter}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {isSelected && <Check className="w-5 h-5 text-indigo-600" />}
                                      <Badge className={platform.status === 'connected' ? 'bg-indigo-600' : ''} variant={platform.status === 'connected' ? 'default' : 'outline'}>
                                        {platform.status === 'connected' ? 'Connected' : 'Coming Soon'}
                                      </Badge>
                                    </div>
                                  </div>
                                  <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                                  <p className="text-xs text-gray-600 mt-1">{platform.description}</p>
                                  {platform.status === 'coming_soon' && (
                                    <motion.div
                                      className="absolute inset-0 bg-gray-900/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                      <p className="text-white font-medium text-sm">Coming Soon</p>
                                    </motion.div>
                                  )}
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Checkbox 
                        id="autoPublish"
                        checked={workflowData.autoPublishShopify}
                        onCheckedChange={(checked) => updateWorkflowData({ autoPublishShopify: checked as boolean })}
                        data-testid="checkbox-auto-publish"
                      />
                      <Label 
                        htmlFor="autoPublish" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Auto-publish immediately after processing
                      </Label>
                    </motion.div>

                    <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-indigo-600 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">Ready to Launch!</h4>
                            <p className="text-sm text-gray-700 mb-4">
                              Click "Process Product" to let our AI agents optimize and publish your product listing. This typically takes 2-3 minutes.
                            </p>
                            <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                              <Button 
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                                onClick={handleProcess}
                                data-testid="button-process-product"
                              >
                                Process Product
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="bg-white/80 backdrop-blur-sm"
                  data-testid="button-previous"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              </motion.div>

              {currentStep < steps.length - 1 && (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <motion.div
                    animate={!isNextDisabled ? {
                      boxShadow: [
                        '0 0 0 0 rgba(99, 102, 241, 0)',
                        '0 0 0 8px rgba(99, 102, 241, 0.3)',
                        '0 0 0 0 rgba(99, 102, 241, 0)'
                      ]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="rounded-md"
                  >
                    <Button
                      onClick={handleNext}
                      disabled={isNextDisabled}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                      data-testid="button-next"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

export default function WorkflowPage() {
  return (
    <WorkflowProvider>
      <WorkflowContent />
    </WorkflowProvider>
  );
}
