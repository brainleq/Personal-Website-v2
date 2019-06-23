import React, { Component } from 'react';

import '../css/page.css';
import github from '../images/icons/github.png'
import facebook from '../images/icons/facebook.png'
import linkedin from '../images/icons/linkedIn.png'
import email from '../images/icons/email.png'

class Home extends Component {
  render() {
    return (
      <div>

        <div class="homeImg">
          <div class="center landing">
            <div class="frontTitle"><h1>BRIAN LEQUANG</h1></div>
            <h4>a student at the University of Texas at Austin with a passion for innovative technology</h4>
          </div>
          <div class="links">
            <ul id="in-line">
              <li>
                <a href="https://github.com/brainleq"><img src={github} id="icon"></img></a>
              </li>
              <li>
                <a href="https://www.facebook.com/brian.lequang"><img src={facebook} id="icon"></img></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brian-lequang-200bb9182/"><img src={linkedin} id="icon"></img></a>
              </li>
              <li>
                <a href="/contact"><img src={email} id="icon"></img></a>
              </li>
            </ul>
          </div>
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
          <div class="landing black container">
            <h2 id="letter-spacing">TECHNICAL</h2>

            <div class="row">
              <div class="col-md-6 tilePad" id="centerText">
                <h3 id="letter-spacing">JAVA</h3>
              </div>
              <div class="col-md-6 tilePad" id="centerText">
                <h3 id="letter-spacing">C</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 tilePad" id="centerText">
                <h3 id="letter-spacing">WEB</h3>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Home;
