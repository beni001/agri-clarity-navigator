import { Hero } from "@/components/Hero";
import { SoilDataInput } from "@/components/SoilDataInput";
import { WeatherCard } from "@/components/WeatherCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <SoilDataInput />
        <WeatherCard />
      </div>
    </div>
  );
};

export default Index;