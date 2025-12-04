import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Printer, Navigation, Send, User, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.svg";

const schedule = [
  { day: "Sunday", hours: "Closed", open: null, close: null },
  { day: "Monday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Friday", hours: "8:00 AM – 4:00 PM", open: 8, close: 16 },
  { day: "Saturday", hours: "9:00 AM – 12:00 PM", open: 9, close: 12 },
];

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Office hours time tracking
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const today = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const dayIndex = currentTime.getDay();
  const todaySchedule = schedule[dayIndex];

  const getTimeRemaining = () => {
    if (!todaySchedule.open || !todaySchedule.close) return null;
    const now = currentHour + currentMinute / 60;
    if (now < todaySchedule.open) {
      const minutesUntilOpen = (todaySchedule.open - currentHour) * 60 - currentMinute;
      return { type: "opening", hours: Math.floor(minutesUntilOpen / 60), mins: minutesUntilOpen % 60 };
    }
    if (now >= todaySchedule.open && now < todaySchedule.close) {
      const minutesUntilClose = (todaySchedule.close - currentHour) * 60 - currentMinute;
      return { type: "closing", hours: Math.floor(minutesUntilClose / 60), mins: minutesUntilClose % 60 };
    }
    return { type: "closed", hours: 0, mins: 0 };
  };

  const timeRemaining = getTimeRemaining();

  const formatTimeRemaining = () => {
    if (!timeRemaining) return "Closed today";
    if (timeRemaining.type === "closed") return "Closed for today";
    const hoursText = timeRemaining.hours > 0 ? `${timeRemaining.hours}h ` : "";
    const minsText = `${timeRemaining.mins}m`;
    if (timeRemaining.type === "opening") return `Opens in ${hoursText}${minsText}`;
    return `${hoursText}${minsText} until closing`;
  };

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
    setMousePosition({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus";

  return (
    <footer className="bg-cream-dark">
      {/* Office Hours Section */}
      <div className="py-12 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-xl shadow-soft overflow-hidden">
              {dayOrder.map((dayName) => {
                const item = schedule.find((s) => s.day === dayName)!;
                const isToday = dayName === today;
                const isClosed = item.hours === "Closed";

                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 transition-colors ${
                      isToday ? "bg-primary/10" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      )}
                      <span className={`font-heading font-semibold ${isToday ? "text-primary" : "text-foreground"}`}>
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-xs font-body text-primary/80">(Today)</span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {isToday && timeRemaining && (
                        <span className="text-xs font-body text-foreground bg-primary/20 px-2 py-1 rounded-full">
                          {formatTimeRemaining()}
                        </span>
                      )}
                      <span className={`font-body ${isClosed ? "text-muted-foreground" : isToday ? "text-primary font-medium" : "text-foreground"}`}>
                        {item.hours}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-6 font-body text-sm text-muted-foreground">
              For after-hours emergencies, please call{" "}
              <a href="tel:555-123-4567" className="text-primary hover:underline font-semibold">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-12 border-b border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
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
                <Button type="submit" variant="default" className="w-full h-12" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Card */}
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
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  background: isMapHovered
                    ? `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.3), transparent 40%)`
                    : 'none',
                }}
              />
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  boxShadow: isMapHovered
                    ? `inset 0 0 0 1px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.2)`
                    : 'none',
                }}
              />
              <iframe
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <div className="backdrop-blur-xl bg-card/80 rounded-xl p-6 shadow-soft border border-border/50">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground text-sm">Address</p>
                        <p className="font-body text-sm text-muted-foreground">
                          123 Sunshine Boulevard, Suite 200<br />Sunnyville, CA 90210
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
                          <a href="tel:555-123-4567" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
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
                          <p className="font-body text-sm text-muted-foreground">(555) 123-4568</p>
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
      </div>

      {/* Bottom Footer */}
      <div className="py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <img src={logo} alt="Sunnyside Pediatrics" className="h-12 w-auto" />
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Providing compassionate, expert pediatric care for families in our community since 2005.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Providers", href: "#providers" },
                  { name: "Patient Documents", href: "#documents" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:555-123-4567"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
                <a
                  href="mailto:info@sunnysidepeds.com"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@sunnysidepeds.com
                </a>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Sunshine Blvd, Suite 200<br />Sunnyville, CA 90210
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="font-body text-sm text-muted-foreground text-center">
              © {currentYear} Sunnyside Pediatrics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
