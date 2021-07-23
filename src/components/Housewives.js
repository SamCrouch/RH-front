import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Popup from 'reactjs-popup';
import QuoteEditor from './quote-editor.js';
import QuoteCreator from './quote-creator.js';
import './Housewives.css'



function Housewives() {
const [allQuotes, setAllQuotes] = useState([])
const [housewife, setHousewife] = useState('')
const [allHousewives, setAllHousewives] = useState([])


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 345,
      margin: 10,
    },
    media: {
      height: 400,
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

    async function getAllHousewives() {
        await fetch('https://real-housewives-server.herokuapp.com/housewives')
        .then(data => data.json())
        .then( json => {
            const response = json;
            setAllHousewives(response)
        })
      }
    getAllHousewives()

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

function handleSortChange(e) {
    setHousewife(e.target.value)
}

useEffect(() => {
    async function getAllSortedQuotes() {
      await fetch(`https://real-housewives-server.herokuapp.com/quotes?hw=${housewife}`)
      .then(data => data.json())
      .then( json => {
          const response = json;
          setAllQuotes(response)
      })
    }
    getAllSortedQuotes()
}, [housewife])

    return (
      <div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel></InputLabel>
            <Select
                value={housewife}
                onChange={handleSortChange}
                >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {allHousewives.map((hw) =>
              <MenuItem value={hw.name}>{hw.name}</MenuItem>
            )}
            </Select>
              <FormHelperText>Filter Quotes by Housewife</FormHelperText>
          </FormControl>
        </div>
      <div>
        <Popup trigger={<Button size="small" color="secondary" variant="contained">Add new Quote</Button>}>
          <div className='popup'><QuoteCreator/></div>
        </Popup>
      </div>
      <div className = 'cardsContainer'>
      {allQuotes.map((quote) =>
      <div>
      <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={quote.img_url}
          title={quote.name}
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p"> {quote.quote}</Typography>
          <Typography variant="body3" color="textSecondary" component="p">~{quote.name} </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Popup trigger={<Button size="small" color="primary">Edit</Button>} modal>
            <div className='popup'><QuoteEditor quote={quote} /></div>
        </Popup>
        <Button size="small" color="primary" onClick={() => handleDelete(quote.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
    </div>
    )}
    </div>
    </div>




    )
}

export default Housewives;