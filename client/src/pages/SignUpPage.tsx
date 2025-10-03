import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Zap, TrendingUp, Users, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function SignUpPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const registerMutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const res = await apiRequest("POST", "/api/register", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Account created successfully!",
        description: "Welcome to AI Commerce Studio",
      });
      setLocation("/dashboard");
    },
    onError: (error: any) => {
      toast({
        title: "Sign up failed",
        description: error.message || "Username already exists or invalid input",
        variant: "destructive",
      });
    },
  });

  const calculatePasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "", barColor: "" };
    
    if (password.length < 8) {
      return { strength: 20, label: "Too weak", color: "text-red-600", barColor: "bg-red-500" };
    }
    
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasMultipleWords: password.includes(' ')
    };

    if (checks.length) strength += 30;
    if (checks.hasLowerCase) strength += 20;
    if (checks.hasUpperCase) strength += 20;
    if (checks.hasNumber) strength += 15;
    if (checks.hasSpecial) strength += 10;
    if (checks.hasMultipleWords) strength += 5;

    if (strength <= 35) {
      return { strength, label: "Too weak", color: "text-red-600", barColor: "bg-red-500" };
    } else if (strength <= 55) {
      return { strength, label: "Weak", color: "text-orange-600", barColor: "bg-orange-500" };
    } else if (strength <= 75) {
      return { strength, label: "Good", color: "text-yellow-600", barColor: "bg-yellow-500" };
    } else {
      return { strength, label: "Strong", color: "text-green-600", barColor: "bg-green-500" };
    }
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)'
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 lg:pr-8"
            >
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home-logo">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-all">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">AI Commerce Studio</span>
                </div>
              </Link>

              <div className="space-y-8 border-l-2 border-gray-200 pl-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Get started in minutes</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from our easy-to-use tools and pre-built solutions to launch your AI-powered commerce platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Transform your product listings</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Create compelling descriptions, optimize pricing, and generate professional imagery to increase conversions.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Join growing businesses</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    AI Commerce Studio helps ambitious startups and established brands optimize their e-commerce success.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-indigo-900 mb-1">Start optimizing today</p>
                    <p className="text-sm text-indigo-700">
                      Every day without AI optimization is a missed opportunity to boost your revenue and stand out from competitors.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10 max-w-md mx-auto lg:ml-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8" data-testid="text-signup-title">
                  Create your account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="w-full bg-white text-gray-900"
                      data-testid="input-username"
                      required
                      minLength={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <AnimatePresence>
                        {formData.password && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className={`text-sm font-semibold ${passwordStrength.color}`}
                          >
                            {passwordStrength.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="relative h-9">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full bg-white text-gray-900 pr-10 h-9"
                        data-testid="input-password"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors w-5 h-5 flex items-center justify-center focus:outline-none"
                        data-testid="button-toggle-password"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {formData.password && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <div className="flex gap-1">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                              className={`h-1 flex-1 rounded-full origin-left ${
                                passwordStrength.strength >= 25 ? passwordStrength.barColor : "bg-gray-200"
                              }`}
                            />
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className={`h-1 flex-1 rounded-full origin-left ${
                                passwordStrength.strength >= 50 ? passwordStrength.barColor : "bg-gray-200"
                              }`}
                            />
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className={`h-1 flex-1 rounded-full origin-left ${
                                passwordStrength.strength >= 75 ? passwordStrength.barColor : "bg-gray-200"
                              }`}
                            />
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                            <p className="leading-relaxed">
                              Passwords need to be at least 8 characters. Mix uppercase, lowercase, and numbers for better security.
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    data-testid="button-create-account"
                    disabled={registerMutation.isPending}
                  >
                    {registerMutation.isPending ? "Creating account..." : "Create account"}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <span className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer" data-testid="link-sign-in">
                        Sign in
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <Link href="/">
          <span className="text-indigo-600 hover:text-indigo-700 text-sm font-medium cursor-pointer">
            © AI Commerce Studio
          </span>
        </Link>
        <span className="text-gray-400 mx-3">•</span>
        <Link href="/privacy">
          <span className="text-gray-600 hover:text-gray-900 text-sm cursor-pointer">
            Privacy & terms
          </span>
        </Link>
      </div>
    </div>
  );
}
