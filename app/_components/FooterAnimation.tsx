import { useMemo } from "react";
import GlyphLogo from "../_icons/GlyphLogo";

interface FooterAnimationProps {
  speed?: number;
  size?: number;
}

export default function FooterAnimation({
  speed = 20,
  size = 300,
}: FooterAnimationProps) {
  const radius = 40;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  const repeatedText = "CIRCULAIRE     CIRCULAIRE     CIRCULAIRE     CIRCULAIRE\u00A0";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >

      <div
        className="absolute w-full h-full"
        style={{
          animation: `orbit ${speed}s linear infinite`,
          fontSize: "12.5px",
          fontFamily: "var(--font-accent)",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d={`
                M50,50
                m-${radius},0
                a${radius},${radius} 0 1,1 ${radius * 2},0
                a${radius},${radius} 0 1,1 -${radius * 2},0
              `}
            />
          </defs>
          <text fill="currentColor" letterSpacing="0.5px">
            <textPath
              href="#circlePath"
              startOffset="0%"
              textLength={circumference}
              lengthAdjust="spacing"
            >
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>

      <div className="absolute">
        <GlyphLogo className="text-neutral-500"/>
      </div>
    </div>
  );
}
