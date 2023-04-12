/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>This landing page is built by Parth Parekh to showcase his sharp skills in frontend development. It is built using React and a UI framework, and it is designed to be user-friendly and visually appealing. The page features a variety of sections, including a portfolio, a blog, and a contact form. It is a great example of Parth's skills and abilities, and it is sure to impress potential employers and clients.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='gpt3__header-content-people' />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='gpt3__header-image' />
    </div>
  </div>
);
export default Header