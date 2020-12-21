import React, { Component } from 'react';

import '../css/page.css';
import SocialLinks from '../components/SocialLinks.js';

class Home extends Component {
  render() {
    return (
      <div>

        <div class="homeImg">
          <div class="center landing">
            <div class="frontTitle"><h1 class="landingTitleGap">BRIAN LEQUANG</h1></div>
            <h4 class="landingTitleGap">a student at The University of Texas at Austin with a passion for innovative technology</h4>
          </div>
          <SocialLinks/>
        </div>

        <div class="dark-back extra-space">
          <div class="white landing container">
            <h2 id="letter-spacing">WELCOME</h2>
            <p id="aboutPad">I am a machine learning enthusiast, a
            hobbyist programmer, and a computer science student at
            the University of Texas at Austin. Apart from my formal
            education, I enjoy spending my time working on independent
            CS projects as well as following the latest news in physics
            and astronomy. My goal is to contribute to the development of
            innovative technologies in the aerospace and automation industries.</p>
          </div>
        </div>

      </div>
    );
  }

}

export default Home;
