import React from 'react';
import './Aboutdetails.css';
export default function Aboutdetails() {
  return (
    <section className="details">
      <div className="details-content">
        <div className="details-image">
            <img src="details.png" alt='details'/>
            <h1>Mir Sarwar</h1>
        </div>
        <div className="details-text">
            <div className="verticall-lines"></div>
            <h3>Overview</h3>
            <p><span>BORN</span> - February 19,1977 Pandrethan,Srinagar, Jammu and Kashmir, India</p>
            <p><span>Birth name</span> -Mohammad Sarwar Mir</p>
            <div className="verticalll-lines"></div>
            <h2>Biography</h2>
            <p>Mir Sarwar is known for the Films like Bajrangi Bhaijaan (2015) , Dishoom (2016) , Jolly LLB 2 (2017) and has acted 
                in several Bollywood Films and his work has been appreciated by critics & masses. He is a Kashmir born Actor who
                has been part of several Theatre Plays in Hindi, Urdu , Kashmiri and English. He started his career 1999 in New Delhi
                as a Model. He switched to Theatre afterwards to nourish his acting skills and was part of several National School of
                Drama Workshops. Mir is trained in Martial Arts and is a National Medallist in Kick Boxing , Wu-Shu & Muay Thai which
                helps him to do his own stunts and fight sequences. Moreover he is an Award winning Photographer and won Award for the
                Play he Directed.</p>
            <div className="verticallll-lines"></div>    
            <h2>Family</h2>
            <p className='color-change'>Relatives</p>
            <div className="para-color">
            <p>Mohsin Mirza <span>(Niece or Nephew)</span></p>
            </div>
            <div className="verticallll4-lines"></div>   
            <h2>Trivia</h2>
            <p>Is a Kashmiri and often plays Kashmiri characters.</p>
            <p>Debuted in Bajrangi Bhaijaan as father of Harshali Malhotra.</p>
        </div>
      </div>
    </section>
  );
}
