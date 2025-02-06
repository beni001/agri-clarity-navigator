
import { useState } from "react";
import { TestTube, FileText } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface SoilTestData {
  ph: number;
  nutrients: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
}

export const SoilTestResults = ({
  onSubmit
}: {
  onSubmit: (data: SoilTestData) => void;
}) => {
  const [soilData, setSoilData] = useState<SoilTestData>({
    ph: 7.0,
    nutrients: {
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(soilData);
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="flex items-center space-x-3">
        <TestTube className="h-6 w-6 text-primary" />
        <div>
          <h3 className="text-xl font-semibold">Soil Test Results</h3>
          <p className="text-sm text-secondary">Enter your soil test measurements</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ph">Soil pH Level</Label>
            <Input
              id="ph"
              type="number"
              step="0.1"
              min="0"
              max="14"
              value={soilData.ph}
              onChange={(e) => setSoilData({ ...soilData, ph: parseFloat(e.target.value) })}
              placeholder="Enter pH level (0-14)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nitrogen">Nitrogen (N)</Label>
              <Input
                id="nitrogen"
                type="number"
                min="0"
                value={soilData.nutrients.nitrogen}
                onChange={(e) => setSoilData({
                  ...soilData,
                  nutrients: {
                    ...soilData.nutrients,
                    nitrogen: parseInt(e.target.value)
                  }
                })}
                placeholder="N content (ppm)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phosphorus">Phosphorus (P)</Label>
              <Input
                id="phosphorus"
                type="number"
                min="0"
                value={soilData.nutrients.phosphorus}
                onChange={(e) => setSoilData({
                  ...soilData,
                  nutrients: {
                    ...soilData.nutrients,
                    phosphorus: parseInt(e.target.value)
                  }
                })}
                placeholder="P content (ppm)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="potassium">Potassium (K)</Label>
              <Input
                id="potassium"
                type="number"
                min="0"
                value={soilData.nutrients.potassium}
                onChange={(e) => setSoilData({
                  ...soilData,
                  nutrients: {
                    ...soilData.nutrients,
                    potassium: parseInt(e.target.value)
                  }
                })}
                placeholder="K content (ppm)"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          <FileText className="mr-2 h-4 w-4" />
          Generate Recommendations
        </Button>
      </form>
    </div>
  );
};
