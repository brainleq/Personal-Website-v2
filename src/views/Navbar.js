import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

import '../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="nav">
        <a class="navbar-brand" href="/">Brian LeQuang</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <a className="nav-link" id="projects" href="/projects">Projects</a>
           </li>
          </ul>
          <ul class="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" id="contact" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default Navbar;
