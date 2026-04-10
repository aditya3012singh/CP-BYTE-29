import React from 'react';

/**
 * Reusable Button component.
 *
 * Variants:
 *   - "primary"      → filled cyan, sharp corners, sweep hover effect (HeroSection)
 *   - "outline"      → transparent bg, cyan border, sharp corners (HeroSection)
 *   - "solidRounded" → filled cyan, rounded corners, gradient overlay (Navbar desktop)
 *   - "solidFull"    → filled cyan, rounded, full-width friendly (Navbar mobile)
 *
 * Pass any extra Tailwind classes via `className` (padding, font-size, width, etc.).
 */
const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  /* ---- shared across every variant ---- */
  const base =
    'group relative inline-flex items-center justify-center font-bold tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]';

  /* ---- per-variant outer classes ---- */
  const variantClasses = {
    primary:
      'bg-cyan-400 text-[#070B14] border border-cyan-400 rounded-none hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-1',
    outline:
      'bg-transparent text-cyan-400 border border-cyan-400/30 rounded-none hover:border-cyan-400 hover:bg-cyan-500/10 hover:-translate-y-1',
    solidRounded:
      'text-[#060a12] bg-cyan-400 rounded hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#060a12]',
    solidFull:
      'text-[#060a12] bg-cyan-400 rounded hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
  };

  return (
    <button
      type={type}
      className={`${base} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Label — keeps text above any overlay */}
      <span className="relative z-10 flex text-center">{children}</span>

      {/* Sweep overlay — primary only */}
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-white/30 -translate-x-full skew-x-12 group-hover:transition-transform group-hover:duration-700 group-hover:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-full pointer-events-none" />
      )}

      {/* Gradient overlay — solidRounded only */}
      {variant === 'solidRounded' && (
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      )}
    </button>
  );
};

export default Button;
