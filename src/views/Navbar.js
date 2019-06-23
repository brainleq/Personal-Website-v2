import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

import '../css/Navbar.css'

class Navbar extends Component {

  componentDidMount () {
    var prevPosition = window.pageYOffset;
    var nav_element = document.getElementById("nav");
    var navItems_element = document.getElementById("projects");
    window.onscroll = function() {
      var currentPosition = window.pageYOffset;
      if (currentPosition <= 0) {
        // If not scrolled
        nav_element.style.top = "0";
        nav_element.style.background = "";
      } else {
        nav_element.style.top = "-75px";
        //nav_element.style.background = "white";
      }
      prevPosition = currentPosition;
    }
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg fixed-top gradient-dark" id="nav">
            <div class="container">
        <a class="navbar-brand scrollN" href="/">Brian LeQuang</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" id="nav-items">
           <li><a className="nav-link scrollN" id="projects" href="/projects">Projects</a></li>
          </ul>
          <ul class="navbar-nav">
            <li><a className="nav-link scrollN" id="contact" href="/contact">Contact</a></li>
          </ul>
        </div>
            </div>
      </nav>
    );
  }
}

export default Navbar;
