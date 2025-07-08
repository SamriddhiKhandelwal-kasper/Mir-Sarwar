import React, { useState } from 'react';
import ContentCard from './ContentCard';
import GenreFilter from './GenreFilter';
import { ContentItem } from '../types/content';

interface ContentSectionProps {
  title: string;
  content: ContentItem[];
  genres?: string[];
  showSeeMore?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  content, 
  genres, 
  showSeeMore = false 
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const filteredContent = selectedGenre 
    ? content.filter(item => item.genre === selectedGenre)
    : content;

  // Special layout for trending section
  const isTrending = title.toLowerCase() === 'trending';
  const isMovies = title.toLowerCase() === 'movies';
  const isSeries = title.toLowerCase() === 'series';

  // Custom arrow SVG component - pointing right
  const CustomArrow = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="26" 
      height="25" 
      viewBox="0 0 26 25" 
      fill="none"
      style={{
        width: '24.424px',
        height: '24.424px',
        flexShrink: 0
      }}
    >
      <path 
        d="M14.5285 20.1335L22.1648 12.505M22.1648 12.505L14.5363 4.86881M22.1648 12.505L3.84709 12.4958" 
        stroke="#E52222" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        {isTrending ? (
          <div 
            className="flex flex-col justify-center flex-shrink-0"
            style={{
              display: 'flex',
              width: '305px',
              height: '65px',
              flexDirection: 'column',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <h2 
              className="text-center font-semibold leading-normal"
              style={{
                color: '#EBFAFF',
                textAlign: 'center',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal'
              }}
            >
              {title}
            </h2>
          </div>
        ) : isMovies || isSeries ? (
          <h2 
            className="text-center font-semibold leading-normal"
            style={{
              color: '#EBFAFF',
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal'
            }}
          >
            {title}
          </h2>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        )}
        {showSeeMore && (
          <button 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 group"
            style={{
              color: '#E52222'
            }}
          >
            <span 
              style={{
                color: '#E52222',
                fontFamily: 'Lato, sans-serif',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              See More
            </span>
            <CustomArrow />
          </button>
        )}
      </div>

      {/* Genre Filter */}
      {genres && (
        <GenreFilter 
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreSelect={setSelectedGenre}
        />
      )}

      {/* Content Grid */}
      {isTrending ? (
        // Special trending layout with horizontal scroll
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 pl-0">
            {filteredContent.map((item, index) => (
              <ContentCard key={item.id} content={item} isTrending={true} cardIndex={index} />
            ))}
          </div>
        </div>
      ) : (
        // Dynamic grid layout for movies and series with varying card sizes
        <div className="flex flex-wrap gap-6 items-start">
          {filteredContent.map((item, index) => (
            <ContentCard key={item.id} content={item} cardIndex={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ContentSection;