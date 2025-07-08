import React from 'react';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 pb-2">
      <button
        onClick={() => onGenreSelect('')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          selectedGenre === '' 
            ? 'bg-red-600 text-white' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreSelect(genre)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedGenre === genre 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;