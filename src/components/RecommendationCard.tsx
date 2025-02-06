
import { Wheat, Droplets, ThermometerSun } from "lucide-react";
import { analyzeSoilData, additionalCropsForKenya } from '../data/cropRecommendations';

export const RecommendationCard = () => {
  // Example usage of the local data - you'll want to get these values from your soil data input
  const sampleData = {
    ph: 6.5,
    nutrients: {
      nitrogen: 50,
      phosphorus: 30,
      potassium: 40
    },
    weather: {
      precipitation: 0,
      temperature: 25,
      humidity: 65,
      windSpeed: 10
    }
  };

  const recommendations = analyzeSoilData(
    sampleData.ph,
    sampleData.nutrients,
    sampleData.weather
  );

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Crop Recommendations</h3>
        <span className="text-sm text-secondary">Based on Local Analysis</span>
      </div>
      
      <div className="grid gap-4">
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Wheat className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Optimal Crops</h4>
            <p className="text-sm text-secondary">
              {recommendations.recommendedCrops.length > 0 
                ? `Recommended crops: ${recommendations.recommendedCrops.map(crop => crop.name).join(', ')}`
                : 'Add crop data to see recommendations'}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Droplets className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Irrigation Schedule</h4>
            <p className="text-sm text-secondary">
              Recommended watering: {recommendations.irrigation.frequency}, 
              {recommendations.irrigation.duration}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <ThermometerSun className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Management Tips</h4>
            <p className="text-sm text-secondary">
              {recommendations.recommendedCrops[0]?.managementPractices?.nutrientManagement || 
               'Add crop data to see management tips'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
