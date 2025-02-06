
export interface CropRecommendation {
  name: string;
  phRange: [number, number];
  nutrients: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  regions: string[];
  notes: string;
  growth: {
    germinationPeriod: string;
    maturityPeriod: string;
    plantSpacing: string;
    plantingSeason: string;
  };
  yieldPotential: {
    amount: number;
    unit: string;
  };
  managementPractices: {
    pestControl: string;
    diseaseManagement: string;
    nutrientManagement: string;
  };
  metadata: {
    source: string;
    lastUpdated: string;
  };
}

export type WeatherData = {
  precipitation: number;
  temperature: number;
  humidity: number;
  windSpeed: number;
};

export type IrrigationRecommendation = {
  frequency: string;
  duration: string;
};
