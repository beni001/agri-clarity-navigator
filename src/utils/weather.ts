import { supabase } from '@/lib/supabase';

export interface WeatherData {
  temperature: number;
  humidity: number;
  cloudCover: number;
  uvIndex: string;
}

export const getWeatherData = async (): Promise<WeatherData> => {
  // Return default values for now until API integration
  return {
    temperature: 24,
    humidity: 65,
    cloudCover: 30,
    uvIndex: 'Moderate',
  };
};

const getUVIndexCategory = (uvi: number): string => {
  if (uvi <= 2) return 'Low';
  if (uvi <= 5) return 'Moderate';
  if (uvi <= 7) return 'High';
  if (uvi <= 10) return 'Very High';
  return 'Extreme';
};