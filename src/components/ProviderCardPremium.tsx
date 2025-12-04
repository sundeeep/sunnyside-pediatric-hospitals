import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ProviderCardPremiumProps {
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  initials: string;
  accentColor: "primary" | "secondary";
  index?: number;
}

const ProviderCardPremium = ({
  name,
  credentials,
  specialty,
  bio,
  initials,
  accentColor,
  index = 0,
}: ProviderCardPremiumProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
    setIsHovered(false);
  };

  const rotateX = isHovered ? (mousePosition.y - 0.5) * -10 : 0;
  const rotateY = isHovered ? (mousePosition.x - 0.5) * 10 : 0;

  const accentGradient =
    accentColor === "primary"
      ? "from-sun-yellow via-sun-yellow/80 to-sun-light"
      : "from-sky-blue via-sky-blue/80 to-sky-light";

  const avatarBg =
    accentColor === "primary"
      ? "bg-gradient-to-br from-sun-yellow to-sun-light"
      : "bg-gradient-to-br from-sky-blue to-sky-light";

  return (
    <div
      className="relative group perspective-1000 opacity-0 animate-scale-in"
      style={{
        animationDelay: `${0.1 + index * 0.15}s`,
        animationFillMode: "forwards",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative border with gradient */}
      <div
        className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${accentGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
      />

      {/* Card container */}
      <div
        className="relative bg-card rounded-2xl p-8 shadow-soft transition-all duration-500 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? "20px" : "0px"})`,
          boxShadow: isHovered
            ? `0 25px 50px -12px hsl(var(--${accentColor}) / 0.25), 0 0 30px hsl(var(--${accentColor}) / 0.1)`
            : "0 10px 30px -10px hsl(var(--foreground) / 0.1)",
        }}
      >
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--${accentColor}) / 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Avatar section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            {/* Decorative ring */}
            <div
              className={`absolute -inset-2 rounded-full bg-gradient-to-br ${accentGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
            />
            {/* Avatar */}
            <div
              className={`relative w-28 h-28 ${avatarBg} rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
            >
              <span className="font-heading font-bold text-3xl text-primary-foreground">
                {initials}
              </span>
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="text-center mb-6">
          <h3 className="font-heading text-card-title text-foreground mb-1">
            {name}
          </h3>
          <p className="font-body text-sm text-primary font-semibold mb-1">
            {credentials}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            {specialty}
          </p>
        </div>

        {/* Bio */}
        <p className="font-body text-body text-muted-foreground mb-8 leading-relaxed text-center">
          {bio}
        </p>

        {/* CTA Button */}
        <Button
          variant="hero"
          className="w-full group/btn"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default ProviderCardPremium;
