import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../css/page.css";

import SocialLinks from "../components/SocialLinks.js";
import Hotjava from "../images/hotjava.png"


class Home extends Component {
  render() {
    return (
      <div className="dark-back">
        <div className="homeImg fade-in">
          <div className="fade-in-slow">
            <div className="center raleway">
              <div className="frontTitle"><h1 className="landingTitleGap">BRIAN LEQUANG</h1></div>
              <h4 className="landingTitleGap">a student at The University of Texas at Austin with a passion for innovative technology</h4>
            </div>
            <SocialLinks/>
          </div>
        </div>

        <div className="dark-back extra-space fade-in">
          <div className="row white raleway">
            <div className="col-md-4 aboutImg">
              <LazyLoadImage effect="opacity" src={Hotjava} height="536" width="375" />
              {/*<img src={Hotjava} alt="hotjava" height="563" width="375" />*/}
            </div>
            <div className="col-md-8 extra-space">
              <h1 id="letter-spacing">WELCOME</h1>
              <p id="aboutPad">I am a machine learning enthusiast, a
                hobbyist programmer, and a computer science student at
                the University of Texas at Austin. Apart from my formal
                education, I enjoy spending my time working on independent
                CS projects as well as following the latest news in physics
                and astronomy. My goal is to contribute to the development of
                innovative technologies in the aerospace and automation industries.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Home;
