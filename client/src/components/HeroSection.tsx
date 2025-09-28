import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="max-w-6xl mx-auto px-6 text-left">
        {/* Hero Title with Clean Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-foreground leading-none" data-testid="text-hero-title">
          <span className="block">Everything App</span>
          <span className="block">for your commerce</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl" data-testid="text-hero-subtitle">
          AI Commerce Studio, an advanced platform, serves as an all-in-one replacement of manual e-commerce workflows, pricing strategies, and content creation.
        </p>
        
        {/* CTA Button */}
        <div className="mb-16">
          <Button
            className="bg-primary text-primary-foreground font-medium px-8 py-4 text-lg rounded-full hover:bg-primary/90 transition-colors"
            onClick={() => console.log('See in action clicked')}
            data-testid="button-hero-cta"
          >
            SEE IN ACTION →
          </Button>
        </div>
        
        {/* Simple metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Conversion Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">20hrs</div>
            <div className="text-sm text-muted-foreground">Time Saved Weekly</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">145%</div>
            <div className="text-sm text-muted-foreground">Revenue Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}