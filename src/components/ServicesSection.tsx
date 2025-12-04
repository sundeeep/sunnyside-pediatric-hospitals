import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Well-Child Visits",
    summary: "Comprehensive checkups tracking growth, development, and immunizations.",
    icon: "👶",
  },
  {
    name: "Sick Visits",
    summary: "Same-day appointments for illnesses, infections, and urgent concerns.",
    icon: "🩺",
  },
  {
    name: "Immunizations",
    summary: "Complete vaccination schedules following AAP guidelines.",
    icon: "💉",
  },
  {
    name: "Newborn Care",
    summary: "Specialized care for your newest family member from day one.",
    icon: "🍼",
  },
  {
    name: "Adolescent Medicine",
    summary: "Age-appropriate care addressing teen health needs.",
    icon: "🧒",
  },
  {
    name: "TeleHealth",
    summary: "Virtual consultations for convenient, accessible care.",
    icon: "📱",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-body text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pediatric services designed to support your child's
            health at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="flip-card h-48 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 + index * 0.08}s` }}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 bg-card rounded-xl p-6 shadow-soft flex flex-col items-center justify-center text-center">
                  <span className="text-4xl mb-4">{service.icon}</span>
                  <h3 className="font-heading text-card-title text-foreground">
                    {service.name}
                  </h3>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-primary rounded-xl p-6 shadow-card flex flex-col items-center justify-center text-center">
                  <p className="font-body text-body text-primary-foreground leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
