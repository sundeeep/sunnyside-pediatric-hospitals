import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sunny pediatric care illustration"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-cream-dark" />
      </div>
      
      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-dark via-cream-dark/80 to-transparent z-[1]" />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-foreground font-heading font-semibold rounded-full text-sm mb-6">
              Caring for your little ones since 2005
            </span>
          </div>

          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Every Child's{" "}
            <span className="text-primary">Health</span> Shines
            <span className="text-secondary"> Bright</span>
          </h1>

          <p
            className="font-body text-lg sm:text-xl text-foreground/80 mb-10 leading-relaxed opacity-0 animate-slide-up max-w-2xl mx-auto"
            style={{ animationDelay: "0.3s" }}
          >
            Compassionate, expert care for children of all ages.
            <br />
            From newborns to teens, we're here for your family.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById('providers')?.scrollIntoView({ behavior: 'smooth' })}>
              <Users className="w-5 h-5" />
              Meet Our Providers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
