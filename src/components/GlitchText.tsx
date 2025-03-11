import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  fontSize?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, fontSize = "text-6xl md:text-8xl" }) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative">
      <h1 className={`${fontSize} font-bold tracking-wider text-white relative`}>
        <span className={`relative inline-block ${glitchActive ? 'animate-glitch' : ''}`}>
          {text}
          {glitchActive && (
            <>
              <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-70 animate-glitch-1" aria-hidden="true">
                {text}
              </span>
              <span className="absolute top-0 left-0 w-full h-full text-blue-500 opacity-70 animate-glitch-2" aria-hidden="true">
                {text}
              </span>
            </>
          )}
        </span>
      </h1>
    </div>
  );
};

export default GlitchText;