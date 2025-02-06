
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();
  
  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Here you would implement the email sending logic
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setShowContactForm(false);
  };

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    window.open("https://wa.me/+254XXXXXXXXX", "_blank");
  };

  return (
    <footer className="bg-[#E2D1C3] mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C4033]">Contact Us</h3>
            <Button 
              variant="outline" 
              className="w-full bg-[#8B7355] text-white hover:bg-[#6F4E37]"
              onClick={() => setShowContactForm(true)}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C4033]">Quick Links</h3>
            <ul className="space-y-2 text-[#6F4E37]">
              <li>
                <Button variant="link" className="text-[#8B7355] hover:text-[#6F4E37]">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-[#8B7355] hover:text-[#6F4E37]">
                  Services
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-[#8B7355] hover:text-[#6F4E37]">
                  Resources
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C4033]">Connect</h3>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full bg-[#25D366] text-white hover:bg-[#128C7E]"
                onClick={handleWhatsAppClick}
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-[#8B7355] text-white hover:bg-[#6F4E37]"
                onClick={() => setShowContactForm(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>

        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full space-y-4">
              <h3 className="text-xl font-semibold text-[#5C4033]">Contact Us</h3>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#6F4E37]">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-[#8B7355] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6F4E37]">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-[#8B7355] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6F4E37]">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-[#8B7355] shadow-sm"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#8B7355] text-white hover:bg-[#6F4E37]"
                  >
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-[#8B7355] text-center text-[#6F4E37]">
          <p>&copy; {new Date().getFullYear()} Agri-Clarity Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
