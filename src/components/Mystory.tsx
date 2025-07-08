import React from 'react';
import './Mystory.css';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
export default function Mystory() {
  return (
    <section className='story' id="mystory">
        <div className="story-content">
            <div className="story-uppertext">
            <h2>BIOGRAPHICAL</h2>
            <h1>My Story</h1>
            <div className='underline1'></div>
            <p>The chapters that shaped my journey in cinama and art</p>
            </div> 
        <div className="timeline-bar">
            <div className="timeline-underline"></div>
            
            <div className="timeline-content">
              <FaArrowLeft className='timeline-arrows'/>
              <button>2008</button>
              <div className="active-year">
                <button className="active">2010</button>
                <div className="vertical-line"></div>
              </div>
              <button>2014</button>
              <button>2018</button>
              <button>2020</button>
              <FaArrowRight className='timeline-arrows'/>
            </div>
        </div>
        <div className="story-second-content">
        <div className="story-text">
          <h3>2000-2010: The Foundation Years</h3>
          <p>
            2000–2005: Started as a model and theatre actor in Delhi. Associated with top theatre
             groups and honed his craft.
          </p>
          <p>
            2006: Trained in direction and screenwriting; worked with established directors in theatre 
            circuits.
          </p>
          <p>
            2008–2010: Moved to Mumbai to pursue films. Continued training in acting and took up 
            smaller roles in TV and ads.
          </p>
          </div>
        <div className="story-image">
            <img src="showreel.jpg" alt="story"/>
        </div>
        </div>
        </div>
    </section>
  );
}
