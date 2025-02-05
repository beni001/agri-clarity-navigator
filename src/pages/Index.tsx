import { Hero } from "@/components/Hero";
import { SoilDataInput } from "@/components/SoilDataInput";
import { WeatherCard } from "@/components/WeatherCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ConsultationBooking } from "@/components/ConsultationBooking";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SoilDataInput />
          <WeatherCard />
        </div>
        <RecommendationCard />
        <ConsultationBooking />
      </div>
    </div>
  );
};

export default Index;