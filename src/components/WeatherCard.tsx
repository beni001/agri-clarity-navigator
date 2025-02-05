import { Cloud, Droplets, Sun, Thermometer } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "@/utils/weather";
import { useToast } from "@/hooks/use-toast";

export const WeatherCard = () => {
  const { toast } = useToast();

  const { data: weatherData, isLoading } = useQuery({
    queryKey: ['weather'],
    queryFn: getWeatherData,
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to fetch weather data. Showing default values.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="glass-card rounded-2xl p-6 space-y-4 fade-in">
      <h3 className="text-xl font-semibold">Current Weather</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-3">
          <Thermometer className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Temperature</p>
            <p className="font-medium">{isLoading ? "Loading..." : `${weatherData?.temperature}°C`}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Droplets className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Humidity</p>
            <p className="font-medium">{isLoading ? "Loading..." : `${weatherData?.humidity}%`}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Cloud className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Cloud Cover</p>
            <p className="font-medium">{isLoading ? "Loading..." : `${weatherData?.cloudCover}%`}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Sun className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">UV Index</p>
            <p className="font-medium">{isLoading ? "Loading..." : weatherData?.uvIndex}</p>
          </div>
        </div>
      </div>
    </div>
  );
};