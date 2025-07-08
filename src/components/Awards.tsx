import React from 'react';
import './Awards.css';
import { FaTrophy, FaRegStar, FaAward } from 'react-icons/fa';
export default function Awards() {
  return (
    <section className='awards' id='awards'>
        <div className="awards-content">
            <div className="awards-text">
                <h2>Awards</h2>
                <h1>Awards & Recognition </h1>
                <div className="underline"></div>
                <p>Celebrating excellence and recognition across film, television, and artistic
                    endeavors throughout my career.
                </p>
            </div>
            <div className="awards-cards">
                <div className="cards">
                <h2><FaTrophy className='cards-icon'/> Best Supporting Actor</h2>
                <p>Acting •2023</p>
                <p>International Film Festival of India</p>
                </div>
                <div className="cards">
                <h2><FaRegStar className='cards-icon'/> Outstanding Performances</h2>
                <p>Acting •2022</p>
                <p>Kashmir Film Accociation</p>
                </div>
                <div className="cards">
                <h2><FaAward className='cards-icon'/> Best Director</h2>
                <p>Directing •2021</p>
                <p>Mumbai Independent Film Festival </p>
                </div>
                <div className="cards">
                <h2><FaTrophy className='cards-icon'/> Jury Special Mention</h2>
                <p>Acting •2022</p>
                <p>Asian Film Awards</p>
                </div>
                <div className="cards">
                <h2><FaRegStar className='cards-icon'/> Best Ensemble Cast</h2>
                <p>Acting •2109</p>
                <p>Bollywood Film Critics Circle</p>
                </div>
                <div className="cards">
                <h2><FaAward className='cards-icon'/> Breakthrough Director</h2>
                <p>Directing •2018</p>
                <p>South Asian Cinema Foundation</p>
                </div>
            </div>
        </div>
        <div className="section-seperators"></div>
    </section>
    
  );
}
