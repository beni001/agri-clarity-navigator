import { Cloud, Droplets, Sun, Thermometer } from "lucide-react";

export const WeatherCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-4 fade-in">
      <h3 className="text-xl font-semibold">Current Weather</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-3">
          <Thermometer className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Temperature</p>
            <p className="font-medium">24°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Droplets className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Humidity</p>
            <p className="font-medium">65%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Cloud className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">Cloud Cover</p>
            <p className="font-medium">30%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Sun className="h-5 w-5 text-secondary" />
          <div>
            <p className="text-sm text-secondary">UV Index</p>
            <p className="font-medium">Moderate</p>
          </div>
        </div>
      </div>
    </div>
  );
};