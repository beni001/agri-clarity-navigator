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
  // Score each crop based on how well it matches the conditions
  const scoredCrops = kenyanCrops.map(crop => {
    const [minPh, maxPh] = crop.phRange;
    
    // Calculate pH score (0-1)
    const phScore = ph >= minPh - 1 && ph <= maxPh + 1 
      ? 1 - Math.min(Math.abs(ph - (minPh + maxPh) / 2) / 2, 1)
      : 0;

    // Calculate nutrient scores (0-1)
    const nitrogenScore = Math.max(0, 1 - Math.abs(1 - nutrients.nitrogen / (crop.nutrients.nitrogen * 0.5)));
    const phosphorusScore = Math.max(0, 1 - Math.abs(1 - nutrients.phosphorus / (crop.nutrients.phosphorus * 0.5)));
    const potassiumScore = Math.max(0, 1 - Math.abs(1 - nutrients.potassium / (crop.nutrients.potassium * 0.5)));

    // Calculate total score
    const totalScore = (phScore + nitrogenScore + phosphorusScore + potassiumScore) / 4;

    return {
      crop,
      score: totalScore
    };
  });

  // Sort crops by score and get top recommendations
  const recommendedCrops = scoredCrops
    .filter(item => item.score > 0.3) // Minimum threshold for recommendations
    .sort((a, b) => b.score - a.score)
    .map(item => ({
      ...item.crop,
      notes: `${item.crop.notes} (Compatibility Score: ${Math.round(item.score * 100)}%)`
    }));

  // Get irrigation recommendations
  const irrigation = calculateIrrigation(weather);

  return {
    recommendedCrops: recommendedCrops.slice(0, 5), // Top 5 recommendations
    irrigation
  };
};