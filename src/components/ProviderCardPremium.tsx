import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, X, Calendar } from "lucide-react";

interface ProviderCardPremiumProps {
  name: string;
  credentials: string;
  specialty: string;
  department: string;
  bio: string;
  image: string;
  accentColor: "primary" | "secondary";
  index?: number;
}

const ProviderCardPremium = ({
  name,
  credentials,
  specialty,
  department,
  bio,
  image,
  accentColor,
  index = 0,
}: ProviderCardPremiumProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const accentVar = accentColor === "primary" ? "--sun-yellow" : "--sky-blue";
  const accentLightVar = accentColor === "primary" ? "--sun-yellow-light" : "--sky-blue-light";

  return (
    <div
      className="provider-card-premium aspect-[3/4] opacity-0 animate-fade-in"
      style={{
        animationDelay: `${0.1 + index * 0.15}s`,
        animationFillMode: "forwards",
        perspective: "1200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-all duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `
            rotateX(${isHovered && !isDetailOpen ? -mousePosition.y * 0.5 : 0}deg) 
            rotateY(${isHovered && !isDetailOpen ? mousePosition.x * 0.5 : 0}deg)
            translateZ(${isHovered ? 20 : 0}px)
          `,
        }}
      >
        {/* Main Card */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Sun Ray Border Effect */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px] z-10"
            style={{
              background: `conic-gradient(
                from ${isHovered ? 180 + mousePosition.x * 3 : 180}deg at 50% 0%,
                hsl(var(${accentVar})) 0deg,
                hsl(var(${accentLightVar})) 60deg,
                hsl(var(--sky-blue-light)) 120deg,
                hsl(var(--sky-blue)) 180deg,
                hsl(var(--sky-blue-light)) 240deg,
                hsl(var(${accentLightVar})) 300deg,
                hsl(var(${accentVar})) 360deg
              )`,
              opacity: isHovered ? 1 : 0.7,
              transition: "opacity 0.3s ease",
            }}
          >
            <div className="w-full h-full rounded-2xl bg-card" />
          </div>

          {/* Main Content */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden z-20">
            {/* Doctor Image - Full Cover */}
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${isHovered ? 1.05 : 1})`,
              }}
            />

            {/* Glassy Overlay Gradient */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `linear-gradient(
                  to top,
                  hsl(0 0% 0% / 0.8) 0%,
                  hsl(0 0% 0% / 0.4) 30%,
                  hsl(0 0% 0% / 0.1) 60%,
                  transparent 100%
                )`,
              }}
            />

            {/* Glassy Bottom Panel with Info */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300"
              style={{
                background: isHovered
                  ? "hsl(0 0% 100% / 0.18)"
                  : "hsl(0 0% 100% / 0.12)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {/* Sun Glow Effect */}
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-8 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at center, hsl(var(${accentVar}) / ${isHovered ? 0.5 : 0.3}) 0%, transparent 70%)`,
                }}
              />

              <h3 className="font-heading text-xl font-bold text-white mb-1 drop-shadow-lg">
                {name}
              </h3>
              <p
                className="font-body text-sm font-semibold drop-shadow-md mb-1"
                style={{ color: `hsl(var(${accentVar}))` }}
              >
                {credentials}
              </p>
              <p className="font-body text-sm text-white/80 drop-shadow-md">
                {department}
              </p>

              {/* More Details Button */}
              <button
                onClick={() => setIsDetailOpen(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-body text-sm font-medium text-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${accentVar}) / 0.3) 0%, hsl(var(${accentVar}) / 0.15) 100%)`,
                  border: `1px solid hsl(var(${accentVar}) / 0.4)`,
                }}
              >
                <span>More Details</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Shimmer Effect */}
          <div
            className="absolute inset-0 rounded-2xl z-30 pointer-events-none transition-opacity duration-300"
            style={{
              background: `linear-gradient(
                ${105 + mousePosition.x * 2}deg,
                transparent 40%,
                hsl(0 0% 100% / ${isHovered ? 0.15 : 0}) 50%,
                transparent 60%
              )`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </div>

        {/* Bottom Sheet Overlay */}
        <div
          className={`absolute inset-0 rounded-2xl z-40 transition-all duration-500 ease-out ${
            isDetailOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backdropFilter: isDetailOpen ? "blur(4px)" : "blur(0px)",
          }}
          onClick={() => setIsDetailOpen(false)}
        />

        {/* Bottom Sheet */}
        <div
          className={`absolute inset-x-0 bottom-0 rounded-2xl z-50 transition-all duration-500 ease-out overflow-hidden ${
            isDetailOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            maxHeight: "100%",
          }}
        >
          {/* Sheet Border */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{
              background: `conic-gradient(
                from 0deg at 50% 100%,
                hsl(var(${accentVar})) 0deg,
                hsl(var(${accentLightVar})) 60deg,
                hsl(var(--sky-blue-light)) 120deg,
                hsl(var(--sky-blue)) 180deg,
                hsl(var(--sky-blue-light)) 240deg,
                hsl(var(${accentLightVar})) 300deg,
                hsl(var(${accentVar})) 360deg
              )`,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-card via-card to-muted" />
          </div>

          {/* Sheet Content */}
          <div
            className="absolute inset-[2px] rounded-2xl p-6 flex flex-col"
            style={{
              background: `linear-gradient(
                135deg,
                hsl(var(--cream) / 0.98) 0%,
                hsl(var(--cream-dark) / 0.99) 100%
              )`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Handle Bar */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 rounded-full bg-muted-foreground/30" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Decorative Sun Rays */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-30">
              <div
                className="w-full h-full"
                style={{
                  background: `radial-gradient(ellipse at center bottom, hsl(var(${accentVar})) 0%, transparent 70%)`,
                }}
              />
            </div>

            {/* Info */}
            <div className="text-center mb-4">
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                {name}
              </h3>
              <p
                className="font-body text-sm font-semibold mb-1"
                style={{ color: `hsl(var(${accentVar}))` }}
              >
                {credentials}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {specialty} • {department}
              </p>
            </div>

            {/* Bio */}
            <div className="flex-1 overflow-y-auto mb-4">
              <p className="font-body text-sm text-muted-foreground leading-relaxed text-center">
                {bio}
              </p>
            </div>

            {/* Book Appointment Button */}
            <Button
              variant="hero"
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Hover Shadow */}
        <div
          className="absolute inset-0 rounded-2xl -z-10 transition-all duration-500"
          style={{
            boxShadow: isHovered
              ? `0 25px 50px -12px hsl(var(${accentVar}) / 0.25), 0 12px 25px -8px hsl(0 0% 0% / 0.15)`
              : `0 10px 30px -10px hsl(0 0% 0% / 0.1)`,
            transform: `translateY(${isHovered ? 8 : 0}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default ProviderCardPremium;
