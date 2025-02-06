
import { WeatherData, IrrigationRecommendation, CropRecommendation } from '../../types/crops';
import { kenyanCrops } from './kenyanCrops';

export const calculateIrrigation = (weather: WeatherData): IrrigationRecommendation => {
  const { precipitation, temperature, humidity } = weather;
  
  // Basic irrigation logic based on weather conditions
  if (precipitation > 0) {
    return {
      frequency: "As needed based on soil moisture",
      duration: "Monitor soil moisture"
    };
  }
  
  if (temperature > 30) {
    return {
      frequency: "Twice daily",
      duration: "20-30 minutes"
    };
  }
  
  return {
    frequency: "Daily",
    duration: "15-20 minutes"
  };
};

export const analyzeSoilData = (
  ph: number,
  nutrients: { nitrogen: number; phosphorus: number; potassium: number },
  weather: WeatherData
) => {
  // Filter crops based on pH range
  const recommendedCrops = kenyanCrops.filter(crop => {
    const [minPh, maxPh] = crop.phRange;
    return ph >= minPh && ph <= maxPh;
  }).filter(crop => {
    // Further filter based on nutrient requirements
    return (
      nutrients.nitrogen >= crop.nutrients.nitrogen * 0.7 &&
      nutrients.phosphorus >= crop.nutrients.phosphorus * 0.7 &&
      nutrients.potassium >= crop.nutrients.potassium * 0.7
    );
  });

  // Get irrigation recommendations
  const irrigation = calculateIrrigation(weather);

  return {
    recommendedCrops: recommendedCrops.slice(0, 5), // Top 5 recommendations
    irrigation
  };
};
