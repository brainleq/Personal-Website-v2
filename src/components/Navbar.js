import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "../css/Navbar.css"
import "../css/text.css";

class Navbar extends Component {
  componentDidMount () {
    var prevPosition = window.pageYOffset;
    var nav_element = document.getElementById("nav");
    window.onscroll = function() {
      var currentPosition = window.pageYOffset;
      if (currentPosition <= 0) {
        nav_element.style.top = "0";
      } else {
        nav_element.style.top = "-90px";
      }
      prevPosition = currentPosition;
    }
  }

  render() {
    // TODO: navbar is shifing some pixels to the right on other pages
    // TODO: toggle button transparent
    return (
      <nav className="navbar navbar-expand-lg fixed-top gradient-dark" id="nav">
        <div className="container">
          <a className="navbar-brand scrollN" href="/">Brian LeQuang</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li><a className="nav-link scrollN" href="/projects">Projects</a></li>
              <li><a className="nav-link scrollN" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
