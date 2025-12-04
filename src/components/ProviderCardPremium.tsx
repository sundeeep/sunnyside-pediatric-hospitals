import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, X } from "lucide-react";

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
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Extract first name from full name (e.g., "Dr. Chandana Prabhudev" -> "Chandana")
  const firstName = name.replace("Dr. ", "").split(" ")[0];

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
            rotateX(${isHovered && !isAboutOpen ? -mousePosition.y * 0.5 : 0}deg) 
            rotateY(${isHovered && !isAboutOpen ? mousePosition.x * 0.5 : 0}deg)
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

              {/* Two Buttons */}
              <div className="mt-4 flex gap-3">
                {/* Book Appointment Button */}
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-body text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(${accentVar})) 0%, hsl(var(${accentLightVar})) 100%)`,
                    boxShadow: `0 4px 15px -3px hsl(var(${accentVar}) / 0.4)`,
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book</span>
                </button>

                {/* About Button */}
                <button
                  onClick={() => setIsAboutOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-body text-sm font-medium text-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, hsl(0 0% 100% / 0.2) 0%, hsl(0 0% 100% / 0.1) 100%)`,
                    border: `1px solid hsl(0 0% 100% / 0.3)`,
                  }}
                >
                  <User className="w-4 h-4" />
                  <span>About {firstName}</span>
                </button>
              </div>
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

        {/* About Bottom Sheet */}
        <div
          className={`absolute inset-0 rounded-2xl z-40 overflow-hidden transition-all duration-500 ease-out ${
            isAboutOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Doctor Image behind the sheet */}
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Full Glassy Overlay that slides from bottom */}
          <div
            className="absolute inset-0 flex flex-col justify-end transition-all duration-500 ease-out"
            style={{
              background: isAboutOpen
                ? "linear-gradient(to top, hsl(0 0% 0% / 0.95) 0%, hsl(0 0% 0% / 0.85) 50%, hsl(0 0% 0% / 0.6) 100%)"
                : "transparent",
              backdropFilter: isAboutOpen ? "blur(20px) saturate(150%)" : "blur(0px)",
              WebkitBackdropFilter: isAboutOpen ? "blur(20px) saturate(150%)" : "blur(0px)",
              transform: `translateY(${isAboutOpen ? 0 : 100}%)`,
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="p-6 pt-16">
              {/* Name and credentials */}
              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                {name}
              </h3>
              <p
                className="font-body text-sm font-semibold mb-1"
                style={{ color: `hsl(var(${accentVar}))` }}
              >
                {credentials}
              </p>
              <p className="font-body text-sm text-white/70 mb-4">
                {specialty}
              </p>

              {/* Bio Text - Pure White */}
              <div className="max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                <p className="font-body text-sm text-white leading-relaxed">
                  {bio}
                </p>
              </div>

              {/* Book Appointment Button */}
              <Button
                variant="hero"
                className="w-full mt-6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
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
