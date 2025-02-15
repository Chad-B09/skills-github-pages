import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 200" className={className} role="img" aria-label="Elusys Therapeutics">
      <defs>
        <clipPath id="circleClip">
          <circle cx="100" cy="100" r="100"/>
        </clipPath>
      </defs>
      <g>
        {/* Blue circle with Y symbol */}
        <circle cx="100" cy="100" r="100" fill="#0066CC"/>
        <g clipPath="url(#circleClip)">
          <path 
            d="M60,40 L100,90 L140,40 M100,90 L100,160" 
            stroke="white" 
            strokeWidth="30" 
            strokeLinecap="round"
            fill="none"
          />
        </g>
        
        {/* Elusys text */}
        <text x="240" y="130" fontSize="120" fontFamily="Arial, sans-serif" fontWeight="bold">
          Elusys
        </text>
        
        {/* Therapeutics, Inc. text */}
        <text x="240" y="180" fontSize="40" fontFamily="Arial, sans-serif" fontStyle="italic" fill="#666666">
          THERAPEUTICS, INC.
        </text>
      </g>
    </svg>
  );
}