import React from 'react';
import image1 from '../../images/workdayScheduler.png';
import image2 from '../../images/kodingKitchen.png';
import image3 from '../../images/txteditor.png';
import image4 from '../../images/techblog.png';
import image5 from '../../images/WAW.png';
import image6 from '../../images/Dash.png';
export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://ggdave.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image1} alt="My Image"/>
            <div className="card-body">
              <h4 className="card-title">Workday Scheduler</h4>
              <p className="card-text">A simple calendar app for scheduling your workday</p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://ggdave.github.io/Koding-Kitchen/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image2} alt="Project 2"/>
            <div className="card-body">
              <h4 className="card-title">koding Kitchen</h4>
              <p className="card-text">An app that quickly allow you to pull up tasty recipes based on ingredients on hand </p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://davids-txt-editor-95ccd7bbc6b8.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image3} alt="Project 3"/>
            <div className="card-body">
              <h4 className="card-title">Dave's JATE</h4>
              <p className="card-text">An online instalable text editor</p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://daves-tech-blog-5dcca7838055.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image4} alt="Project 4"/>
            <div className="card-body">
              <h4 className="card-title">Daves Tech Blog</h4>
              <p className="card-text">A place where we can talk about tech!</p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://whiskers-and-wagz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image5} alt="Project 5"/>
            <div className="card-body">
              <h4 className="card-title">Whiskerz and Wagz!</h4>
              <p className="card-text">Adopt a pet today!!!</p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
          <a href="https://ggdave.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={image6} alt="Project 6"/>
            <div className="card-body">
              <h4 className="card-title">Dave's Weather Dashboard</h4>
              <p className="card-text">Allows you to view the weekly forecast</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}