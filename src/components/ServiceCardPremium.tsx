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

  return (
    <div
      className="service-card-premium aspect-[4/3] opacity-0 animate-fade-in cursor-pointer"
      style={{ 
        animationDelay: `${0.05 + index * 0.04}s`,
        perspective: "1200px",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
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

            {/* Glassy Overlay Gradient */}
            <div 
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `linear-gradient(
                  to top,
                  hsl(0 0% 0% / 0.7) 0%,
                  hsl(0 0% 0% / 0.4) 40%,
                  hsl(0 0% 0% / 0.1) 70%,
                  transparent 100%
                )`,
              }}
            />

            {/* Glassy Bottom Panel */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300"
              style={{
                background: isHovered 
                  ? "hsl(0 0% 100% / 0.15)"
                  : "hsl(0 0% 100% / 0.1)",
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
              }}
            >
              {/* Sun Glow Effect */}
              <div 
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-8 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at center, hsl(var(--sun-yellow) / ${isHovered ? 0.4 : 0.2}) 0%, transparent 70%)`,
                }}
              />
              
              <h3 className="font-heading text-xl font-bold text-white mb-1 drop-shadow-lg">
                {title}
              </h3>
              <p className="font-body text-sm text-white/80 drop-shadow-md">
                {tagline}
              </p>

              {/* Micro-interaction indicator */}
              <div 
                className="absolute bottom-3 right-4 flex items-center gap-1 text-white/60 text-xs transition-all duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: `translateX(${isHovered ? 0 : 10}px)`,
                }}
              >
                <span>Tap to flip</span>
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
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
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
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
            className="absolute inset-[2px] rounded-2xl p-6 flex flex-col justify-center items-center text-center"
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

            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              {title}
            </h3>
            
            <p className="font-body text-body text-muted-foreground leading-relaxed mb-6 max-w-[90%]">
              {description}
            </p>

            <button 
              className="group relative px-6 py-2.5 rounded-full font-body text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--sun-yellow-light)) 100%)`,
                boxShadow: "0 4px 15px -3px hsl(var(--sun-yellow) / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="relative z-10 text-primary-foreground">Learn More</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--sun-yellow-dark)) 0%, hsl(var(--primary)) 100%)`,
                }}
              />
            </button>

            {/* Tap indicator */}
            <p className="absolute bottom-4 text-xs text-muted-foreground/60">
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
