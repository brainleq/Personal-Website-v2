import React, { Component } from 'react';

import '../css/socialLinks.css';
import github from '../images/icons/github.png'
import facebook from '../images/icons/facebook.png'
import linkedin from '../images/icons/linkedIn.png'
import email from '../images/icons/email.png'

class SocialLinks extends Component {
  render() {
    return(
      <div class="links">
        <ul id="in-line">
          <li><a href="https://github.com/brainleq"><img src={github} id="icon"></img></a></li>
          <li><a href="https://www.linkedin.com/in/brian-lequang-200bb9182/"><img src={linkedin} id="icon"></img></a></li>
          <li><a href="mailto:brian.lequang@gmail.com"><img src={email} id="icon"></img></a></li>
        </ul>
      </div>
    );
  }

}

export default SocialLinks;
