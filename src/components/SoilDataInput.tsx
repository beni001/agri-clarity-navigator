import { MapPin } from "lucide-react";

export const SoilDataInput = () => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 max-w-2xl mx-auto fade-in">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Soil Analysis</h3>
        <p className="text-secondary">Enter your location to get soil data analysis</p>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full px-4 py-3 pl-10 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
        </div>
        
        <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          Analyze Soil Data
        </button>
      </div>
    </div>
  );
};