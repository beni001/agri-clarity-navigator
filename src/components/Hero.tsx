
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-background to-muted">
      <div className="space-y-6 max-w-3xl mx-auto fade-up">
        <span className="inline-block px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full">
          Precision Agriculture
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Smart Farming Decisions Made Simple
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto">
          Leverage advanced soil and weather data to optimize your crop yield and farming practices.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
