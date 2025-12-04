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
                className="mt-4 w-full rounded-xl font-body text-sm font-medium text-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${accentVar}) / 0.3) 0%, hsl(var(${accentVar}) / 0.15) 100%)`,
                  border: `1px solid hsl(var(${accentVar}) / 0.4)`,
                  padding: 0,
                }}
              >
                <span className="w-full h-full flex items-center justify-center gap-2 py-3 px-4">
                  More Details
                  <ChevronUp className="w-4 h-4" />
                </span>
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

        {/* Bottom Sheet Overlay - Blurred Image with Bio */}
        <div
          className={`absolute inset-0 rounded-2xl z-40 transition-all duration-500 ease-out overflow-hidden ${
            isDetailOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDetailOpen(false)}
        >
          {/* Doctor Image Background */}
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Blur Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: isDetailOpen ? "blur(12px)" : "blur(0px)",
              WebkitBackdropFilter: isDetailOpen ? "blur(12px)" : "blur(0px)",
              background: "hsl(0 0% 0% / 0.5)",
            }}
          />

          {/* Bio Content on Blurred Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDetailOpen(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Bio Paragraph - Simple p tag with staggered animation */}
            <p 
              className={`font-body text-base text-white leading-relaxed text-center max-w-sm transition-all duration-700 drop-shadow-lg ${
                isDetailOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isDetailOpen ? "0.2s" : "0s",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)",
              }}
            >
              {bio}
            </p>

            {/* Book Appointment Button */}
            <Button
              variant="hero"
              className={`mt-6 w-full max-w-xs transition-all duration-700 ${
                isDetailOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isDetailOpen ? "0.4s" : "0s",
              }}
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
