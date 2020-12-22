import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "../css/Navbar.css"

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
    // <nav className="navbar navbar-expand-lg fixed-top gradient-dark" id="nav">
    // <a className="navbar-brand scrollN" href="/">Brian LeQuang</a>
    // <li><a className="nav-link scrollN" id="projects" href="/projects">Projects</a></li>
    // <li><a className="nav-link scrollN" id="contact" href="/contact">Contact</a></li>
  }

  render() {
    // TODO: navbar is shifing some pixels to the right on other pages
    // TODO: toggle button transparent
    // var homeNav = "navbar navbar-expand-lg fixed-top gradient-dark";
    // var otherNav = "navbar navbar-expand-lg fixed-top";
    // var wBrand = "navbar-brand scrollN";
    // var bBrand = "navbar-brand black"
    // var white = "nav-link scrollN";
    // var black = "nav-link black"
    return (
      <nav className="navbar navbar-expand-lg fixed-top gradient-dark" id="nav">
        <div className="container">
          <a className="navbar-brand scrollN" href="/">Brian LeQuang</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li><a className="nav-link scrollN" href="/about">About</a></li>
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
