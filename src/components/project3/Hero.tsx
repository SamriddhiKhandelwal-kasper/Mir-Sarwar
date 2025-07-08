import React from 'react';
import { Play, Info } from 'lucide-react';
import { HeroContent } from '../types/content';

interface HeroProps {
  content: HeroContent;
  onNext: () => void;
  onPrev: () => void;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero banner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-12">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          {/* Featured Role Badge and Year */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 w-32 h-12 flex items-center justify-center">
              <span 
                style={{
                  color: '#FFF',
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '13.472px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '2.021px'
                }}
              >
                FEATURED ROLE
              </span>
            </div>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-medium">📅 2015</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            className="gradient-text"
            style={{
              fontFamily: 'Gelasio, serif',
              fontSize: '43.111px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '2.156px'
            }}
          >
            Bajrangi Bhaijaan
          </h1>

          {/* Subtitle */}
          <p 
            style={{
              color: '#FFF',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '17.676px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              letterSpacing: '0.884px'
            }}
          >
            as a supporting role, Rauf Aziz
          </p>

          {/* Description */}
          <p 
            style={{
              width: '518px',
              color: '#FFF',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '13.472px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '0.674px'
            }}
          >
            played a supporting role in Bajrangi Bhaijaan. His character, Rauf Aziz—the father of the mute girl Shahida (Munni)—is important to the plot but appears only briefly.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-40 h-12 flex items-center justify-center space-x-2 transition-colors duration-200">
              <Play className="w-5 h-5 fill-current" />
              <span>Watch Movie</span>
            </button>
            <button className="bg-transparent hover:bg-gray-800/50 text-white font-semibold px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200 border border-gray-600">
              <Info className="w-5 h-5" />
              <span>More Info</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;