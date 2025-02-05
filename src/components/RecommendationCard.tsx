import { Wheat, Droplets, ThermometerSun } from "lucide-react";

export const RecommendationCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Crop Recommendations</h3>
        <span className="text-sm text-secondary">Updated daily</span>
      </div>
      
      <div className="grid gap-4">
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Wheat className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Optimal Crops</h4>
            <p className="text-sm text-secondary">Based on current soil and weather conditions, consider planting: Tomatoes, Lettuce, Carrots</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <Droplets className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Irrigation Schedule</h4>
            <p className="text-sm text-secondary">Recommended watering: Early morning, 15-20 minutes per section</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
          <ThermometerSun className="h-6 w-6 text-primary mt-1" />
          <div className="space-y-1">
            <h4 className="font-medium">Climate Advisory</h4>
            <p className="text-sm text-secondary">Favorable growing conditions expected for the next 5 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};