import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Calendar, Clock, Film, Mail,Twitter,Facebook,Instagram,Youtube } from 'lucide-react';
import latest1 from "../../assets/images/latest1.jpg";
import latest2 from "../../assets/images/latest2.jpg";
import latest3 from "../../assets/images/latest3.png";

import latest4 from "../../assets/images/latest4.png";
import latest5 from '../../assets/images/latest5.png';
import latest6 from '../../assets/images/latest6.png';
import acting from '../../assets/images/acting.png';
import newsmain from '../../assets/images/newsmain.png';
import gallery1 from '../../assets/images/gallery1.png';
import gallery2 from '../../assets/images/gallery2.png';
import gallery3 from '../../assets/images/gallery3.png';
import start1 from '../../assets/images/start1.png';

import './index.css';
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredMovies = [
    {
      id: 1,
      title: "Panipat",
      subtitle: "THE GREAT BETRAYAL",
      year: "2019",
      rating: "U/A 16+",
      duration: "2h 50m",
      genre: "DRAMA",
      description: "In 18th-century India, a Maratha commander leads his army in preparation for a fierce battle against Afghan invaders in this film based on real events.",
      starring: "Arjun Kapoor, Sanjay Dutt, Kriti Sanon",
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: 5
    }
  ];

const latestMovies = [
  { title: "New Start 1", image: start1 },
  { title: "A Glimpse", image: latest1 },
  { title: "Panipat", image: latest2 },
  { title: "Kedarnath", image: latest3 },
  { title: "Hindustan Zindabad", image: latest4 },
  { title: "Dishoom", image: latest5 },
  { title: "Kesari", image: latest6 }
];


  const galleryImages = [
  { image: gallery1 },
  { image: gallery2 },
  { image: gallery3 }
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  const currentMovie = featuredMovies[currentSlide];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Removed background image only */}
      <section className="relative bg-black" style={{ height: '140vh' }}>
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Main Content - Perfectly Centered */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-10">
          <div className="mb-4">
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">MOVIES</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight uppercase mx-auto">
            LATEST MOVIES
          </h1>
          
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 text-sm font-semibold tracking-wider transition-colors duration-300 uppercase">
            VIEW MORE →
          </button>
        </div>

        {/* Latest Movies Scroll Section - Updated */}
<div className="absolute bottom-[400px] left-0 right-0 z-10 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-center mb-6">
      <div className="text-center w-full">
        <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">MOVIES</span>
        <h2 className="text-3xl font-bold mt-1 uppercase">LATEST MOVIES</h2>
      </div>
    </div>

    <div className="relative">
      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-1">
        {latestMovies.map((movie, index) => (
          <div
            key={index}
            className="group cursor-pointer flex-shrink-0 w-[200px] snap-center"
          >
            <div className="relative overflow-hidden rounded aspect-[2/3]">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/* Panipat Info Card - Adjusted Position */}
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-8 z-20">
  <div className="bg-black/95 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
    <div className="flex items-center gap-4 w-full">
      <img
        src={currentMovie.image}
        alt={currentMovie.title}
        className="w-20 h-28 object-cover rounded flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-red-500 mb-1">{currentMovie.title}</h2>
        <p className="text-xs text-gray-300 mb-2 uppercase tracking-wider">{currentMovie.subtitle}</p>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(currentMovie.stars)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span>{currentMovie.year}</span>
          <span>|</span>
          <span>{currentMovie.rating}</span>
          <span>|</span>
          <span>{currentMovie.duration}</span>
          <span>|</span>
          <span>{currentMovie.genre}</span>
        </div>
        <p className="text-gray-300 text-xs mb-2 leading-relaxed line-clamp-2">{currentMovie.description}</p>
        <p className="text-xs text-gray-400 mb-3">
          Starring {currentMovie.starring}
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase">
          WATCH NOW
        </button>
      </div>
    </div>
  </div>
</div>
</section>

      {/* Added divider line */}
      <div className="border-t border-gray-800 w-full"></div>

      {/* Acting Section - Updated Version */}
<section className="py-16 px-8 bg-black">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">Filmography</span>
      <h2 className="text-4xl font-bold mt-2 mb-4 uppercase">Acting</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
        A selection of my notable roles in film, television, and theater production. Each 
        character represents a unique challenge and creative expression.
      </p>
    </div>


    {/* Full-width image */}
    <div className="w-full mb-8">
      <img 
        src={acting}
        alt="Acting Featured"
        className="w-full h-auto object-cover rounded"
      />
    </div>

    {/* Centered button */}
    <div className="flex justify-center">
      <button className="bg-red-600 hover:bg-red-700 px-6 py-2 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase">
        VIEW COMPLETE FILMOGRAPHY
      </button>
    </div>
  </div>
</section>

      {/* Added divider line */}
      <div className="border-t border-gray-800 w-full"></div>

      {/* Gallery Section */}
      <section className="py-16 px-8 bg-black" id="gallery">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">Captured Moments</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 uppercase">Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
            A curated selection of photographs from film sets, behind-the-scenes moments, 
            and personal milestones throughout my career.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase">
            Gallery
          </button>
        </div>
      </section>

      {/* Added divider line */}
      <div className="border-t border-gray-800 w-full"></div>

      {/* News Section */}
      <section className="py-16 px-8 bg-black" id="news">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">News</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 uppercase">Latest News</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
              Stay updated with my latest projects, announcements, and media features. 
              Follow my journey in the entertainment industry.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative rounded overflow-hidden">
              <img 
  src={newsmain}
  alt="Featured News"
  className="w-full h-80 object-cover"
/>

                
                
                
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-3">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded mr-2 uppercase">
                    Film
                  </span>
                  <span className="text-yellow-400 text-xs">📅 JUNE 15, 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">New Film Announcement: 'Beyond the Horizon'</h3>
                <p className="text-gray-300 mb-4 max-w-xl text-sm">Excited to announce my upcoming project where I'll be playing the lead role in the international co-production 'Beyond the Horizon'.</p>
                <div className="flex gap-3">
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-semibold transition-colors duration-300 uppercase">
                    Read Full Story
                  </button>
                  <button className="border border-white/30 hover:border-white px-4 py-2 text-xs font-semibold transition-colors duration-300 uppercase">
                    📖 LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-lg">
            <div className="bg-gray-900/50 rounded overflow-hidden group cursor-pointer w-full max-w-xs">
              <img 
                src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&dpr=1"
                alt="News"
                className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-2">
                <div className="mb-1">
                  <span className="text-yellow-400 text-xs">📅 JUNE 15, 2025</span>
                </div>
                <h4 className="text-xs font-bold mb-1 group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  Nominated for Best Actor at International Film Festival
                </h4>
                <p className="text-gray-400 text-xs mb-2 line-clamp-2">Honored to be nominated for Best Actor for my performance.</p>
                <button className="bg-red-600 hover:bg-red-700 px-2 py-1 text-xs font-semibold transition-colors duration-300 uppercase">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded overflow-hidden group cursor-pointer w-full max-w-xs">
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&dpr=1"
                alt="News"
                className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-2">
                <div className="mb-1">
                  <span className="text-yellow-400 text-xs">📅 JUNE 15, 2025</span>
                </div>
                <h4 className="text-xs font-bold mb-1 group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  New Movie Project Announced
                </h4>
                <p className="text-gray-400 text-xs mb-2 line-clamp-2">Excited to share details about my upcoming thriller project.</p>
                <button className="bg-red-600 hover:bg-red-700 px-2 py-1 text-xs font-semibold transition-colors duration-300 uppercase">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Added divider line */}
      <div className="border-t border-gray-800 w-full"></div>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-black" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">Let's Connect</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 uppercase">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
              For professional inquiries, collaboration, or press, please reach out the 
              contact form below or through my management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white text-black px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white text-black px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white text-black px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Message( Minimum 20 Character Needed )"
                    className="w-full bg-white text-black px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="border border-red-600 p-8">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 uppercase">Enquiries</h3>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-bold">Email</span>
                </div>
                <p className="text-sm text-gray-300">mirsarwar@gmail.com</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Connect</h3>
                <div className="flex gap-4">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;