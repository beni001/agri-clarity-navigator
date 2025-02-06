
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

// Define the array first before using it in analyzeSoilData
export const additionalCropsForKenya: CropRecommendation[] = [
  {
    crop: "Sukuma Wiki (Collard Greens)",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Central Kenya", "Rift Valley"],
    notes: "A staple leafy vegetable in Kenya, Sukuma Wiki thrives in well‐drained, moderately fertile soils and can be grown year‐round with peaks during the rainy seasons.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "40-50 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "Year-round with rainy season peaks"
    },
    yieldPotential: "3-4 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and caterpillars; use biopesticides if infestations occur.",
      diseaseManagement: "Ensure good air circulation and avoid waterlogging to prevent fungal diseases.",
      nutrientManagement: "Use compost and balanced fertilizers to maintain soil fertility."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Pigeon Pea",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 30, phosphorus: 20, potassium: 25 },
    idealRegions: ["Eastern Kenya", "Semi-arid regions"],
    notes: "A drought-tolerant legume that fixes nitrogen, thereby improving soil fertility.",
    growthParameters: {
      germinationPeriod: "10-14 days",
      maturity: "120-150 days",
      plantSpacing: "40-50 cm apart",
      plantingSeason: "March - May or September - November"
    },
    yieldPotential: "1.2-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Inspect regularly for pod borers; apply integrated pest management as needed.",
      diseaseManagement: "Apply appropriate fungicides if fungal infections are detected.",
      nutrientManagement: "Incorporate organic matter to support nitrogen fixation."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Chili Pepper",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Central Kenya", "Highland regions"],
    notes: "Requires warm temperatures and well-drained soil for optimum flavor and high yield.",
    growthParameters: {
      germinationPeriod: "10-14 days",
      maturity: "70-90 days",
      plantSpacing: "45-60 cm apart",
      plantingSeason: "February - April"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and whiteflies; use organic insecticides as needed.",
      diseaseManagement: "Maintain proper spacing to reduce humidity and the risk of fungal infections.",
      nutrientManagement: "Apply balanced fertilizer during early growth stages."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Sesame",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 20, phosphorus: 15, potassium: 25 },
    idealRegions: ["Semi-arid regions of Kenya"],
    notes: "A drought-tolerant oilseed crop that thrives in sandy soils with excellent drainage.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "700-900 kg/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 1.5
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control insect pests using neem-based solutions.",
      diseaseManagement: "Practice crop rotation to minimize soil-borne diseases.",
      nutrientManagement: "Low fertilizer input is required; supplement with organic compost if needed."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Finger Millet",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 25, phosphorus: 20, potassium: 20 },
    idealRegions: ["Highland regions", "Eastern Kenya"],
    notes: "Highly resilient and well-suited for marginal soils with variable rainfall patterns.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "20-25 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for finger millet midge; use biopesticides when necessary.",
      diseaseManagement: "Maintain field sanitation to reduce fungal infection risk.",
      nutrientManagement: "Apply organic manure to improve soil fertility."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Teff",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 30, phosphorus: 20, potassium: 30 },
    idealRegions: ["Central Kenya highlands"],
    notes: "A nutrient-rich cereal that adapts well to various soils and provides a gluten-free grain option.",
    growthParameters: {
      germinationPeriod: "5-7 days",
      maturity: "60-90 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "October - November"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "10 minutes" }
        : { frequency: "Every 10 Days", duration: "10 minutes" };
    },
    managementPractices: {
      pestManagement: "Use integrated pest management techniques.",
      diseaseManagement: "Ensure adequate spacing to prevent fungal diseases.",
      nutrientManagement: "Incorporate organic compost prior to planting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Garlic",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 45, phosphorus: 35, potassium: 40 },
    idealRegions: ["Central and Rift Valley Kenya"],
    notes: "Prefers well-drained soils and benefits from organic amendments for robust bulb development.",
    growthParameters: {
      germinationPeriod: "14-21 days",
      maturity: "90-120 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "4-5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Control onion fly and thrips with appropriate organic pesticides.",
      diseaseManagement: "Rotate crops to prevent soil-borne diseases like white rot.",
      nutrientManagement: "Incorporate compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Onion",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 55, phosphorus: 40, potassium: 45 },
    idealRegions: ["Central Kenya", "Rift Valley"],
    notes: "Thrives in well-drained, loamy soils with consistent moisture for bulb development.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: "20-25 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Manage thrips and bulb fly using biological controls.",
      diseaseManagement: "Prevent downy mildew with crop rotation and proper spacing.",
      nutrientManagement: "Supplement with nitrogen-rich fertilizers during bulb formation."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Sweet Corn",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 90, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Requires fertile soils and consistent moisture for optimal ear development.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "70-90 days",
      plantSpacing: "20-25 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "10-12 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for corn borers and armyworms; use biopesticides as needed.",
      diseaseManagement: "Apply fungicides to prevent leaf blight and rust.",
      nutrientManagement: "Use high-nitrogen fertilizer during early growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cucumber",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 70, phosphorus: 40, potassium: 50 },
    idealRegions: ["Central Kenya", "Rift Valley"],
    notes: "Needs warm temperatures, well-drained soil, and ample organic matter for healthy vine and fruit development.",
    growthParameters: {
      germinationPeriod: "5-7 days",
      maturity: "50-60 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "April - June"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Control cucumber beetles with organic insecticides.",
      diseaseManagement: "Prevent powdery mildew with proper spacing and ventilation.",
      nutrientManagement: "Apply balanced fertilizers and compost to boost growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Sunflower",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Semi-arid regions of Kenya"],
    notes: "Thrives in full sun and well-drained sandy loam soils, making it ideal for oilseed production.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-100 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and sunflower moth; use integrated pest management.",
      diseaseManagement: "Ensure proper spacing to reduce fungal infection risks.",
      nutrientManagement: "Apply balanced fertilizers and organic amendments."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Mung Bean",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 20, phosphorus: 15, potassium: 20 },
    idealRegions: ["Semi-arid and arid regions"],
    notes: "A drought-tolerant legume that fixes nitrogen and improves soil fertility.",
    growthParameters: {
      germinationPeriod: "4-7 days",
      maturity: "60-70 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "0.8-1.0 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Manage aphids and pod borers with organic pesticides.",
      diseaseManagement: "Ensure good drainage to prevent fungal issues.",
      nutrientManagement: "Incorporate compost to enhance nitrogen fixation."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Bambara Groundnut",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 25, phosphorus: 20, potassium: 25 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "A drought-tolerant legume that improves soil structure and enriches soil nitrogen.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "120-150 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "May - July"
    },
    yieldPotential: "0.5-0.8 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for weevils and aphids; use biological controls.",
      diseaseManagement: "Practice crop rotation to reduce soil-borne pathogens.",
      nutrientManagement: "Enhance soil fertility with compost and green manure."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Swiss Chard",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "A nutrient-dense leafy green that thrives in well-drained soils with moderate fertility.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "50-60 days",
      plantSpacing: "25-35 cm apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "3-4 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control leaf miners and aphids using organic insecticides.",
      diseaseManagement: "Avoid waterlogging to prevent root rot.",
      nutrientManagement: "Use balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Litchi",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Western Kenya", "Coastal regions"],
    notes: "Litchi thrives in tropical climates with well-drained, slightly acidic soils.",
    growthParameters: {
      germinationPeriod: "Varies by propagation method",
      maturity: "3-5 years",
      plantSpacing: "8-10 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for fruit flies and scale insects; use integrated pest management.",
      diseaseManagement: "Ensure proper pruning and sanitation to reduce fungal risks.",
      nutrientManagement: "Apply organic compost and micronutrients during fruiting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Custard Apple",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Coastal Kenya", "Eastern Kenya"],
    notes: "Thrives in tropical conditions and benefits from regular pruning and organic fertilization.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "3-4 years",
      plantSpacing: "8-10 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "5-8 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for fruit borers and scale insects; use organic pesticides when needed.",
      diseaseManagement: "Apply copper-based fungicides to prevent common fungal infections.",
      nutrientManagement: "Regularly apply compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Starfruit",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Coastal Kenya"],
    notes: "Requires well-drained soils and thrives in tropical climates with moderate organic matter.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "2-3 years",
      plantSpacing: "6-8 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "25 minutes" }
        : { frequency: "Every 15 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Control pests using integrated pest management practices.",
      diseaseManagement: "Use organic fungicides to manage fungal infections.",
      nutrientManagement: "Apply balanced fertilizers and compost on a regular basis."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Mushrooms",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 10, phosphorus: 10, potassium: 10 },
    idealRegions: ["Controlled environment agriculture facilities"],
    notes: "Grown in controlled environments, mushrooms require strict management of humidity, temperature, and sterility.",
    growthParameters: {
      germinationPeriod: "N/A",
      maturity: "30-60 days",
      plantSpacing: "N/A",
      plantingSeason: "Year-round (in controlled conditions)"
    },
    yieldPotential: "5-8 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return { frequency: "Controlled Environment", duration: "N/A" };
    },
    managementPractices: {
      pestManagement: "Maintain sterile conditions to prevent pest infestations.",
      diseaseManagement: "Monitor humidity and temperature to avoid mold growth.",
      nutrientManagement: "Use specially formulated substrates for optimal mushroom yield."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Chia",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 25, phosphorus: 20, potassium: 25 },
    idealRegions: ["Semi-arid regions"],
    notes: "Valued for its nutritional seeds, chia thrives in well-drained soils with minimal water.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "February - April"
    },
    yieldPotential: "0.8-1.0 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for seed weevils and aphids.",
      diseaseManagement: "Ensure proper drainage to prevent fungal infections.",
      nutrientManagement: "Apply balanced fertilizers along with organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Taro",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Tropical regions of Kenya"],
    notes: "Requires consistently moist soils with ample organic matter to develop well.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "8-10 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "Year-round in warm areas"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for taro beetles and snails; use organic measures when necessary.",
      diseaseManagement: "Ensure proper drainage to avoid corm rot.",
      nutrientManagement: "Apply well-rotted manure and organic compost pre-planting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Soybean",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 20, phosphorus: 30, potassium: 25 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "A protein-rich legume that boosts soil nitrogen through biological fixation.",
    growthParameters: {
      germinationPeriod: "5-7 days",
      maturity: "90-120 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "1.2-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Use integrated pest management to control soybean aphids.",
      diseaseManagement: "Rotate crops to prevent soybean rust and other fungal diseases.",
      nutrientManagement: "Apply phosphorus-rich fertilizers at planting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Chickpea",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 20, phosphorus: 25, potassium: 20 },
    idealRegions: ["Semi-arid regions"],
    notes: "A drought-tolerant legume that also contributes to improved soil structure via nitrogen fixation.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-110 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "1.0-1.2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for pod borers and aphids; use organic pesticides as needed.",
      diseaseManagement: "Practice crop rotation to reduce disease pressure.",
      nutrientManagement: "Enhance soil organic matter through compost application."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Lentil",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 15, phosphorus: 20, potassium: 15 },
    idealRegions: ["Central Kenya", "Semi-arid regions"],
    notes: "A cool-season legume that enriches soil nitrogen while providing a protein-rich crop.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "80-100 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "0.8-1.0 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control aphids and weevils with organic methods.",
      diseaseManagement: "Ensure proper spacing to minimize fungal issues.",
      nutrientManagement: "Apply organic compost to supplement nitrogen fixation."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Oats",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Cool highland regions"],
    notes: "Suited to cooler climates and well-drained soils, oats provide a healthy cereal crop option.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "September - November"
    },
    yieldPotential: "1.5-2.0 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Manage oat aphids and cutworms with organic insecticides.",
      diseaseManagement: "Prevent root rot by avoiding waterlogging.",
      nutrientManagement: "Use balanced fertilizers to promote growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Rapeseed",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 60, phosphorus: 45, potassium: 50 },
    idealRegions: ["Cool highland regions"],
    notes: "An oilseed crop requiring cool climates and well-drained soils for optimum oil production.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "100-120 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "August - September"
    },
    yieldPotential: "2-3 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and flea beetles; use integrated pest management.",
      diseaseManagement: "Practice proper field hygiene to prevent fungal diseases.",
      nutrientManagement: "Supplement with phosphorus and potassium during early growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Mustard",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Semi-arid and temperate regions"],
    notes: "A fast-growing crop useful as a cover crop and for oil production; thrives with minimal inputs.",
    growthParameters: {
      germinationPeriod: "5-7 days",
      maturity: "60-80 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control aphids and flea beetles with organic insecticides.",
      diseaseManagement: "Practice crop rotation to prevent downy mildew.",
      nutrientManagement: "Apply organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Pumpkin",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Requires rich, well-drained soils and ample moisture to produce high yields of fruit.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "1-2 m apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "10-12 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for squash bugs and aphids; use biological controls.",
      diseaseManagement: "Ensure proper spacing to prevent powdery mildew.",
      nutrientManagement: "Apply compost and balanced fertilizers at fruit set."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Strawberry",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Cool highland regions"],
    notes: "Requires well-drained, slightly acidic soils and benefits from raised beds for optimal fruit quality.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "4-6 weeks after flowering",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "September - November"
    },
    yieldPotential: "10-15 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Manage aphids and mites with organic insecticides.",
      diseaseManagement: "Use fungicides to control gray mold and powdery mildew.",
      nutrientManagement: "Apply compost and balanced fertilizers during fruiting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Moringa",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 30, phosphorus: 20, potassium: 25 },
    idealRegions: ["Semi-arid and tropical regions"],
    notes: "Highly nutritious and drought-resistant, Moringa adapts well to diverse soil conditions.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "80-90 days",
      plantSpacing: "1-2 m apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "2-3 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control leaf-eating insects with biopesticides.",
      diseaseManagement: "Ensure proper spacing to minimize fungal issues.",
      nutrientManagement: "Apply compost and organic fertilizers to boost growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Ginger",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 80, phosphorus: 60, potassium: 70 },
    idealRegions: ["Tropical regions"],
    notes: "Ginger thrives in warm, humid conditions with well-drained, loamy soils enriched with organic matter.",
    growthParameters: {
      germinationPeriod: "10-14 days",
      maturity: "8-10 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "12-15 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control root knot nematodes with organic amendments.",
      diseaseManagement: "Prevent fungal infections with proper spacing and timely fungicide applications.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Turmeric",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Tropical regions"],
    notes: "Requires warm temperatures and rich, well-drained soils with high organic content for vibrant rhizome development.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "8-10 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "10-12 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for leaf hoppers and aphids; use organic pesticides as required.",
      diseaseManagement: "Ensure good drainage to prevent fungal diseases.",
      nutrientManagement: "Apply compost and balanced fertilizers during growth phases."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Vanilla",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Tropical highlands"],
    notes: "Requires a humid, tropical environment with well-drained, organic-rich soils and proper support structures.",
    growthParameters: {
      germinationPeriod: "Varies (propagation via cuttings)",
      maturity: "3-4 years",
      plantSpacing: "2-3 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for stem borers and mites; use biological controls where possible.",
      diseaseManagement: "Maintain proper canopy and support structures to reduce disease risks.",
      nutrientManagement: "Regularly apply organic compost and micronutrients."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Pomegranate",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Semi-arid regions", "Central Kenya"],
    notes: "Drought-tolerant and well-adapted to arid climates; requires moderate water and well-drained soils.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "3-5 years",
      plantSpacing: "4-5 m apart",
      plantingSeason: "Year-round (main planting during rainy season)"
    },
    yieldPotential: "10-12 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for pomegranate butterfly and scale insects; use organic treatments.",
      diseaseManagement: "Apply copper-based fungicides if fungal infections occur.",
      nutrientManagement: "Incorporate compost and balanced fertilizers during fruit development."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Guava",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Coastal Kenya", "Western Kenya"],
    notes: "Thrives in tropical climates with well-drained, slightly acidic soils; optimal fruiting requires proper pruning.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "2-4 years",
      plantSpacing: "5-6 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "25 minutes" }
        : { frequency: "Every 15 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for fruit flies and scale insects; use integrated pest management.",
      diseaseManagement: "Prune to improve air circulation and reduce fungal risks.",
      nutrientManagement: "Apply organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Lime",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Coastal Kenya", "Western Kenya"],
    notes: "Requires well-drained soils and benefits from regular organic amendments to support fruit quality.",
    growthParameters: {
      germinationPeriod: "Varies (via seeds or cuttings)",
      maturity: "3-5 years",
      plantSpacing: "4-5 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "10-12 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and citrus scale; use organic treatments.",
      diseaseManagement: "Prevent citrus canker with proper sanitation and pruning.",
      nutrientManagement: "Apply balanced fertilizers and organic compost regularly."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cashew",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 60, phosphorus: 45, potassium: 50 },
    idealRegions: ["Coastal Kenya", "Tropical regions"],
    notes: "Well-adapted to tropical climates and sandy, well-drained soils.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "3-5 years",
      plantSpacing: "6-8 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and borers; use organic pesticides as needed.",
      diseaseManagement: "Ensure proper spacing and sanitation to prevent fungal infections.",
      nutrientManagement: "Apply organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cocoa",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Tropical regions"],
    notes: "Requires humid, tropical conditions with fertile, well-drained soils for optimal pod development.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "3-5 years",
      plantSpacing: "3-4 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control cocoa pod borer using integrated pest management.",
      diseaseManagement: "Monitor for black pod disease and apply fungicides if needed.",
      nutrientManagement: "Incorporate organic matter and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Date Palm",
    idealPhRange: [7.0, 8.5],
    nutrientRequirements: { nitrogen: 80, phosphorus: 60, potassium: 70 },
    idealRegions: ["Arid and semi-arid regions"],
    notes: "Thrives in hot, arid climates and sandy, well-drained soils.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "4-8 years",
      plantSpacing: "8-10 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for red palm weevil; use pheromone traps and organic controls.",
      diseaseManagement: "Apply fungicides to prevent fungal infections.",
      nutrientManagement: "Regularly apply organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Quinoa",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Highlands", "Central Kenya"],
    notes: "An emerging alternative crop with high nutritional value, best suited for cooler highland conditions.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "25-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "1.5-2.0 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and caterpillars; use biopesticides if infestations occur.",
      diseaseManagement: "Ensure proper spacing and drainage to prevent root rot.",
      nutrientManagement: "Incorporate well-rotted compost and balanced N-P-K fertilizer during early growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Amaranth",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "A resilient leafy vegetable with high nutritional value and adaptability to varied soils.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "60-70 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "May - July"
    },
    yieldPotential: "2-3 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for leaf miners and aphids; use organic controls.",
      diseaseManagement: "Ensure proper spacing and timely weeding to prevent fungal issues.",
      nutrientManagement: "Apply compost and organic fertilizers at planting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Rice",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 80, phosphorus: 50, potassium: 60 },
    idealRegions: ["Mwea Irrigation Scheme", "Eastern Kenya"],
    notes: "Rice cultivation in Kenya requires controlled irrigation and fertile, clayey soils.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "100-120 days",
      plantSpacing: "20-25 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "4-6 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control stem borers and planthoppers using integrated pest management.",
      diseaseManagement: "Prevent rice blast by managing field humidity and using resistant varieties.",
      nutrientManagement: "Apply nitrogen-rich fertilizers at the tillering stage."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Mwea Irrigation Scheme, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Wheat",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 90, phosphorus: 60, potassium: 70 },
    idealRegions: ["Highlands", "Central Kenya"],
    notes: "Wheat requires cool, temperate climates with well-drained, fertile soils for high grain production.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "120-150 days",
      plantSpacing: "15-20 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "3-4 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and sawfly larvae; apply organic pesticides as needed.",
      diseaseManagement: "Rotate crops to reduce rust and mildew incidences.",
      nutrientManagement: "Use compost and balanced N-P-K fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Barley",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 80, phosphorus: 50, potassium: 60 },
    idealRegions: ["Cool highland regions"],
    notes: "Best suited to cooler climates and well-drained soils with moderate fertility.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-110 days",
      plantSpacing: "15-20 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: "2-3 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and grain weevils; use organic pesticides if needed.",
      diseaseManagement: "Rotate crops to prevent fungal diseases like powdery mildew.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Sugarcane",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 120, phosphorus: 70, potassium: 80 },
    idealRegions: ["Western Kenya", "Central Kenya"],
    notes: "A long-season crop requiring high fertility soils and controlled irrigation.",
    growthParameters: {
      germinationPeriod: "Varies (via setts)",
      maturity: "12-18 months",
      plantSpacing: "50-60 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "80-100 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 6
        ? { frequency: "Weekly", duration: "40 minutes" }
        : { frequency: "Every 10 Days", duration: "40 minutes" };
    },
    managementPractices: {
      pestManagement: "Control borers and spittlebugs using integrated pest management.",
      diseaseManagement: "Monitor for smut and mosaic viruses; apply fungicides as needed.",
      nutrientManagement: "Incorporate high amounts of organic matter and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cotton",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 80, phosphorus: 60, potassium: 70 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "Thrives in warm climates with well-drained sandy loam soils and moderate fertility.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "150-180 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - April"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for boll weevils and aphids; employ integrated pest management.",
      diseaseManagement: "Ensure proper spacing to reduce humidity and fungal infections.",
      nutrientManagement: "Apply balanced fertilizers along with organic amendments."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Avocado",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Coastal Kenya"],
    notes: "Requires well-drained soils and benefits from organic amendments for improved fruit quality.",
    growthParameters: {
      germinationPeriod: "Varies (via seeds or grafting)",
      maturity: "3-5 years",
      plantSpacing: "6-8 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "5-7 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for avocado thrips and scale insects; use organic controls.",
      diseaseManagement: "Apply copper-based fungicides to control anthracnose and root rot.",
      nutrientManagement: "Regularly incorporate organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Passion Fruit",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Central Kenya", "Western Kenya"],
    notes: "Thrives in well-drained, slightly acidic soils; requires support for climbing vines.",
    growthParameters: {
      germinationPeriod: "Varies (via cuttings)",
      maturity: "1-2 years",
      plantSpacing: "3-4 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "10-15 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "25 minutes" }
        : { frequency: "Every 15 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for fruit flies and aphids; apply integrated pest management.",
      diseaseManagement: "Ensure proper pruning to reduce fungal risks.",
      nutrientManagement: "Apply organic compost and balanced fertilizers during fruit set."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Pineapple",
    idealPhRange: [4.5, 6.5],
    nutrientRequirements: { nitrogen: 90, phosphorus: 60, potassium: 70 },
    idealRegions: ["Coastal Kenya", "Western Kenya"],
    notes: "Thrives in well-drained, sandy soils rich in organic matter; ideal for tropical fruit production.",
    growthParameters: {
      germinationPeriod: "Varies (via suckers)",
      maturity: "18-24 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "20-25 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for mealybugs and scale insects; apply organic pesticides.",
      diseaseManagement: "Ensure proper drainage to avoid root rot.",
      nutrientManagement: "Apply balanced fertilizers and organic compost during growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Papaya",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Coastal Kenya", "Tropical regions"],
    notes: "Thrives in warm climates with well-drained soils and requires regular fertilization for optimal fruit set.",
    growthParameters: {
      germinationPeriod: "10-14 days",
      maturity: "9-12 months",
      plantSpacing: "2-3 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for papaya fruit fly and aphids; use integrated pest management.",
      diseaseManagement: "Prevent papaya ringspot virus with resistant varieties and sanitation.",
      nutrientManagement: "Regularly apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Groundnuts (Peanuts)",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 25, phosphorus: 20, potassium: 25 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "Improves soil fertility via nitrogen fixation; requires sandy, well-drained soils.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-110 days",
      plantSpacing: "15-20 cm apart",
      plantingSeason: "April - June"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and pod borers; use organic control methods.",
      diseaseManagement: "Practice crop rotation to minimize fungal infections.",
      nutrientManagement: "Incorporate compost and balanced fertilizers to support growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Okra",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 50, phosphorus: 40, potassium: 45 },
    idealRegions: ["Central Kenya", "Eastern Kenya"],
    notes: "Thrives in warm climates and well-drained soils with a short growing period.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "50-60 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "4-5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for aphids and whiteflies; apply organic pesticides if necessary.",
      diseaseManagement: "Ensure proper spacing to reduce fungal risks.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Eggplant (Brinjal)",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 55, phosphorus: 40, potassium: 45 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Requires warm temperatures and fertile, well-drained soils for optimum fruit set.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "70-90 days",
      plantSpacing: "40-50 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3.5
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for fruit borers and aphids; use organic insecticides.",
      diseaseManagement: "Ensure proper spacing and use fungicides to manage blight.",
      nutrientManagement: "Apply balanced fertilizers during early growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cabbage",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 80, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Requires fertile, well-drained soils with regular nitrogen supplementation for head formation.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "70-90 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: "20-25 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Control cabbage worms and aphids using organic pesticides.",
      diseaseManagement: "Prevent clubroot by ensuring proper pH and drainage.",
      nutrientManagement: "Apply nitrogen-rich fertilizers and compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO, Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cauliflower",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 90, phosphorus: 60, potassium: 70 },
    idealRegions: ["Highlands", "Central Kenya"],
    notes: "Requires cool, temperate conditions and fertile, well-drained soils for compact head formation.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "80-100 days",
      plantSpacing: "40-50 cm apart",
      plantingSeason: "September - November"
    },
    yieldPotential: "8-10 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Control aphids and caterpillars using organic insecticides.",
      diseaseManagement: "Ensure proper air circulation to prevent fungal infections.",
      nutrientManagement: "Apply balanced fertilizers and compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Watermelon",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Eastern Kenya"],
    notes: "Requires warm temperatures and well-drained sandy loam soils for optimal fruit size and sweetness.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "80-90 days",
      plantSpacing: "1-2 m apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control aphids and cucumber beetles with organic methods.",
      diseaseManagement: "Prevent Fusarium wilt with crop rotation and sanitation.",
      nutrientManagement: "Apply balanced fertilizers and organic compost during growth."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Zucchini (Courgette)",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 60, phosphorus: 40, potassium: 50 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Thrives in warm, fertile soils with a good organic matter content for vigorous vine growth and fruit set.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "50-60 days",
      plantSpacing: "50-60 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "20-25 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Control squash bugs and aphids with organic pesticides.",
      diseaseManagement: "Ensure proper ventilation to prevent powdery mildew.",
      nutrientManagement: "Apply balanced fertilizers and organic compost regularly."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Spinach",
    idealPhRange: [6.0, 7.0],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "A fast-growing leafy green that thrives in cool, moist conditions.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "30-40 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "3-4 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for leaf miners and aphids; use organic controls.",
      diseaseManagement: "Ensure proper spacing to reduce fungal infections.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Maize",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 100, phosphorus: 60, potassium: 70 },
    idealRegions: ["Eastern Kenya", "Western Kenya"],
    notes: "Requires fertile, well-drained soils and consistent moisture for high grain yields.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "100-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "4-6 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control stem borers and armyworms using integrated pest management.",
      diseaseManagement: "Prevent maize streak virus with resistant varieties and crop rotation.",
      nutrientManagement: "Apply nitrogen-rich fertilizers at early growth stages."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Beans",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 30, phosphorus: 25, potassium: 30 },
    idealRegions: ["Central Kenya", "Western Kenya"],
    notes: "A legume that fixes atmospheric nitrogen and requires well-drained soils.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "60-80 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Control bean weevils and aphids with organic methods.",
      diseaseManagement: "Practice crop rotation to prevent bean rust and mildew.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Sorghum",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "A drought-tolerant cereal well-suited for low-fertility soils.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-110 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "June - August"
    },
    yieldPotential: "2-3 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Control sorghum midge and aphids with integrated pest management.",
      diseaseManagement: "Ensure proper spacing to avoid fungal issues.",
      nutrientManagement: "Enhance soil fertility with organic matter."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Millet",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 35, phosphorus: 30, potassium: 35 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "A resilient crop that thrives in harsh, low-fertility soils with minimal inputs.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "70-90 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "June - August"
    },
    yieldPotential: "1-1.5 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "20 minutes" }
        : { frequency: "Every 10 Days", duration: "20 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for millet head miners and aphids; use organic pesticides if needed.",
      diseaseManagement: "Practice crop rotation to prevent fungal diseases.",
      nutrientManagement: "Enhance soil fertility with organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "KALRO"
    }
  },
  {
    crop: "Cowpeas",
    idealPhRange: [6.0, 7.5],
    nutrientRequirements: { nitrogen: 25, phosphorus: 20, potassium: 25 },
    idealRegions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "A drought-tolerant legume that improves soil nitrogen content.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "60-80 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "June - August"
    },
    yieldPotential: "1-1.2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 2.5
        ? { frequency: "Weekly", duration: "15 minutes" }
        : { frequency: "Every 10 Days", duration: "15 minutes" };
    },
    managementPractices: {
      pestManagement: "Control aphids and pod borers with integrated pest management.",
      diseaseManagement: "Ensure good drainage to prevent fungal diseases.",
      nutrientManagement: "Use organic compost to enhance soil fertility."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Sweet Potatoes",
    idealPhRange: [5.5, 6.8],
    nutrientRequirements: { nitrogen: 40, phosphorus: 30, potassium: 35 },
    idealRegions: ["Eastern Kenya", "Western Kenya"],
    notes: "Adaptable to marginal soils, sweet potatoes require well-drained sandy loams for optimal tuber development.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "10-15 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control sweet potato weevils with organic pesticides.",
      diseaseManagement: "Prevent fungal infections by ensuring proper spacing and rotation.",
      nutrientManagement: "Apply compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Cassava",
    idealPhRange: [5.5, 7.0],
    nutrientRequirements: { nitrogen: 30, phosphorus: 20, potassium: 25 },
    idealRegions: ["Eastern Kenya", "Western Kenya"],
    notes: "A drought-tolerant root crop that grows in poor soils with minimal inputs.",
    growthParameters: {
      germinationPeriod: "Varies (via stem cuttings)",
      maturity: "9-12 months",
      plantSpacing: "1 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 3
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for cassava mealybug and whiteflies; use organic controls.",
      diseaseManagement: "Prevent cassava mosaic disease with resistant varieties.",
      nutrientManagement: "Apply organic manure and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Bananas",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 80, phosphorus: 60, potassium: 70 },
    idealRegions: ["Central Kenya", "Western Kenya"],
    notes: "Require rich, well-drained soils and consistent irrigation for optimum fruit production.",
    growthParameters: {
      germinationPeriod: "Varies (via suckers)",
      maturity: "9-12 months",
      plantSpacing: "2-3 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "30-40 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 6
        ? { frequency: "Weekly", duration: "40 minutes" }
        : { frequency: "Every 10 Days", duration: "40 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for banana weevils and nematodes; use organic methods.",
      diseaseManagement: "Apply fungicides to control black sigatoka and Panama disease.",
      nutrientManagement: "Regularly incorporate organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Coffee",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 90, phosphorus: 60, potassium: 70 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Thrives in high-altitude, well-drained volcanic soils with moderate rainfall.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "3-4 years",
      plantSpacing: "2-3 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "30 minutes" }
        : { frequency: "Every 15 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for coffee berry borer and leaf miners; apply integrated pest management.",
      diseaseManagement: "Prevent coffee leaf rust with proper pruning and fungicides.",
      nutrientManagement: "Apply organic compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Tea",
    idealPhRange: [4.5, 5.5],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Kericho", "Central Kenya"],
    notes: "Requires acidic, well-drained soils and cool, moist climates for optimal leaf quality.",
    growthParameters: {
      germinationPeriod: "Varies",
      maturity: "3-5 years",
      plantSpacing: "1-1.5 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: "1-2 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Every 10 Days", duration: "25 minutes" }
        : { frequency: "Every 15 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for tea mosquito bugs and mites; use organic pesticides.",
      diseaseManagement: "Prevent blister blight through proper canopy management and fungicides.",
      nutrientManagement: "Regularly apply compost and balanced fertilizers."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Tomatoes",
    idealPhRange: [6.0, 6.8],
    nutrientRequirements: { nitrogen: 70, phosphorus: 50, potassium: 60 },
    idealRegions: ["Central Kenya", "Highlands"],
    notes: "Requires warm, sunny conditions and well-drained, organically rich soils for optimum fruiting.",
    growthParameters: {
      germinationPeriod: "5-7 days",
      maturity: "60-80 days",
      plantSpacing: "40-50 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: "20-25 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 4
        ? { frequency: "Weekly", duration: "25 minutes" }
        : { frequency: "Every 10 Days", duration: "25 minutes" };
    },
    managementPractices: {
      pestManagement: "Monitor for tomato fruit worms and aphids; use organic pesticides.",
      diseaseManagement: "Prevent blight with proper staking and fungicide applications.",
      nutrientManagement: "Apply balanced fertilizers and organic compost during fruiting."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  },
  {
    crop: "Potatoes",
    idealPhRange: [5.5, 6.5],
    nutrientRequirements: { nitrogen: 80, phosphorus: 60, potassium: 70 },
    idealRegions: ["Highlands", "Central Kenya"],
    notes: "Requires cool, well-drained, loamy soils and consistent moisture for tuber development.",
    growthParameters: {
      germinationPeriod: "7-10 days",
      maturity: "90-120 days",
      plantSpacing: "25-30 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: "15-20 tonnes/ha under optimal conditions",
    irrigationAdjustment: (weather: WeatherData): IrrigationRecommendation => {
      return weather.precipitation < 5
        ? { frequency: "Weekly", duration: "30 minutes" }
        : { frequency: "Every 10 Days", duration: "30 minutes" };
    },
    managementPractices: {
      pestManagement: "Control Colorado potato beetle and aphids using organic methods.",
      diseaseManagement: "Prevent late blight through crop rotation and fungicides.",
      nutrientManagement: "Apply balanced N-P-K fertilizers and organic compost."
    },
    metadata: {
      createdBy: "Agronomic Data Team",
      lastUpdated: new Date().toISOString(),
      source: "Kenya Agricultural Extension Service"
    }
  }
];

// Main function to analyze soil data and provide recommendations
export const analyzeSoilData = (
  ph: number,
  nutrients: { nitrogen: number; phosphorus: number; potassium: number },
  weather: WeatherData
) => {
  // Filter crops based on pH
  const suitableCrops = additionalCropsForKenya.filter(crop => {
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
