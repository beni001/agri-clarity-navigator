
import { Hero } from "@/components/Hero";
import { SoilDataInput } from "@/components/SoilDataInput";
import { WeatherCard } from "@/components/WeatherCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ConsultationBooking } from "@/components/ConsultationBooking";
import { BookSoilTesting } from "@/components/BookSoilTesting";
import { SoilTestResults } from "@/components/SoilTestResults";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [soilData, setSoilData] = useState({
    ph: 7.0,
    nutrients: {
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0
    }
  });

  const handleSoilTestSubmit = (data: { ph: number; nutrients: { nitrogen: number; phosphorus: number; potassium: number; }}) => {
    setSoilData(data);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SoilDataInput />
          <WeatherCard />
        </div>
        <SoilTestResults onSubmit={handleSoilTestSubmit} />
        <RecommendationCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ConsultationBooking />
          <BookSoilTesting />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
