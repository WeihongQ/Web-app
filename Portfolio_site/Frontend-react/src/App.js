import React from 'react';

import { About, Footer, Header, Resume, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>

      <div id='About'>
      <Navbar />
      <Header />
      </div>

     <div id='Portfolio'>
     <Work />
     </div>

     <div id='Skills & Experience'>
     <Skills />
     </div>

     <div id='CV/Reseme'>
     <Resume />
     </div>

      <div id='Contact'>
      <Footer />
      </div>
     

    </div>
  )
};

export default App;