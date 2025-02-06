
import { CropRecommendation, WeatherData, IrrigationRecommendation } from '../types/crops';

// Function to calculate irrigation recommendations based on weather
export const calculateIrrigation = (weather: WeatherData): IrrigationRecommendation => {
  // This will be called by the analysis function to get irrigation recommendations
  // based on current weather conditions
  return {
    frequency: "daily",
    duration: "15-20 minutes"
  };
};

// Your crop recommendations data will go here
export const cropRecommendations: CropRecommendation[] = [];

// Main function to analyze soil data and provide recommendations
export const analyzeSoilData = (
  ph: number,
  nutrients: { nitrogen: number; phosphorus: number; potassium: number },
  weather: WeatherData
) => {
  // Filter crops based on pH
  const suitableCrops = cropRecommendations.filter(crop => {
    const [minPh, maxPh] = crop.phRange;
    return ph >= minPh && ph <= maxPh;
  });

  // Get irrigation recommendation based on weather
  const irrigation = calculateIrrigation(weather);

  // Sort crops by nutrient match
  const rankedCrops = suitableCrops.sort((a, b) => {
    const aMatch = Math.abs(a.nutrients.nitrogen - nutrients.nitrogen) +
                  Math.abs(a.nutrients.phosphorus - nutrients.phosphorus) +
                  Math.abs(a.nutrients.potassium - nutrients.potassium);
    
    const bMatch = Math.abs(b.nutrients.nitrogen - nutrients.nitrogen) +
                  Math.abs(b.nutrients.phosphorus - nutrients.phosphorus) +
                  Math.abs(b.nutrients.potassium - nutrients.potassium);
    
    return aMatch - bMatch;
  });

  return {
    recommendedCrops: rankedCrops.slice(0, 3),
    irrigation,
  };
};
