import React, { Component } from 'react';

import '../css/page.css';
import Hotjava from "../images/hotjava.png"

class About extends Component {
  render() {
    return(
      <div className="dark-back">
        <div className="aboutImg">
          <img src={Hotjava} alt="hotjava" height="750" width="500" />
        </div>
      </div>
    );
  }
}

export default About;
