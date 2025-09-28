import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2" data-testid="logo">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AI Commerce Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Navigate to ${item.label}`);
                }}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => console.log('Sign in clicked')}
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
            <Button
              className="bg-brand-gradient text-white hover-elevate shadow-lg"
              onClick={() => console.log('Start trial clicked')}
              data-testid="button-start-trial-nav"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md" data-testid="mobile-menu">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    console.log(`Navigate to ${item.label}`);
                  }}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-2 border-t border-border/50">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Sign in clicked');
                  }}
                  data-testid="button-mobile-sign-in"
                >
                  Sign In
                </Button>
                <Button
                  className="w-full bg-brand-gradient text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Start trial clicked');
                  }}
                  data-testid="button-mobile-start-trial"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}