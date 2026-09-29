import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Automotive Crest / Shield Icon */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          isSm ? 'w-8 h-8' : isLg ? 'w-12 h-12' : 'w-10 h-10'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Outer Shield Border */}
          <path
            d="M50 4L90 20V48C90 73 73 91 50 96C27 91 10 73 10 48V20L50 4Z"
            fill="#0F1015"
            stroke="#27272A"
            strokeWidth="3"
          />
          {/* Inner Red Wing / Chevron */}
          <path
            d="M50 14L80 26V46C80 66 67 80 50 85C33 80 20 66 20 46V26L50 14Z"
            fill="url(#redGrad)"
          />
          {/* Automotive Velocity Lines & Diamond Center */}
          <path
            d="M32 45L50 32L68 45L50 72L32 45Z"
            fill="#090A0C"
          />
          <path
            d="M42 46L50 38L58 46L50 60L42 46Z"
            fill="#FFFFFF"
          />
          {/* Speed horizontal cut */}
          <line x1="20" y1="50" x2="80" y2="50" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          
          <defs>
            <linearGradient id="redGrad" x1="50" y1="14" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EF4444" />
              <stop offset="1" stopColor="#B91C1C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-wider font-extrabold uppercase font-display leading-tight">
          <span className="text-white text-base md:text-lg tracking-tight font-black">LAVA CAR</span>
          <span className="ml-1.5 text-[#DC2626] text-base md:text-lg tracking-tight font-black">LÍDER</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
            Estética Automotiva · Desde 1992
          </span>
        )}
      </div>
    </div>
  );
};
