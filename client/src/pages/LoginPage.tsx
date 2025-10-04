import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [view, setView] = useState<"login" | "forgot-password">("login");
  const [resetEmail, setResetEmail] = useState("");
  const [loginError, setLoginError] = useState<string>("");
  const [shake, setShake] = useState(false);

  const loginMutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const res = await apiRequest("POST", "/api/login", data);
      return await res.json();
    },
    onSuccess: () => {
      setLoginError("");
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in",
      });
      setLocation("/dashboard");
    },
    onError: (error: any) => {
      const errorMsg = error.message || "Invalid username or password";
      setLoginError(errorMsg);
      setShake(true);
      setTimeout(() => setShake(false), 650);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    loginMutation.mutate(formData);
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password reset",
      description: "If an account exists with this email, you will receive a password reset link",
    });
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
        <div className="w-full max-w-md mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: shake ? [0, -10, 10, -10, 10, -5, 5, 0] : 0
            }}
            transition={{ 
              duration: shake ? 0.6 : 0.8,
              x: { duration: 0.6 }
            }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
              <Link href="/">
                <div className="flex items-center justify-center gap-3 cursor-pointer group mb-8" data-testid="link-home-logo">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-all">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">AI Commerce Studio</span>
                </div>
              </Link>

              <AnimatePresence mode="wait">
                {view === "login" ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center" data-testid="text-login-title">
                      Welcome back
                    </h1>
                    <p className="text-gray-600 text-center mb-8">
                      Sign in to your account to continue
                    </p>

                    {loginError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2"
                        data-testid="alert-login-error"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-red-800">{loginError}</p>
                      </motion.div>
                    )}

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
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                          </Label>
                          <button
                            type="button"
                            onClick={() => setView("forgot-password")}
                            className="text-sm text-indigo-600 hover:text-indigo-700 cursor-pointer"
                            data-testid="link-forgot-password"
                          >
                            Forgot password?
                          </button>
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
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                        data-testid="button-sign-in"
                        disabled={loginMutation.isPending}
                      >
                        {loginMutation.isPending ? "Signing in..." : "Sign in"}
                      </Button>
                    </form>

                    <div className="mt-8 text-center">
                      <span className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/signup">
                          <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer" data-testid="link-sign-up">
                            Sign up
                          </span>
                        </Link>
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="forgot-password"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center" data-testid="text-reset-title">
                      Reset your password
                    </h1>
                    <p className="text-gray-600 text-center mb-8">
                      Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>

                    <form onSubmit={handleResetSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="reset-email"
                          type="email"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          className="w-full bg-white text-gray-900"
                          data-testid="input-reset-email"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                        data-testid="button-continue"
                      >
                        Continue
                      </Button>
                    </form>

                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setView("login")}
                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
                        data-testid="link-return-to-signin"
                      >
                        Return to sign in
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-sm text-gray-600">
                        New to AI Commerce Studio?{" "}
                        <Link href="/signup">
                          <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer" data-testid="link-create-account">
                            Create account
                          </span>
                        </Link>
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

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
