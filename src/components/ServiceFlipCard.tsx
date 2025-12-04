import { Button } from "@/components/ui/button";

interface ServiceFlipCardProps {
  icon: string;
  title: string;
  subtitle: string;
  summary: string;
  index: number;
}

const ServiceFlipCard = ({ icon, title, subtitle, summary, index }: ServiceFlipCardProps) => {
  return (
    <div
      className="flip-card aspect-[4/3] opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.05 + index * 0.04}s` }}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div className="flip-card-front absolute inset-0 bg-card rounded-2xl p-6 shadow-soft flex flex-col items-center justify-center text-center">
          <span className="text-5xl mb-4">{icon}</span>
          <h3 className="font-heading text-card-title text-foreground font-bold mb-2">
            {title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 shadow-card flex flex-col items-center justify-center text-center">
          <p className="font-body text-body text-primary-foreground leading-relaxed mb-6">
            {summary}
          </p>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-card/20 hover:bg-card/30 text-primary-foreground border-0"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFlipCard;
