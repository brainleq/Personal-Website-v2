import React, { Component } from "react";

import "../css/page.css";
import SocialLinks from "../components/SocialLinks.js";
import Hotjava from "../images/hotjava.png"

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
          <div class="row white landing">
            <div class="col-md-4 aboutImg">
              <img src={Hotjava} alt="hotjava" height="563" width="375" />
            </div>
            <div class="col-md-8 extra-space">
              <h1 id="letter-spacing">WELCOME</h1>
              <p id="aboutPad">I am a machine learning enthusiast, a
                hobbyist programmer, and a computer science student at
                the University of Texas at Austin. Apart from my formal
                education, I enjoy spending my time working on independent
                CS projects as well as following the latest news in physics
                and astronomy. My goal is to contribute to the development of
                innovative technologies in the aerospace and automation industries.
              </p>
              <p id="aboutPad">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Home;
