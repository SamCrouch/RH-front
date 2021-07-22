import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Housewives from './components/Housewives.js';
import Nav from './components/Nav.js'

function App() {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/housewives" component={Housewives} />
      </Switch>
    </Router>
  )
}

export default App;
