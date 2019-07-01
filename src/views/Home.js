import React, { Component } from 'react';

import '../css/page.css';
import SocialLinks from '../components/SocialLinks.js';

class Home extends Component {
  render() {
    return (
      <div>

        <div class="homeImg">
          <div class="center landing">
            <div class="frontTitle"><h1>BRIAN LEQUANG</h1></div>
            <h4>a student at the University of Texas at Austin with a passion for innovative technology</h4>
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
            CS projects as well as following the latest in quantum physics
            and astronomy. My goal is to contribute to the development of
            innovative technologies in the aerospace and automation industries.</p>
          </div>
        </div>

        <div class="extra-space">
          <div class="black landing container">
            <h2 id="letter-spacing">TECHNICAL</h2>

            <div class="row" id="aboutPad">
              <div class="col-md-6 tilePad" id="centerText">
                <h3 id="letter-spacing">JAVA</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim nigger, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.</h6>
              </div>
              <div class="col-md-6 tilePad" id="centerText">
                <h3 id="letter-spacing">C</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute nigger dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.</h6>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 tilePad" id="centerText">
                <h3 id="letter-spacing">WEB</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut nigger et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.</h6>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Home;
