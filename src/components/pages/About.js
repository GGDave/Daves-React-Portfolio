import React from 'react';
import '../../css/About.css';
import Image from '../../images/Dave.png';
import Footer from '../Footer'

export default function About() {
  return (
    <div className="about-container">
      <img src={Image} alt="Your name" className="about-image" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus aliquet arcu, id maximus lacus varius sed. Morbi tempor lacinia odio, a mollis augue ultricies non. Duis rhoncus magna nec turpis viverra lacinia.</p>
        <p>You can find me on:
          <ul>
            <li><a href="https://github.com/GGDave">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
            <li><a href="mailto:youremail@gmail.com">Email</a></li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
};






