import React, { Component } from 'react';

import '../css/contact.css';
import SocialLinks from '../components/SocialLinks.js';
class Contact extends Component {

  render() {
    return(
      <div id="topPad">
        <div className="extraTopSpace">
          <div className="container" style={{position:'relative'}}>
            <div className="container formPad formText formWidth">
              <h1 id="letter-spacing" style={{paddingBottom: '35px'}}>STAY CONNECTED</h1>
              <p>Feel free to get in touch. You can reach me at these social networking sites
              or send me an email </p>
              <SocialLinks/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
