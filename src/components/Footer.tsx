import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Printer, Navigation, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-84.2847!3d33.2453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45a1c0e8d0b0d%3A0x0!2s1661+W+McIntosh+Rd%2C+Griffin%2C+GA+30223!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <footer className="bg-cream-dark">
      {/* Office Hours & Contact Section - Side by Side on Desktop */}
      <div id="contact" className="py-12 border-b border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Office Hours */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-6 w-full">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-foreground">Office Hours</h3>
              </div>
              <div className="bg-background rounded-2xl shadow-card p-6 w-full max-w-md">
                <div className="space-y-4">
                  {dayOrder.map((dayName) => {
                    const item = schedule.find((s) => s.day === dayName)!;
                    const isToday = dayName === today;
                    const isClosed = item.hours === "Closed";

                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                          isToday ? "bg-primary/10 border border-primary/20" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {isToday && (
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                          )}
                          <span className="font-heading font-bold text-foreground">
                            {item.day}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {isToday && timeRemaining && (
                            <span className="text-xs font-body text-foreground/80 bg-primary/20 px-3 py-1.5 rounded-full font-medium">
                              {formatTimeRemaining()}
                            </span>
                          )}
                          <span className={`font-body font-medium ${isClosed ? "text-muted-foreground" : isToday ? "text-primary" : "text-foreground/80"}`}>
                            {item.hours}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-center mt-6 font-body text-sm text-muted-foreground">
                For after-hours emergencies, please call{" "}
                <a href="tel:7702334668" className="text-primary hover:underline font-semibold">
                  (770) 233-4668
                </a>
              </p>
            </div>

            {/* Map Card */}
            <div
              className="relative h-full min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden cursor-pointer group"
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
              <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                <div className="backdrop-blur-xl bg-card/80 rounded-xl p-4 shadow-soft border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="font-heading text-sm font-semibold text-foreground">Sunnyside Pediatrics</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground text-xs">Address</p>
                        <p className="font-body text-xs text-muted-foreground">
                          1661 W McIntosh Road<br />Griffin, GA 30223
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground text-xs">Phone</p>
                          <a href="tel:7702334668" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                            (770) 233-4668
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <Printer className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground text-xs">Fax</p>
                          <p className="font-body text-xs text-muted-foreground">(887) 795-7324</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open('https://maps.google.com/?q=1661+W+McIntosh+Road+Griffin+GA+30223', '_blank')}
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
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img src={logo} alt="Sunnyside Pediatrics" className="h-12 w-auto" />
                </a>
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
                <div className="flex items-center gap-3 font-body text-sm text-foreground font-semibold">
                  <Building2 className="w-4 h-4" />
                  Sunnyside Pediatrics
                </div>
                <a
                  href="tel:7702334668"
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (770) 233-4668
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
                    1661 W McIntosh Road<br />Griffin, GA 30223
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
