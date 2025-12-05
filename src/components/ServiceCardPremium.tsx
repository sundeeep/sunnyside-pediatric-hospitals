import { useState } from "react";
import { X } from "lucide-react";

interface ServiceCardPremiumProps {
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  index?: number;
}

const ServiceCardPremium = ({
  title,
  tagline,
  description,
  thumbnail,
  index = 0,
}: ServiceCardPremiumProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card-premium aspect-[4/3] opacity-0 animate-fade-in"
      style={{
        animationDelay: `${0.05 + index * 0.04}s`,
        perspective: "1200px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
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
              background: `linear-gradient(135deg, hsl(var(--sun-yellow)) 0%, hsl(var(--sun-yellow-light)) 50%, hsl(var(--sky-blue-light)) 100%)`,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-card" />
          </div>

          {/* Image Container */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />

            {/* Yellow Capsule - Bottom Left */}
            <div
              className="absolute bottom-4 left-4 transition-all duration-300"
              style={{
                opacity: isHovered ? 0 : 1,
                transform: isHovered ? "translateY(10px)" : "translateY(0)",
              }}
            >
              <div
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--sun-yellow)) 0%, hsl(var(--sun-yellow-light)) 100%)`,
                  boxShadow: "0 3px 15px -2px hsl(var(--sun-yellow) / 0.5)",
                }}
              >
                <span className="font-heading text-xs font-semibold text-foreground">
                  {title}
                </span>
              </div>
            </div>

            {/* More Capsule - Bottom Right (Mobile/Tablet only) */}
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="absolute bottom-4 right-4 lg:hidden cursor-pointer"
            >
              <div
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--sun-yellow)) 0%, hsl(var(--sun-yellow-light)) 100%)`,
                  boxShadow: "0 3px 15px -2px hsl(var(--sun-yellow) / 0.5)",
                }}
              >
                <span className="font-heading text-xs font-semibold text-foreground">
                  more
                </span>
              </div>
            </button>

            {/* Bottom Panel on Hover */}
            <div
              className="absolute bottom-0 left-0 right-0 transition-all duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(100%)",
              }}
            >
              <div
                className="absolute inset-0 -top-16 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              />

              <div
                className="relative p-5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="group shrink-0 cursor-pointer"
                  >
                    <span
                      className="font-body text-sm font-medium relative inline-block"
                      style={{ color: "hsl(var(--sun-yellow))" }}
                    >
                      more
                      <span
                        className="absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        style={{ backgroundColor: "hsl(var(--sun-yellow))" }}
                      />
                    </span>
                  </button>
                </div>
                <p className="font-body text-sm text-white/80 mt-1">
                  {tagline}
                </p>
              </div>
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
              background: `linear-gradient(135deg, hsl(var(--sun-yellow)) 0%, hsl(var(--sun-yellow-light)) 100%)`,
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
                background: "hsl(var(--sun-yellow) / 0.15)",
                color: "hsl(var(--sun-yellow-dark))",
              }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Title */}
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground text-center mb-3">
              {title}
            </h3>

            {/* Description with gradient fades */}
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
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed text-center px-1">
                  {description}
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
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? "0 20px 40px -12px hsl(var(--sun-yellow) / 0.2), 0 8px 20px -8px rgba(0,0,0,0.1)"
            : "0 8px 24px -8px rgba(0,0,0,0.08)",
          transform: isHovered ? "translateY(6px)" : "translateY(0)",
        }}
      />
    </div>
  );
};

export default ServiceCardPremium;
