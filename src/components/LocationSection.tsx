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
  
  // Map card hover state
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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

  const handleMapMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  // Google Maps embed URL for the address
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus";

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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Left Side */}
          <div className="bg-card rounded-xl p-8 shadow-soft h-full">
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

          {/* Map Card with Contact Info Overlay - Right Side */}
          <div 
            className="relative h-full min-h-[500px] rounded-xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsMapHovered(true)}
            onMouseLeave={() => setIsMapHovered(false)}
            onMouseMove={handleMapMouseMove}
            style={{
              transform: isMapHovered
                ? `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 8}deg) rotateX(${(0.5 - mousePosition.y) * 8}deg) translateY(-8px)`
                : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Glowing border effect */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: isMapHovered
                  ? `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.3), transparent 40%)`
                  : 'none',
              }}
            />
            
            {/* Border glow */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                boxShadow: isMapHovered
                  ? `inset 0 0 0 1px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.2)`
                  : 'none',
              }}
            />

            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.1) 45%, hsl(var(--primary) / 0.2) 50%, hsl(var(--primary) / 0.1) 55%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: isMapHovered ? 'shimmer 2s infinite' : 'none',
              }}
            />

            {/* Google Maps Embed */}
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />

            {/* Glassmorphism Contact Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
              <div 
                className="backdrop-blur-xl bg-card/80 rounded-xl p-6 shadow-soft border border-border/50"
                style={{
                  backdropFilter: 'blur(20px)',
                }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">Address</p>
                      <p className="font-body text-sm text-muted-foreground">
                        123 Sunshine Boulevard, Suite 200
                        <br />
                        Sunnyville, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground text-sm">Phone</p>
                        <a
                          href="tel:555-123-4567"
                          className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Printer className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground text-sm">Fax</p>
                        <p className="font-body text-sm text-muted-foreground">
                          (555) 123-4568
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://maps.google.com/?q=123+Sunshine+Boulevard+Suite+200+Sunnyville+CA+90210', '_blank')}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
