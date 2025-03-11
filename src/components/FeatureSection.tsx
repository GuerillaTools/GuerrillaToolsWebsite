import React, { useEffect, useRef, useState } from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  bulletPoints?: string[]; // Optional array of bullet points
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imagePosition,
  bulletPoints
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`
        flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} 
        items-center gap-8 md:gap-16 py-16 border-b border-gray-800
        ${isVisible ? 'animate-fade-in' : 'opacity-0'}
      `}
    >
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-green-400">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {bulletPoints.map((point, index) => (
              <li key={index} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full md:w-1/2 aspect-square max-w-[1024px] overflow-hidden rounded-lg border border-gray-700 transform hover:scale-[1.02] transition-transform">
        <img 
          src={imageUrl} 
          alt={title}
          width={1024}
          height={1024}
          className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default FeatureSection;