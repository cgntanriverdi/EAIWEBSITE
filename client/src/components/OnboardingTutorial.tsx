import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  ArrowRight, 
  Package, 
  Zap, 
  BarChart3,
  MousePointer2,
  X
} from "lucide-react";

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  icon: typeof Sparkles;
  highlightSelector: string;
  position: "center" | "sidebar" | "stats" | "agents" | "chart";
}

const tutorialSteps: TutorialStep[] = [
  {
    id: "welcome",
    title: "Welcome to AI Commerce Studio! 🎉",
    description: "Let's take a quick tour of your new dashboard. You'll learn how to create amazing product listings with AI in just a few clicks.",
    icon: Sparkles,
    highlightSelector: "",
    position: "center"
  },
  {
    id: "sidebar",
    title: "Your Navigation Hub",
    description: "Access all your tools from here. Dashboard shows your overview, My Products lists everything you've created, and Agents is where the magic happens.",
    icon: MousePointer2,
    highlightSelector: '[data-testid="dashboard-nav"]',
    position: "sidebar"
  },
  {
    id: "stats",
    title: "Track Your Progress",
    description: "Keep an eye on your credits, daily usage, and total products. Your plan gives you credits to use our AI agents.",
    icon: BarChart3,
    highlightSelector: '[data-testid="card-credits"]',
    position: "stats"
  },
  {
    id: "agents",
    title: "AI-Powered Agents",
    description: "These are your secret weapons! Use Description Agent for compelling copy, Image Agent for stunning visuals, Pricing Agent for optimal pricing, and Publishing Agent to go live.",
    icon: Zap,
    highlightSelector: '[data-testid="section-quick-actions"]',
    position: "agents"
  },
  {
    id: "products",
    title: "Your Product Gallery",
    description: "All your created products will appear here. Start by clicking any agent card to create your first AI-optimized product listing!",
    icon: Package,
    highlightSelector: '[data-testid="section-recent-products"]',
    position: "agents"
  }
];

interface OnboardingTutorialProps {
  onComplete: () => void;
}

export default function OnboardingTutorial({ onComplete }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [highlightPosition, setHighlightPosition] = useState<React.CSSProperties>({});

  const currentStepData = tutorialSteps[currentStep];
  const isLastStep = currentStep === tutorialSteps.length - 1;
  const StepIcon = currentStepData.icon;

  useEffect(() => {
    if (currentStepData.highlightSelector) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(currentStepData.highlightSelector);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          
          // Update position after scroll
          setTimeout(() => {
            const rect = element.getBoundingClientRect();
            setHighlightPosition({
              top: `${rect.top - 8}px`,
              left: `${rect.left - 8}px`,
              width: `${rect.width + 16}px`,
              height: `${rect.height + 16}px`,
            });
          }, 400);
        }
      }, 100);
    } else {
      setHighlightPosition({});
    }
  }, [currentStep, currentStepData.highlightSelector]);

  const handleNext = () => {
    if (isLastStep) {
      setIsVisible(false);
      setTimeout(() => onComplete(), 300);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => onComplete(), 300);
  };

  const getCardPosition = () => {
    switch (currentStepData.position) {
      case "sidebar":
        return "left-72 top-20";
      case "stats":
        return "left-1/2 -translate-x-1/2 top-32";
      case "agents":
        return "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
      case "chart":
        return "left-1/2 -translate-x-1/2 top-1/2";
      default:
        return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with spotlight effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ 
              backgroundColor: "rgba(0, 0, 0, 0.85)"
            }}
            onClick={handleSkip}
          >
            {/* Spotlight highlight - creates a cutout effect */}
            {currentStepData.highlightSelector && highlightPosition.width && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute"
                style={{
                  boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.8), 0 0 0 9999px rgba(0, 0, 0, 0.85)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                  ...highlightPosition
                }}
              />
            )}
          </motion.div>

          {/* Bright overlay for highlighted area */}
          {currentStepData.highlightSelector && highlightPosition.width && (
            <motion.div
              key={`bright-${currentStep}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed z-[55]"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                pointerEvents: "none",
                mixBlendMode: "screen",
                ...highlightPosition
              }}
            />
          )}

          {/* Tutorial Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-[60] ${getCardPosition()}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full max-w-lg bg-white shadow-2xl border-2 border-gray-100 overflow-hidden">
              {/* Rainbow gradient header */}
              <div 
                className="h-2 w-full"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              />

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={handleSkip}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                  data-testid="button-close-tutorial"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <StepIcon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {currentStepData.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentStepData.description}
                  </p>
                </motion.div>

                {/* Progress indicators */}
                <div className="flex gap-2 mb-6">
                  {tutorialSteps.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className={`h-1.5 flex-1 rounded-full origin-left transition-all duration-300 ${
                        index === currentStep
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600"
                          : index < currentStep
                          ? "bg-indigo-200"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    onClick={handleSkip}
                    className="text-gray-500 hover:text-gray-700"
                    data-testid="button-skip-tutorial"
                  >
                    Skip tour
                  </Button>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">
                      {currentStep + 1} of {tutorialSteps.length}
                    </span>
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      data-testid="button-next-tutorial"
                    >
                      {isLastStep ? "Get started" : "Next"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
