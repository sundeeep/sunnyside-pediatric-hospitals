import { useState } from "react";

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

  const handleMoreClick = () => {
    setIsFlipped(true);
  };

  const handleFlipBack = () => {
    setIsFlipped(false);
  };

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
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Border Gradient */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{
              background: `conic-gradient(
                from 180deg at 50% 0%,
                hsl(var(--sun-yellow)) 0deg,
                hsl(var(--sun-yellow-light)) 60deg,
                hsl(var(--sky-blue-light)) 120deg,
                hsl(var(--sky-blue)) 180deg,
                hsl(var(--sky-blue-light)) 240deg,
                hsl(var(--sun-yellow-light)) 300deg,
                hsl(var(--sun-yellow)) 360deg
              )`,
              opacity: isHovered ? 1 : 0.7,
              transition: "opacity 0.3s ease",
            }}
          >
            <div className="w-full h-full rounded-2xl bg-card" />
          </div>

          {/* Image */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />

            {/* Yellow Capsule - Bottom Left (visible when not hovered) */}
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
                  border: "1px solid hsl(var(--sun-yellow-light) / 0.5)",
                }}
              >
                <span className="font-heading text-xs font-semibold text-foreground">
                  {title}
                </span>
              </div>
            </div>

            {/* Bottom Panel (visible on hover) */}
            <div
              className="absolute bottom-0 left-0 right-0 transition-all duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {/* Dark gradient background */}
              <div
                className="absolute inset-0 -top-16"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div
                className="relative p-5"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-bold text-white drop-shadow-lg">
                    {title}
                  </h3>
                  
                  {/* More Link Button */}
                  <button
                    type="button"
                    onClick={handleMoreClick}
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
          className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={handleFlipBack}
        >
          {/* Border Gradient */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{
              background: `conic-gradient(
                from 0deg at 50% 100%,
                hsl(var(--sun-yellow)) 0deg,
                hsl(var(--sun-yellow-light)) 60deg,
                hsl(var(--sky-blue-light)) 120deg,
                hsl(var(--sky-blue)) 180deg,
                hsl(var(--sky-blue-light)) 240deg,
                hsl(var(--sun-yellow-light)) 300deg,
                hsl(var(--sun-yellow)) 360deg
              )`,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-card via-card to-muted" />
          </div>

          {/* Content Panel */}
          <div
            className="absolute inset-[2px] rounded-2xl p-6 flex flex-col"
            style={{
              background: `linear-gradient(135deg, hsl(var(--cream) / 0.95) 0%, hsl(var(--cream-dark) / 0.98) 100%)`,
            }}
          >
            {/* Decorative Sun Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center bottom, hsl(var(--sun-yellow)) 0%, transparent 70%)`,
              }}
            />

            <h3 className="font-heading text-xl font-bold text-foreground mb-3 text-center">
              {title}
            </h3>

            {/* Scrollable Description */}
            <div
              className="flex-1 overflow-y-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed [&::-webkit-scrollbar]:hidden">
                {description}
              </p>
            </div>

            <p className="text-xs text-muted-foreground/60 text-center mt-4">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? "0 25px 50px -12px hsl(var(--sun-yellow) / 0.25), 0 12px 25px -8px rgba(0,0,0,0.15)"
            : "0 10px 30px -10px rgba(0,0,0,0.1)",
          transform: isHovered ? "translateY(8px)" : "translateY(0)",
        }}
      />
    </div>
  );
};

export default ServiceCardPremium;
