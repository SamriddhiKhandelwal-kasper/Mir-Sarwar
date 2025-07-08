import React from 'react';
import './Home.css';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="overlay">
        <div className="hero-content">
          <div className="hero-image">
            <div className='image-overlay'></div>
            <img src="/mir.png" alt="Mir Sarwar" />
          </div>
          <div className="hero-text">
            <div className="vertical-lines"></div>
            <h1><span className='miir-gradient'>MIR</span> SARWAR</h1>
            <h3>Actor <span>•</span> Director <span>•</span> Filmmaker <span>•</span> Model</h3>
            <p>
              With a decade of experience in Bollywood and beyond, I bring authentic performances and 
              compelling storytelling to every project. Based in Mumbai India, I’ve crafted a career 
              through diverse roles that challenge conventional boundaries.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View Portfolio</button>
              <Link to="/filmography" className="btn-secondary">Filmography →</Link>
            </div>
            <div className="hero-tags">
              <span className="tag-item">
                <FaRegStar className="tag-icons" />
                Award-Winning Performances
              </span>
              <span className='tag-icon'>
                <img src="cinema.jpg" alt="logo"/>
                International Cinema
              </span>
              <span className="tag-item">
                <FaRegStar className="tag-icons" />
                Critical-Acclaim
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-separator"></div>
    </section>
  );
}
