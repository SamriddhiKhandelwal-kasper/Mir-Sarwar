import React from 'react';
import './Showreel.css';
import { FaPlay } from 'react-icons/fa';

export default function Showreel() {
  return (
    <section className="show" id="showreel">
      <div className="show-content">
        <div className="show-text">
            <h2>Glimpse</h2>
            <h1>Showreel</h1>
            <div className="underline1"></div>
            <p>A glimpse into my creative across acting, direction and modeling. This showcase
                represents the versatility and depth of my work in the entertainment industry,.
            </p>
        </div>
        <div className="show-image">
            <img src="showreel.jpg" alt="reel" className='reel-image'/>
            <a
    href="https://youtu.be/4mZmoUv2gss?si=Xf_P7pzRRVjKWDew"
    target="_blank"
    rel="noopener noreferrer"
  >
            <FaPlay className="play-icon"/>
            </a>
        </div>
      </div>
      <div className="section-seperators"></div>
    </section>
  );
}
