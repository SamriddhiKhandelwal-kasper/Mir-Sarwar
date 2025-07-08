// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.jpg" alt="logo" className='logo-icon'></img>
        <span className='mir-gradient'>MIR</span> SARWAR</div>
      <ul className="nav-links">
       <li><Link to="/">Home</Link></li>
       <li><a href="#mystory">Mystory</a></li>
       <li><a href="#showreel">Showreel</a></li>
       <li><a href="#filmograpgy">Filmography</a></li>
       <li><a href="#awards">Awards</a></li>
       <li><Link to="/about-details">About Details</Link></li>
       <li><a href="#gallery">Gallery</a></li>
       <li><a href="#news">News</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
