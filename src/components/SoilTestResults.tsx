import { useState } from "react";
import { TestTube, FileText } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
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

  const handlePhChange = (value: number[]) => {
    setSoilData(prev => ({ ...prev, ph: value[0] }));
  };

  const handleNutrientChange = (value: string, field: keyof typeof soilData.nutrients) => {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) return;

    setSoilData(prev => ({
      ...prev,
      nutrients: {
        ...prev.nutrients,
        [field]: Math.max(0, numberValue)
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      soilData.ph < 0 || 
      soilData.ph > 14 ||
      Object.values(soilData.nutrients).some(value => isNaN(value))
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ph">Soil pH Level: {soilData.ph.toFixed(1)}</Label>
            <Slider
              id="ph"
              min={0}
              max={14}
              step={0.1}
              value={[soilData.ph]}
              onValueChange={handlePhChange}
              className="py-4"
            />
            <p className="text-sm text-muted-foreground">
              Acidic (0-6) | Neutral (7) | Alkaline (8-14)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nitrogen">Nitrogen (N) ppm</Label>
              <Input
                id="nitrogen"
                type="number"
                min="0"
                value={soilData.nutrients.nitrogen}
                onChange={(e) => handleNutrientChange(e.target.value, 'nitrogen')}
                placeholder="N content"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phosphorus">Phosphorus (P) ppm</Label>
              <Input
                id="phosphorus"
                type="number"
                min="0"
                value={soilData.nutrients.phosphorus}
                onChange={(e) => handleNutrientChange(e.target.value, 'phosphorus')}
                placeholder="P content"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="potassium">Potassium (K) ppm</Label>
              <Input
                id="potassium"
                type="number"
                min="0"
                value={soilData.nutrients.potassium}
                onChange={(e) => handleNutrientChange(e.target.value, 'potassium')}
                placeholder="K content"
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