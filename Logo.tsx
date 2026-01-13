export default function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Candle base */}
      <rect x="42" y="60" width="16" height="30" rx="2" fill="currentColor" opacity="0.9" />
      
      {/* Flame */}
      <ellipse cx="50" cy="52" rx="8" ry="12" fill="#FFD700" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="6" ry="10" fill="#FFA500" opacity="0.5" />
      <ellipse cx="50" cy="48" rx="4" ry="7" fill="#FF6B35" opacity="0.7" />
      <path
        d="M 50 38 Q 48 42 50 48 Q 52 42 50 38 Z"
        fill="#FFEB3B"
        opacity="0.9"
      />
      
      {/* Decorative circle */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Cross elements */}
      <path
        d="M 50 8 L 50 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 42 16 L 58 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
