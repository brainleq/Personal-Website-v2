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
                <h6>Java is my first programming language and has been the cornerstone
                to many of my CS projects since 2013. It is my initial and primary approach
                to learning and understanding curious concepts ranging from core algorithms
                and data structures to object oriented design.</h6>
              </div>
              <div class="col-md-6 tilePad" id="centerText">
                <h3 id="letter-spacing">C</h3>
                <h6>C is exciting because of how close it is to low-level design. I have used
                C primarily for school and education, however I hope to exercise it in the future
                through low level data structure implementations and application hacking.
                It's fascinating to reverse engineer with assembly, manually manipulate memory,
                and gain a thorough understanding of the core interactions within the hardware.</h6>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 tilePad" id="centerText">
                <h3 id="letter-spacing">WEB</h3>
                <h6>JAVASCRIPT | HTML | CSS</h6>
                <h6>I've only recently began scratching the surface of front end development. In my curiosity,
                I created this website as a means to introduce myself to web development as well
                as a means to document my future projects and learning experiences. So far, I only have a basic
                front end with React and Bootstrap. I hope to one day learn about and implement a back end.</h6>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Home;
