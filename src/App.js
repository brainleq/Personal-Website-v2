import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './views/Home.js';
import Projects from './views/Projects.js';
import Contact from './views/Contact.js';
import { NoMatch } from './views/NoMatch.js';

import Navbar from './views/Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
