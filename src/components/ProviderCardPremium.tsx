import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Calendar } from "lucide-react";

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
  department,
  bio,
  image,
  accentColor,
  index = 0,
}: ProviderCardPremiumProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with 3D Transform */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ===== FRONT SIDE ===== */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: isFlipped ? 0 : 1,
          }}
          onClick={() => setIsFlipped(true)}
        >
          {/* Border */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px] transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, hsl(var(${accentVar})) 0%, hsl(var(${accentLightVar})) 50%, hsl(var(--sky-blue-light)) 100%)`,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-card" />
          </div>

          {/* Image Container */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />

            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
              }}
            />

            {/* Bottom Info Panel */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300"
              style={{
                background: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-heading text-xl font-bold text-white">
                  {name}
                </h3>
                
                {/* More Link */}
                <span
                  className="font-body text-sm font-medium"
                  style={{ color: `hsl(var(${accentVar}))` }}
                >
                  more
                </span>
              </div>
              
              <p
                className="font-body text-sm font-semibold mb-1"
                style={{ color: `hsl(var(${accentVar}))` }}
              >
                {credentials}
              </p>
              <p className="font-body text-sm text-white/80">
                {department}
              </p>
            </div>
          </div>
        </div>

        {/* ===== BACK SIDE ===== */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: isFlipped ? 1 : 0,
          }}
        >
          {/* Border */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{
              background: `linear-gradient(135deg, hsl(var(${accentVar})) 0%, hsl(var(${accentLightVar})) 100%)`,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-cream" />
          </div>

          {/* Content */}
          <div className="absolute inset-[2px] rounded-2xl p-4 md:p-6 pt-14 flex flex-col bg-cream">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 z-10"
              style={{
                background: `hsl(var(${accentVar}) / 0.15)`,
                color: `hsl(var(${accentVar}))`,
              }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Name */}
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground text-center mb-3">
              {name}
            </h3>

            {/* Bio with gradient fades */}
            <div className="flex-1 relative overflow-hidden">
              {/* Top fade gradient */}
              <div 
                className="absolute top-0 left-0 right-0 h-4 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--cream)) 0%, transparent 100%)",
                }}
              />
              
              {/* Scrollable content */}
              <div
                className="h-full overflow-y-auto py-2 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-center px-1">
                  {bio}
                </p>
              </div>
              
              {/* Bottom fade gradient */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-6 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, hsl(var(--cream)) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Book Appointment Button */}
            <div className="shrink-0 pt-4">
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
        </div>
      </div>

      {/* Shadow */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `0 20px 40px -12px hsl(var(${accentVar}) / 0.2), 0 8px 20px -8px rgba(0,0,0,0.1)`
            : "0 8px 24px -8px rgba(0,0,0,0.08)",
          transform: isHovered ? "translateY(6px)" : "translateY(0)",
        }}
      />
    </div>
  );
};

export default ProviderCardPremium;
