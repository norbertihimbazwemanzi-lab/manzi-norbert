import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg'
  };

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Glowing 3D-styled Monogram Emblem */}
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl blur-[3px] opacity-70 group-hover:opacity-100 transition duration-300" />
        <div
          className={`relative ${sizeClasses[size]} rounded-xl bg-slate-950 border border-sky-400/40 flex items-center justify-center font-bold font-mono tracking-tighter text-sky-400 shadow-xl overflow-hidden transition-transform duration-200 group-hover:scale-105`}
        >
          {/* Subtle inner grid glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/20" />
          <span className="relative z-10 font-extrabold bg-gradient-to-br from-sky-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
            IN
          </span>
          {/* Cyber decorative corner notch */}
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-sky-400/80 rounded-bl-sm" />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-sky-300 transition-colors">
            Ihimbazwe Manzi Norbert
          </span>
          <span className="text-[11px] font-mono text-sky-400/80 font-medium">
            Full-Stack Developer
          </span>
        </div>
      )}
    </div>
  );
};
