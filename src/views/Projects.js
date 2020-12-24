import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SocialLinks from "../components/SocialLinks.js";

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
                These are a few of my favorite projects. I love to learn about
                all kinds of technologies ranging from low-level systems to user
                experience web apps. My fascinations usually encapsulate <teal>automation</teal>
                , <teal>virtualization</teal>, and <teal>full-stack development</teal>. More of
                my projects can be found on my <a href="https://github.com/brainleq">GitHub</a>.
              </p>
            </div>
          </div>

          <div className="projects-separate center-text pad-sides">
            <h1 className="raleway projects-title-pad" id="letter-spacing">PATHOGERM</h1>
            <video className="patho-border" playsInline autoPlay muted loop height="600">
              <source src={Pathogerm} type="video/mp4" />
            </video>
            <div className="container">
              <p className="fade-in-slow" id="aboutPad">
                The goal of <patho>Pathogerm</patho> is to
                provide an intuitive platform that provides insight on various
                <patho> non-communicable</patho> and <patho>infectious diseases</patho> across different parts
                of the world.
              </p>
            </div>
          </div>

          <div style={{backgroundColor: "black"}}>
            <div className="projects-separate center-text pad-sides">
              <h1 className="raleway projects-title-pad" id="letter-spacing">COMPUTER GRAPHICS</h1>
              <div style={{paddingBottom: "3%"}}>
                <h3 className="raleway">NON-PHOTOREALISTIC RENDERING</h3>
                <LazyLoadImage className="cg-border" effect="opacity" src={Italy} height="350px" caption="hello" />
                <LazyLoadImage className="cg-border" effect="opacity" src={Holi} height="350px" />
                <LazyLoadImage className="cg-border" effect="opacity" src={Mumbai} height="350px" />
                <div className="container">
                  <p className="fade-in-slow" id="aboutPad">
                    This project generates <purp>acrylic paintings</purp> from <purp>photographs</purp>.
                    It accomplishes this with edge detection and direction field strategies.
                    All of this is implemented with GLSL.
                  </p>
                </div>
              </div>

              <h3 className="raleway">RAY TRACING</h3>
              <LazyLoadImage effect="opacity" src={Ray1} height="350px" style={{verticalAlign: "baseline"}}/>
              <video className="cg-border" playsInline autoPlay muted loop height="350">
                <source src={Ray2} type="video/mp4" />
              </video>
              <div className="container">
                <p className="fade-in-slow" id="aboutPad">
                  This project generates <blue>ray-traced images</blue> based off of the Phong
                  Illumination model. The program features optimized render times
                  by applying GPU acceleration, voxelization, and multi-threading.
                </p>
              </div>
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
            <div className="container">
              <p className="fade-in-slow" id="aboutPad">
                This project features <teal>neural networks</teal> learning to play <teal>SuperTuxKart</teal>.
                The agents are built with reinforcement learning, object detection, and
                specially tuned models to race and play ice hockey.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Projects;
