import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../css/page.css";
import "../css/text.css";
import "../css/projects.css"

import Pathogerm from "../images/pathogerm.mp4"
import Holi from "../images/npr_holi.gif"
import Italy from "../images/npr_italy.gif"
import Mumbai from "../images/npr_mumbai.gif"
import Ray1 from "../images/ray1.png"
import Ray2 from "../images/ray2.mp4"
import Kart1 from "../images/kart1.mp4"
import Kart2 from "../images/kart2.mp4"

class Projects extends Component {
  render() {
    return (
      <div className="dark-back titillium">
        <div className="fade-in">

          <div style={{backgroundColor: "black"}}>
            <div className="projects-desc center-text pad-sides">
              <h1 className="raleway" id="letter-spacing">PROJECTS</h1>
              <p className="fade-in-slow" id="aboutPad">
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

          <div className="projects-separate center-text pad-sides">
            <h1 className="raleway projects-title-pad" id="letter-spacing">PATHOGERM</h1>
            <video className="patho-border" playsInline autoPlay muted loop height="600">
              <source src={Pathogerm} type="video/mp4" />
            </video>
            <p className="fade-in-slow" id="aboutPad">
              With the evolution of new infectious diseases alongside the modern
              epidemiological transitions of illness, it is imperative to spread
              awareness about disease transmission and the associated prevention
              in an increasingly globalized world. The goal of Pathogerm is to
              provide an intuitive platform that provides insight on various
              non-communicable and infectious diseases across different parts
              of the world.
            </p>
          </div>

          <div style={{backgroundColor: "black"}}>
            <div className="projects-separate center-text pad-sides">
              <h1 className="raleway projects-title-pad" id="letter-spacing">COMPUTER GRAPHICS</h1>
              <div style={{paddingBottom: "3%"}}>
                <h3 className="raleway">NON-PHOTOREALISTIC RENDERING</h3>
                <LazyLoadImage className="cg-border" effect="opacity" src={Italy} height="350px" caption="hello" />
                <LazyLoadImage className="cg-border" effect="opacity" src={Holi} height="350px" />
                <LazyLoadImage className="cg-border" effect="opacity" src={Mumbai} height="350px" />
              </div>

              <h3 className="raleway">RAY TRACING</h3>
              <LazyLoadImage effect="opacity" src={Ray1} height="350px" style={{verticalAlign: "baseline"}}/>
              <video className="cg-border" playsInline autoPlay muted loop height="350">
                <source src={Ray2} type="video/mp4" />
              </video>
              <p className="fade-in-slow" id="aboutPad">
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

          <div className="projects-separate center-text pad-sides">
            <h1 className="raleway projects-title-pad" id="letter-spacing">MACHINE LEARNING</h1>
            <video playsInline autoPlay muted loop height="350">
              <source src={Kart1} type="video/mp4" />
            </video>
            <video playsInline autoPlay muted loop height="350">
              <source src={Kart2} type="video/mp4" />
            </video>
            <p className="fade-in-slow" id="aboutPad">
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
    );
  }

}

export default Projects;
