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
            <h3 id="letter-spacing">ABOUT ME</h3>
            <p id="aboutPad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

      </div>
    );
  }

}

export default Home;
