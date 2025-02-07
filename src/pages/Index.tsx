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
  const [soilData, setSoilData] = useState<{
    ph: number;
    nutrients: {
      nitrogen: number;
      phosphorus: number;
      potassium: number;
    };
    weather: {
      precipitation: number;
      temperature: number;
      humidity: number;
      windSpeed: number;
    };
  } | null>(null);

  const handleSoilTestSubmit = (data: { 
    ph: number; 
    nutrients: { 
      nitrogen: number; 
      phosphorus: number; 
      potassium: number; 
    }
  }) => {
    setSoilData({
      ...data,
      weather: {
        precipitation: 0,
        temperature: 25,
        humidity: 65,
        windSpeed: 10
      }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <SoilDataInput />
          <WeatherCard />
        </div>
        <SoilTestResults onSubmit={handleSoilTestSubmit} />
        {soilData && <RecommendationCard soilData={soilData} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <ConsultationBooking />
          <BookSoilTesting />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;