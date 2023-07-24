import React from 'react';
import '../../css/Contact.css';
import Footer from '../Footer'
export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter your email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="messageTextarea">Message</label>
          <textarea className="form-control" id="messageTextarea" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}