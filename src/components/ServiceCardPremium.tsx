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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-all duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `
            rotateY(${isFlipped ? 180 : 0}deg) 
            rotateX(${isHovered && !isFlipped ? -mousePosition.y * 0.5 : 0}deg) 
            rotateY(${isHovered && !isFlipped ? mousePosition.x * 0.5 : isFlipped ? 180 : 0}deg)
            translateZ(${isHovered ? 20 : 0}px)
          `,
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Sun Ray Border Effect */}
          <div 
            className="absolute inset-0 rounded-2xl p-[2px] z-10"
            style={{
              background: `conic-gradient(
                from ${isHovered ? 180 + mousePosition.x * 3 : 180}deg at 50% 0%,
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

          {/* Main Content */}
          <div className="absolute inset-[2px] rounded-2xl overflow-hidden z-20">
            {/* Thumbnail Image */}
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${isHovered ? 1.05 : 1})`,
              }}
            />

            {/* Bottom-Left Yellow Glowing Capsule - Visible by default, hidden on hover */}
            <div 
              className="absolute bottom-4 left-4 z-30 transition-all duration-300 ease-out"
              style={{
                opacity: isHovered ? 0 : 1,
                transform: `translateY(${isHovered ? 10 : 0}px)`,
              }}
            >
              <div 
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--sun-yellow)) 0%, hsl(var(--sun-yellow-light)) 100%)`,
                  boxShadow: "0 3px 15px -2px hsl(var(--sun-yellow) / 0.5), 0 0 20px -5px hsl(var(--sun-yellow) / 0.3)",
                  border: "1px solid hsl(var(--sun-yellow-light) / 0.5)",
                }}
              >
                <span className="font-heading text-xs font-semibold text-foreground">
                  {title}
                </span>
              </div>
            </div>

            {/* Glassy Bottom Panel - Hidden by default, visible on hover */}
            <div 
              className="absolute bottom-0 left-0 right-0 z-40 transition-all duration-400 ease-out"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: `translateY(${isHovered ? 0 : 100}%)`,
                pointerEvents: isHovered ? "auto" : "none",
              }}
            >
              {/* Gradient overlay for bottom */}
              <div 
                className="absolute inset-0 -top-20 pointer-events-none"
                style={{
                  background: `linear-gradient(
                    to top,
                    hsl(0 0% 0% / 0.6) 0%,
                    hsl(0 0% 0% / 0.3) 50%,
                    transparent 100%
                  )`,
                }}
              />
              
              <div 
                className="relative p-5"
                style={{
                  background: "hsl(0 0% 100% / 0.15)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  borderTop: "1px solid hsl(0 0% 100% / 0.2)",
                }}
              >
                {/* Sun Glow Effect */}
                <div 
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-6"
                  style={{
                    background: `radial-gradient(ellipse at center, hsl(var(--sun-yellow) / 0.35) 0%, transparent 70%)`,
                  }}
                />
                
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-bold text-white drop-shadow-lg">
                    {title}
                  </h3>
                  {/* More Link */}
                  <button
                    onClick={handleMoreClick}
                    className="font-body text-sm font-medium cursor-pointer transition-all duration-300 hover:opacity-80 relative z-50 shrink-0"
                    style={{
                      color: "hsl(var(--sun-yellow))",
                    }}
                  >
                    more
                  </button>
                </div>
                <p className="font-body text-sm text-white/80 drop-shadow-md">
                  {tagline}
                </p>
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

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={handleFlipBack}
        >
          {/* Sun Ray Border Effect for Back */}
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

          {/* Glass Content Panel */}
          <div 
            className="absolute inset-[2px] rounded-2xl p-6 flex flex-col"
            style={{
              background: `linear-gradient(
                135deg,
                hsl(var(--cream) / 0.95) 0%,
                hsl(var(--cream-dark) / 0.98) 100%
              )`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative Sun Rays */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-30">
              <div 
                className="w-full h-full"
                style={{
                  background: `radial-gradient(ellipse at center bottom, hsl(var(--sun-yellow)) 0%, transparent 70%)`,
                }}
              />
            </div>

            <h3 className="font-heading text-xl font-bold text-foreground mb-3 text-center">
              {title}
            </h3>
            
            {/* Scrollable Description */}
            <div 
              className="flex-1 overflow-y-auto pr-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              <p className="font-body text-body text-muted-foreground leading-relaxed hide-scrollbar">
                {description}
              </p>
            </div>

            {/* Tap indicator */}
            <p className="text-xs text-muted-foreground/60 text-center mt-4">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>

      {/* Hover Shadow */}
      <div 
        className="absolute inset-0 rounded-2xl -z-10 transition-all duration-500"
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px hsl(var(--sun-yellow) / 0.25), 0 12px 25px -8px hsl(0 0% 0% / 0.15)`
            : `0 10px 30px -10px hsl(0 0% 0% / 0.1)`,
          transform: `translateY(${isHovered ? 8 : 0}px)`,
        }}
      />
    </div>
  );
};

export default ServiceCardPremium;
