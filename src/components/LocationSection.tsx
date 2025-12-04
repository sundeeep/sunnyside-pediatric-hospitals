import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Printer, Navigation, Send, User, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LocationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-cream-dark">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Contact Us
          </h2>
          <p className="font-body text-body text-muted-foreground">
            Get in touch or visit us. We're here to help your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card rounded-xl p-8 shadow-soft">
            <h3 className="font-heading text-card-title text-foreground mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Request an Appointment
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 h-12 bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 h-12 bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 h-12 bg-background border-border focus:border-primary"
                />
              </div>
              
              <Textarea
                name="message"
                placeholder="Tell us about your appointment needs..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-background border-border focus:border-primary resize-none"
              />
              
              <Button 
                type="submit" 
                variant="default" 
                className="w-full h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <h3 className="font-heading text-card-title text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground mb-1">
                    Address
                  </p>
                  <p className="font-body text-muted-foreground">
                    123 Sunshine Boulevard
                    <br />
                    Suite 200
                    <br />
                    Sunnyville, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:555-123-4567"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Printer className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground mb-1">
                    Fax
                  </p>
                  <p className="font-body text-muted-foreground">
                    (555) 123-4568
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" className="w-full">
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
