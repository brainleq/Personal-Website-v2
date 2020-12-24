import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../css/page.css";
import "../css/text.css";

import SocialLinks from "../components/SocialLinks.js";
import Hotjava from "../images/hotjava.png"


class Home extends Component {
  render() {
    return (
      <div className="black-back">
        <div className="homeImg fade-in">
          <div className="fade-in-slow">
            <div className="center titillium">
              <div className="frontTitle"><h1 className="raleway landingTitleGap">BRIAN LEQUANG</h1></div>
              <h4 className="landingTitleGap">a student at The University of Texas at Austin with a passion for innovative technology</h4>
            </div>
            <SocialLinks/>
          </div>
        </div>

        <div className="extra-space fade-in">
          <div className="row white titillium">
            <div className="col-md-4 aboutImg">
              <LazyLoadImage effect="opacity" src={Hotjava} height="536" width="375" />
            </div>
            <div className="col-md-8 extra-space">
              <h1 className="raleway" id="letter-spacing">WELCOME</h1>
              <p id="aboutPad">I am a machine learning enthusiast, a
                hobbyist programmer, and a computer science student at
                the <burnt-o>University of Texas at Austin</burnt-o>. Apart from my formal
                education, I enjoy spending my time working on independent
                CS projects as well as following the latest news in <blue>physics </blue>
                and <blue>astronomy</blue>. My goal is to contribute to the development of
                innovative technologies in the aerospace and automation industries.
              </p>
              <p><a href="/projects">Projects</a></p>
              <p><a href="/contact">Contact</a></p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Home;
