import React, { Component } from 'react';

import "../css/contact.css";
import "../css/page.css"
import "../css/text.css";
import SocialLinks from "../components/SocialLinks.js";
class Contact extends Component {

  render() {
    return(
      <div className="black-back fade-in" id="topPad" style={{minHeight: "100vh"}}>
        <div className="extraTopSpace">
          <div className="container" style={{position:"relative"}}>
            <div className="container formPad formText formWidth white">
              <h1 id="letter-spacing" style={{paddingBottom: "35px"}}>STAY CONNECTED</h1>
              <p style={{paddingBottom: "20px"}}>
                Feel free to get in touch. You can reach me at these social networking sites
                or send me an email
              </p>
              <SocialLinks/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
