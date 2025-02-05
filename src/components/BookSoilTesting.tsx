import { Calendar, MapPin, Beaker } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const BookSoilTesting = () => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Book Soil Testing Service</h3>
        <p className="text-secondary">Get professional soil analysis for your farm</p>
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Testing Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-secondary" />
              <Input className="pl-9" placeholder="Enter farm location" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-secondary" />
              <Input className="pl-9" type="date" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Type of Analysis Needed</label>
          <div className="relative">
            <Beaker className="absolute left-3 top-3 h-4 w-4 text-secondary" />
            <Input 
              className="pl-9" 
              placeholder="e.g., Basic Soil Test, Comprehensive Analysis" 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Additional Notes</label>
          <Textarea 
            placeholder="Any specific concerns or requirements..."
            className="min-h-[100px]"
          />
        </div>
        
        <Button className="w-full">
          Schedule Soil Testing
        </Button>
      </form>
    </div>
  );
};