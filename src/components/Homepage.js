import './Homepage.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

function Homepage() {

  const [randomQuote, setRandomQuote] =useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  const [newRandQuote, setNewRandQuote] = useState(false)

useEffect(() => {
    async function getQuote() {
        await fetch('https://real-housewives-server.herokuapp.com/randomquote')
        .then(data => data.json())
        .then(json => {
            setRandomQuote(json[0])
        })
    }
    getQuote()
}, [hasLoaded, newRandQuote])

if(!hasLoaded){
    setHasLoaded(true)
}

function newQuote() {
    setNewRandQuote(!newRandQuote)
}
 console.log(randomQuote.img_url)
    return (
      <div className='homepage'>
        <div className='quotebox'>
          <div>
          {randomQuote.quote}  
          </div>
          <div className='quoteHw'>
            ~{randomQuote.name}  
          </div>
          <div>
          <Button onClick={newQuote} variant="contained" color="secondary">New Quote</Button>
        </div>
        </div>


      </div>
    )
}

export default Homepage;