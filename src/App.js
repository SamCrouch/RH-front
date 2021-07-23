import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Housewives from './components/Housewives.js';
import Nav from './components/Nav.js'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#9cadce'},
      secondary: {main: '#7ec4cf'},
      neutral: {main: '#cedfff'}
    },
  });

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
                <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/housewives" component={Housewives} />
          </Switch>
        </Router> 
      </ThemeProvider>
    </div>

  )
}

export default App;