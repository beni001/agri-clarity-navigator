import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [growthStage, setGrowthStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGrowthStage((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-8 md:py-12 text-center bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="w-full max-w-2xl h-64 md:h-96 relative">
          {/* Plant stem */}
          <div 
            className="absolute left-1/2 bottom-0 w-1 bg-primary transition-all duration-1000 ease-in-out"
            style={{ 
              height: `${Math.min(growthStage * 25, 80)}%`,
              transform: 'translateX(-50%)'
            }}
          />
          
          {/* Leaves */}
          {growthStage >= 2 && (
            <>
              <div className="absolute left-1/2 bottom-1/3 -translate-x-full">
                <div className="w-12 h-8 bg-primary rounded-full -rotate-45 origin-right animate-fade-in" />
              </div>
              <div className="absolute left-1/2 bottom-1/2 translate-x-0">
                <div className="w-12 h-8 bg-primary rounded-full rotate-45 origin-left animate-fade-in" />
              </div>
            </>
          )}
          
          {/* Flower/fruit */}
          {growthStage >= 3 && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[20%] animate-fade-in">
              <div className="w-8 h-8 bg-accent rounded-full" />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto fade-up relative z-10">
        <span className="inline-block px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full">
          Precision Agriculture
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Smart Farming Decisions Made Simple
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto">
          Leverage advanced soil and weather data to optimize your crop yield and farming practices.
        </p>
        <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
};