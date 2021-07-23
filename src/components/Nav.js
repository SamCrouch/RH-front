import {Link} from 'react-router-dom';
import './Nav.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Button: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Nav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              <Button component={Link} to="/" variant="contained" color='secondary'>
                Homepage
              </Button>
          </Typography>
            <Typography>
              <h2>The Authoritative Database of Real Housewives Quotes</h2>
            </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button component={Link} to="/housewives" variant="contained" color='secondary'>
                All Quotes
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Nav;