import { useState } from "react";
import { TestTube, FileText } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "./ui/use-toast";

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

  const handleNumberInput = (value: string, field: string) => {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) return; // Prevent NaN values

    if (field === 'ph') {
      if (numberValue >= 0 && numberValue <= 14) {
        setSoilData(prev => ({ ...prev, ph: numberValue }));
      }
    } else {
      setSoilData(prev => ({
        ...prev,
        nutrients: {
          ...prev.nutrients,
          [field]: Math.max(0, numberValue) // Ensure non-negative values
        }
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all values are numbers and within range
    if (
      isNaN(soilData.ph) || 
      soilData.ph < 0 || 
      soilData.ph > 14 ||
      isNaN(soilData.nutrients.nitrogen) ||
      isNaN(soilData.nutrients.phosphorus) ||
      isNaN(soilData.nutrients.potassium)
    ) {
      toast({
        title: "Invalid Input",
        description: "Please ensure all values are valid numbers within range",
        variant: "destructive"
      });
      return;
    }

    onSubmit(soilData);
    toast({
      title: "Success",
      description: "Soil test results submitted successfully"
    });
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
            <Label htmlFor="ph">Soil pH Level (0-14)</Label>
            <Input
              id="ph"
              type="number"
              step="0.1"
              min="0"
              max="14"
              value={soilData.ph}
              onChange={(e) => handleNumberInput(e.target.value, 'ph')}
              placeholder="Enter pH level (0-14)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nitrogen">Nitrogen (N) ppm</Label>
              <Input
                id="nitrogen"
                type="number"
                min="0"
                value={soilData.nutrients.nitrogen}
                onChange={(e) => handleNumberInput(e.target.value, 'nitrogen')}
                placeholder="N content (ppm)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phosphorus">Phosphorus (P) ppm</Label>
              <Input
                id="phosphorus"
                type="number"
                min="0"
                value={soilData.nutrients.phosphorus}
                onChange={(e) => handleNumberInput(e.target.value, 'phosphorus')}
                placeholder="P content (ppm)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="potassium">Potassium (K) ppm</Label>
              <Input
                id="potassium"
                type="number"
                min="0"
                value={soilData.nutrients.potassium}
                onChange={(e) => handleNumberInput(e.target.value, 'potassium')}
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