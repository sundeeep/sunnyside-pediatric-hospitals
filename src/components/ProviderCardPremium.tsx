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
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const accentVar = accentColor === "primary" ? "--sun-yellow" : "--sky-blue";
  const accentLightVar = accentColor === "primary" ? "--sun-yellow-light" : "--sky-blue-light";

  return (
    <div
      className="provider-card-premium aspect-[3/4] opacity-0 animate-fade-in"
      style={{
        animationDelay: `${0.1 + index * 0.15}s`,
        animationFillMode: "forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        {/* Main Card */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
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
                
                {/* More Button */}
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(true)}
                  className="group shrink-0 cursor-pointer"
                >
                  <span
                    className="font-body text-sm font-medium relative inline-block"
                    style={{ color: `hsl(var(${accentVar}))` }}
                  >
                    more
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: `hsl(var(${accentVar}))` }}
                    />
                  </span>
                </button>
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

        {/* Detail Overlay */}
        {isDetailOpen && (
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            onClick={() => setIsDetailOpen(false)}
          >
            {/* Background Image */}
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Blur Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: "rgba(0,0,0,0.5)",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col p-6 pt-14">
              {/* Close Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDetailOpen(false);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-white/20 hover:bg-white/30"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Scrollable Bio Content */}
              <div
                className="flex-1 overflow-y-auto flex items-center justify-center [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                <p className="font-body text-base text-white leading-relaxed text-center max-w-sm drop-shadow-lg">
                  {bio}
                </p>
              </div>

              {/* Sticky Book Appointment Button */}
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
        )}

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
    </div>
  );
};

export default ProviderCardPremium;
