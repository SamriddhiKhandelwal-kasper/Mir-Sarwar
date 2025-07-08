import React, { useState } from 'react';
import { ContentItem } from '../types/content';

interface ContentCardProps {
  content: ContentItem;
  isTrending?: boolean;
  cardIndex?: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, isTrending = false, cardIndex = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define card dimensions based on index
  const getCardDimensions = () => {
    if (isTrending) {
      return { width: '208px', height: '296px', aspectRatio: '26/37' };
    }

    // For movies and series, vary the card sizes based on position
    switch (cardIndex % 6) {
      case 0: // Card 1
        return { width: '208px', height: '296px', aspectRatio: '26/37' };
      case 1: // Card 2
        return { width: '208px', height: '296px', aspectRatio: '26/37' };
      case 2: // Card 3
        return { width: '208px', height: '296px', aspectRatio: '26/37' };
      case 3: // Card 4
        return { width: '208px', height: '296px', aspectRatio: '26/37' };
      case 4: // Card 5 - Larger
        return { width: '276px', height: '311px', aspectRatio: '276/311' };
      case 5: // Card 6 - Narrow
        return { width: '120px', height: '296px', aspectRatio: '15/37' };
      default:
        return { width: '208px', height: '296px', aspectRatio: '26/37' };
    }
  };

  const dimensions = getCardDimensions();
  const imageHeight = cardIndex % 6 === 4 ? '255px' : '240px'; // Adjust image height for larger card

  return (
    <div 
      className={`relative group cursor-pointer ${isTrending ? 'flex-shrink-0' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
      style={{ 
        width: dimensions.width, 
        height: dimensions.height, 
        flexShrink: 0 
      }}
    >
      {/* Glass Plus Icon - Always visible for trending cards */}
      <button 
        className={`absolute top-3 left-3 z-20 transition-all duration-200 ${
          isTrending ? 'opacity-100 scale-100' : (isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75')
        }`}
        style={{
          width: '56px',
          height: '56px',
          flexShrink: 0,
          background: 'linear-gradient(228deg, rgba(0, 0, 0, 0.52) -15.08%, rgba(0, 0, 0, 0.22) 90.95%)',
          backdropFilter: 'blur(2.5px)',
          borderRadius: '12px'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="56" 
          height="56" 
          viewBox="0 0 56 56" 
          fill="none"
          className="w-full h-full"
        >
          <g clipPath="url(#clip0_1_1939)">
            <rect width="56" height="56" rx="12" fill="url(#paint0_linear_1_1939)"/>
            <rect x="26" y="16" width="5" height="24" rx="2" fill="#EBFAFF"/>
            <rect x="16.5" y="30.5" width="5" height="24" rx="2" transform="rotate(-90 16.5 30.5)" fill="#EBFAFF"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_1_1939" x1="68.5" y1="-4" x2="6.5" y2="52.5" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0.52"/>
              <stop offset="1" stopOpacity="0.22"/>
            </linearGradient>
            <clipPath id="clip0_1_1939">
              <rect width="56" height="56" rx="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>

      {/* Content Image Container */}
      <div 
        className="relative overflow-hidden rounded-lg w-full"
        style={{
          height: imageHeight
        }}
      >
        <img 
          src={content.image}
          alt={content.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{ aspectRatio: dimensions.aspectRatio }}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* Genre Badge - Only show for non-trending cards */}
        {content.genre && !isTrending && (
          <div className="absolute bottom-3 left-3 right-3">
            <span className={`inline-block bg-black/90 text-white px-3 py-1.5 rounded-md text-center w-full truncate font-medium ${
              cardIndex % 6 === 5 ? 'text-xs' : 'text-sm'
            }`}>
              {content.genre}
            </span>
          </div>
        )}
      </div>

      {/* Content Info - Only show for non-trending cards */}
      {!isTrending && (
        <div className="mt-3 space-y-2 h-[53px] flex flex-col justify-start">
          <h3 className={`text-white font-semibold leading-tight line-clamp-2 ${
            cardIndex % 6 === 5 ? 'text-sm' : 'text-base'
          }`}>
            {content.title}
          </h3>
          {content.year && (
            <p className={`text-gray-400 font-medium ${
              cardIndex % 6 === 5 ? 'text-xs' : 'text-sm'
            }`}>
              {content.year}
            </p>
          )}
        </div>
      )}

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-lg border-2 border-red-500 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default ContentCard;