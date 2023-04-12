import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div href='https://www.linkedin.com/in/parthparekh97/' className="gpt3__footer-btn">
      <p >To Request Early Access, Contact @Parth Parekh </p>
      <p > </p> 
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Created By Parth Parekh<br /> </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Parth Parekh</p> 
        <p>mr.parekhparth@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Practice and Implemented in April 2023</p>
    </div>
  </div>
);

export default Footer;