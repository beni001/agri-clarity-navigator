import { Wheat, Droplets, ThermometerSun } from "lucide-react";
import { analyzeSoilData } from '../data/cropRecommendations';

interface SoilDataProps {
  soilData: {
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
  };
}

export const RecommendationCard = ({ soilData }: SoilDataProps) => {
  const recommendations = analyzeSoilData(
    soilData.ph,
    soilData.nutrients,
    soilData.weather
  );

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Crop Recommendations</h3>
        <span className="text-sm text-secondary">Based on Your Soil Analysis</span>
      </div>
      
      <div className="grid gap-4">
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Wheat className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Optimal Crops</h4>
            <p className="text-sm text-secondary">
              {recommendations.recommendedCrops.map(crop => crop.name).join(', ')}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Droplets className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Irrigation Schedule</h4>
            <p className="text-sm text-secondary">
              {`${recommendations.irrigation.frequency}, ${recommendations.irrigation.duration}`}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <ThermometerSun className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Management Tips</h4>
            <p className="text-sm text-secondary">
              {recommendations.recommendedCrops[0]?.managementPractices?.nutrientManagement || 
               'No specific management tips available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};