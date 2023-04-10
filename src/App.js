import React from 'react';
import {  Blog, Features, Footer, Header, Possibility, WhatGPt3 } from './containers';
import {  CTA, Brand, Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header/>
        </div>

        <Brand />
        <WhatGPt3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App