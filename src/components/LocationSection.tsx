import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Find Us
          </h2>
          <p className="font-body text-body text-muted-foreground">
            Conveniently located to serve families throughout the community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map Placeholder */}
          <div className="bg-sky-light rounded-xl overflow-hidden shadow-soft h-80 lg:h-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-soft">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="font-heading font-semibold text-foreground">
                  Interactive Map
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Coming Soon
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-card/50 rounded-full" />
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-primary/30 rounded-full" />
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
              <Button variant="default" className="w-full">
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
