export interface WeatherData {
  temperature: number;
  humidity: number;
  cloudCover: number;
  uvIndex: string;
}

export const getWeatherData = async (): Promise<WeatherData> => {
  try {
    const { data: config, error: configError } = await supabase
      .from('config')
      .select('openweather_api_key')
      .single();

    if (configError) throw configError;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=${config.openweather_api_key}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      cloudCover: data.clouds.all,
      uvIndex: getUVIndexCategory(data.uvi || 5), // Default to moderate if no UV data
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Return default values if there's an error
    return {
      temperature: 24,
      humidity: 65,
      cloudCover: 30,
      uvIndex: 'Moderate',
    };
  }
};

const getUVIndexCategory = (uvi: number): string => {
  if (uvi <= 2) return 'Low';
  if (uvi <= 5) return 'Moderate';
  if (uvi <= 7) return 'High';
  if (uvi <= 10) return 'Very High';
  return 'Extreme';
};