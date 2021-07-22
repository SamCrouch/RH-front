import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Housewives from './components/Housewives.js';
import Nav from './components/Nav.js'

function App() {


  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/housewives" component={Housewives} />
        </Switch>
      </Router> 
    </div>

  )
}

export default App;