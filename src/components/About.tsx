import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
export default function About() {
    const navigate = useNavigate();
  return (
    <section className='about'>
        <div className="overlay">
        <div className="about-content">
            <div className="about-image">
                <img src="about-mir.jpg" alt="about" className='mir-image'/>
                <a href="https://youtu.be/l8s0G0JOaCg?si=zTGYY_CThPownhm-" 
                target="_blank"
                rel="noopener noreferrer">
                <img src="youtube.jpg" alt="youtube icon" className='youtube-image'/>
                </a>   
            </div>
            <div className="about-text">
                <h2>ABOUT</h2>
                <h1>MY STORY</h1>
                <div className="underlining"></div>
                <p>In Delhi, working in theatre with renowed directors and attending National School of 
                    Drama workshops.
                </p>
                <p>He gained recognition with roles in Bollywood films like Bajrangi Bhaijaan (2015),
                    Phantom (2015), Dishoom (2016), Kedarnath(2018), and Kesari(2019).
                </p>
                <p>
                    Apart from acting, he promotes Kashmiri cinema by producing and directing films 
                    in the region.
                </p>
                <div className="about-buttons">
                    <button className='btn1'>Get in Touch</button>
                    <button className='btn2' onClick={() => navigate('/about-details')}>MORE ABOUT ME +</button>
                </div>
            </div>
            </div>
        </div>
    </section>

  );
}
