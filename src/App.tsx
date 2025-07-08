import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Awards from './components/Awards.tsx';
import Showreel from './components/Showreel.tsx';
import Mystory from './components/Mystory.tsx';
import Aboutdetails from './pages/Aboutdetails.tsx';
import Project from './components/Project/App.jsx';

// Project 3 (media) components
import Hero from './components/project3/Hero';
import ContentSection from './components/project3/ContentSection';
import { movieGenres, seriesGenres, trendingContent, moviesContent, seriesContent, heroContent } from './content';

const App: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Awards />
            <Showreel />
            <Mystory />
            <Project /> 
          </>
        } />
        
        <Route path="/about-details" element={<Aboutdetails />} />

        
        <Route path="/filmography" element={
          <div className="min-h-screen bg-black text-white">
            <Hero 
              content={heroContent[currentHero]} 
              onNext={() => setCurrentHero((prev) => (prev + 1) % heroContent.length)}
              onPrev={() => setCurrentHero((prev) => (prev - 1 + heroContent.length) % heroContent.length)}
            />
            <div className="px-4 md:px-8 lg:px-12 space-y-12 pb-12">
              <ContentSection 
                title="Trending" 
                content={trendingContent}
                showSeeMore={true}
              />
              <ContentSection 
                title="Movies" 
                content={moviesContent}
                genres={movieGenres}
                showSeeMore={true}
              />
              <ContentSection 
                title="Series" 
                content={seriesContent}
                genres={seriesGenres}
                showSeeMore={true}
              />
            </div>
          </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;
