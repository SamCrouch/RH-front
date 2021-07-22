import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popup from 'reactjs-popup';
import QuoteEditor from './quote-editor.js';
import './Housewives.css'


function Housewives() {
const [allQuotes, setAllQuotes] = useState([])

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
    },
  });

const classes = useStyles();

useEffect(() => {
    async function getAllQuotes() {
      await fetch('https://real-housewives-server.herokuapp.com/quotes')
      .then(data => data.json())
      .then( json => {
          const response = json;
          setAllQuotes(response)
      })
    }
    getAllQuotes()
}, [])


async function handleDelete(id) {
      await fetch('https://real-housewives-server.herokuapp.com/delete', {
        method: 'DELETE',
        mode:'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: id
      })
  })
  window.location.reload()
}

    return (
        <div>
      <h2>Housewives</h2>
      <div className = 'cardsContainer'>
      {allQuotes.map((quote) =>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={quote.img_url}
          title={quote.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {quote.quote} ~{quote.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Popup trigger={  
        <Button size="small" color="primary">
          Edit
        </Button>
        }>
            <div className='popup'><QuoteEditor quote={quote} /></div>
        </Popup>
        <Button size="small" color="primary" onClick={() => handleDelete(quote.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
    )}
    </div>
    </div>




    )
}

export default Housewives;