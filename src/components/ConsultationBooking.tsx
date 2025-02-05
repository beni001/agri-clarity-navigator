import { Calendar, Clock, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ConsultationBooking = () => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 fade-in">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Book an Expert Consultation</h3>
        <p className="text-secondary">Get personalized advice from agricultural experts</p>
      </div>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-secondary" />
            <Input className="pl-9" placeholder="Your name" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-secondary" />
              <Input className="pl-9" type="date" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-secondary" />
              <Input className="pl-9" type="time" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Consultation Topic</label>
          <Textarea 
            placeholder="Briefly describe what you'd like to discuss..."
            className="min-h-[100px]"
          />
        </div>
        
        <Button className="w-full">
          Schedule Consultation
        </Button>
      </form>
    </div>
  );
};