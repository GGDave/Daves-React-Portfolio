import React from 'react';
import image1 from '../../images/workdayScheduler.png';
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
              <p className="card-text">Project 1 description...</p>
            </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="http://placehold.it/700x400" alt="Project 2"/>
            <div className="card-body">
              <h4 className="card-title">Project 2</h4>
              <p className="card-text">Project 2 description...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="http://placehold.it/700x400" alt="Project 3"/>
            <div className="card-body">
              <h4 className="card-title">Project 3</h4>
              <p className="card-text">Project 3 description...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}