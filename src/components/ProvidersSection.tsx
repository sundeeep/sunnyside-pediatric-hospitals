import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const providers = [
  {
    name: "Dr. Sarah Mitchell",
    title: "MD, FAAP",
    specialty: "General Pediatrics",
    description:
      "With over 15 years of experience, Dr. Mitchell specializes in newborn care and childhood development.",
    initials: "SM",
    color: "bg-primary",
  },
  {
    name: "Dr. James Chen",
    title: "MD, FAAP",
    specialty: "Pediatric Wellness",
    description:
      "Dr. Chen is passionate about preventive care and helping families establish healthy habits early.",
    initials: "JC",
    color: "bg-secondary",
  },
];

const ProvidersSection = () => {
  return (
    <section id="providers" className="py-20 bg-cream-dark">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Meet Our Providers
          </h2>
          <p className="font-body text-body text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of pediatric specialists is committed to
            providing exceptional care for your children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Avatar */}
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-20 h-20 ${provider.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="font-heading font-bold text-2xl text-primary-foreground">
                    {provider.initials}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-card-title text-foreground mb-1">
                    {provider.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-semibold">
                    {provider.title}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {provider.specialty}
                  </p>
                </div>
              </div>

              <p className="font-body text-body text-muted-foreground mb-6 leading-relaxed">
                {provider.description}
              </p>

              <Button
                variant="outline"
                className="group/btn w-full"
              >
                View Profile
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
