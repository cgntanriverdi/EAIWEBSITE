import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Clean Logo */}
          <div className="flex items-center gap-3" data-testid="logo">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">AI Commerce Studio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            <Button
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => console.log('Sign in clicked')}
              data-testid="button-sign-in"
            >
              SIGN IN
            </Button>
            
            <Button
              className="bg-primary text-primary-foreground font-medium px-6 rounded-full"
              onClick={() => console.log('Start trial clicked')}
              data-testid="button-start-trial-nav"
            >
              SEE IN ACTION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
              
              <div className="border-t border-border pt-4 pb-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium mb-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Sign in clicked');
                  }}
                  data-testid="mobile-button-sign-in"
                >
                  SIGN IN
                </Button>
                
                <Button
                  className="w-full bg-primary text-primary-foreground font-medium rounded-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Start trial clicked');
                  }}
                  data-testid="mobile-button-start-trial"
                >
                  SEE IN ACTION
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}