import { Shield, Clock, Video } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Trusted Pediatric Care",
    description:
      "Board-certified pediatricians with decades of combined experience caring for children at every stage of development.",
    color: "bg-primary",
  },
  {
    icon: Clock,
    title: "Same-Day Sick Visits",
    description:
      "When your child is unwell, we prioritize getting them seen quickly. Same-day appointments available when possible.",
    color: "bg-secondary",
  },
  {
    icon: Video,
    title: "TeleVisits Available",
    description:
      "Convenient virtual appointments from the comfort of home. Perfect for follow-ups and non-emergency consultations.",
    color: "bg-sun-light",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Why Families Choose Us
          </h2>
          <p className="font-body text-body text-muted-foreground max-w-2xl mx-auto">
            We understand that choosing a pediatrician is one of the most
            important decisions a parent makes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-card-title text-foreground mb-3">
                {benefit.title}
              </h3>

              <p className="font-body text-body text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
