import React from 'react';
import '../../css/Home.css';
import myImage from '../../images/Dave.png';
// import backgroundImage from '../../images/beach2.jpg';
export default function Home() {
  return (
    <div className=" d-flex align-items-center flex-column vh-600 home-container ">
      <img src={myImage} alt="Me" className="my-4 profile-image"/>
      <h1 className="text-center">Hello, I'm Dave</h1>
      <p className="text-center">I'm a software developer based in Phoenix AZ. Welcome to my portfolio!</p>
    </div>
  );
}
















