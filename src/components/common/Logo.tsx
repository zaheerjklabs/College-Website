import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer' | 'shield-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isDark = variant === 'dark' || variant === 'footer';

  // Sizing map
  const shieldSizes = {
    sm: 'w-8 h-10',
    md: 'w-12 h-14',
    lg: 'w-16 h-20',
    xl: 'w-24 h-28'
  };

  const titleSizes = {
    sm: 'text-xs',
    md: 'text-sm sm:text-base',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl'
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      {/* SVG Shield / Crest Logo */}
      <div className={`relative flex-shrink-0 flex items-center justify-center ${shieldSizes[size]}`}>
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Laurel Wreath / Leaves */}
          <g className="text-amber-500 fill-current opacity-90">
            {/* Left Wreath Leaves */}
            <path d="M22 45 C15 48 10 56 12 65 C14 74 20 81 27 86 C25 80 23 72 25 64 C27 56 25 50 22 45 Z" />
            <path d="M16 30 C10 34 7 42 10 50 C13 46 17 42 20 38 C23 34 20 31 16 30 Z" />
            <path d="M22 18 C17 21 13 28 16 35 C19 32 24 28 27 25 C29 22 26 19 22 18 Z" />
            <path d="M32 9 C27 11 23 17 26 23 C29 21 34 18 37 16 C38 13 36 10 32 9 Z" />

            {/* Right Wreath Leaves */}
            <path d="M78 45 C85 48 90 56 88 65 C86 74 80 81 73 86 C75 80 77 72 75 64 C73 56 75 50 78 45 Z" />
            <path d="M84 30 C90 34 93 42 90 50 C87 46 83 42 80 38 C77 34 80 31 84 30 Z" />
            <path d="M78 18 C83 21 87 28 84 35 C81 32 76 28 73 25 C71 22 74 19 78 18 Z" />
            <path d="M68 9 C73 11 77 17 74 23 C71 21 66 18 63 16 C62 13 64 10 68 9 Z" />
          </g>

          {/* Shield Body */}
          <path 
            d="M50 8 C66 8 76 14 78 26 C78 52 68 76 50 92 C32 76 22 52 22 26 C24 14 34 8 50 8 Z" 
            fill={isDark ? '#1e1b4b' : '#ffffff'} 
            stroke={isDark ? '#f97316' : '#1e3a8a'} 
            strokeWidth="3.5" 
          />

          {/* Inner Accent Line */}
          <path 
            d="M50 14 C62 14 70 19 72 28 C72 50 64 69 50 83 C36 69 28 50 28 28 C30 19 38 14 50 14 Z" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="1.5" 
          />

          {/* Gear / Sun Icon at Top of Monogram */}
          <circle cx="62" cy="30" r="4.5" fill="#f97316" />
          <circle cx="62" cy="30" r="2.2" fill={isDark ? '#1e1b4b' : '#ffffff'} />
          <path d="M62 23 L62 25 M62 35 L62 37 M55 30 L57 30 M67 30 L69 30 M57 25 L58.5 26.5 M65.5 33.5 L67 35 M57 35 L58.5 33.5 M65.5 26.5 L67 25" stroke="#f97316" strokeWidth="1.2" />

          {/* ST Monogram */}
          {/* Letter S */}
          <path 
            d="M44 32 C41 29 35 29 35 34 C35 41 47 39 47 48 C47 55 40 57 34 54 M34 54 L33 58 C38 61 49 61 50 51 C50 42 38 43 38 36 C38 32 43 31 46 33 Z" 
            fill={isDark ? '#38bdf8' : '#1e40af'} 
          />
          {/* Letter T */}
          <path 
            d="M48 33 L67 33 L67 38 L59 38 L59 60 L54 60 L54 38 L48 38 Z" 
            fill={isDark ? '#38bdf8' : '#1e40af'} 
          />

          {/* Golden Ribbon Banner at Base */}
          <path d="M20 94 L50 90 L80 94 L75 102 L50 97 L25 102 Z" fill="#ea580c" />
          <path d="M26 95 L50 92 L74 95 L70 100 L50 96 L30 100 Z" fill="#fbbf24" />

          {/* SIT Tiny Engraving in Banner */}
          <text x="50" y="99" textAnchor="middle" fill="#7c2d12" fontSize="5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            ESTD. 2011
          </text>
        </svg>
      </div>

      {/* College Typography */}
      {variant !== 'shield-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight leading-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
              SHANTA INSTITUTE OF TECHNOLOGY
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-2">
              <span className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${isDark ? 'text-amber-400' : 'text-orange-600'}`}>
                A Unit of SGI &bull; Kalaburagi
              </span>
              <span className={`hidden md:inline text-[9px] px-1.5 py-0.2 rounded font-medium ${isDark ? 'bg-indigo-950 text-indigo-200 border border-indigo-800' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                VTU Affiliated &bull; AICTE Approved
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
