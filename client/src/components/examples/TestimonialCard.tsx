import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-background">
      <TestimonialCard
        name="Sarah Chen"
        role="E-commerce Manager"
        company="Fashion Forward Co"
        content="Our conversion rates jumped 85% after implementing the AI agents. The product descriptions are incredibly persuasive and the automated pricing keeps us competitive."
        rating={5}
        metrics={{ label: "Conversion Increase", value: "85%", color: "bg-green-500" }}
      />
      
      <TestimonialCard
        name="Marcus Rodriguez"
        role="Founder"
        company="Tech Gadgets Pro"
        content="The image generation agent is a game-changer. Studio-quality photos from basic product shots - our listings look like they belong in a premium catalog."
        rating={5}
        metrics={{ label: "Time Saved", value: "20 hrs/week", color: "bg-blue-500" }}
      />
      
      <TestimonialCard
        name="Elena Volkov"
        role="Operations Director"
        company="Global Marketplace Inc"
        content="We've automated our entire listing workflow. What used to take our team 3 days now happens in 30 minutes. The ROI is incredible."
        rating={5}
        metrics={{ label: "Revenue Growth", value: "145%", color: "bg-purple-500" }}
      />
    </div>
  );
}