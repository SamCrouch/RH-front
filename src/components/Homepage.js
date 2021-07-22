import './Homepage.css';
import { useState, useEffect, useRef } from 'react';


function Homepage() {

  const [randomQuote, setRandomQuote] =useState('')
  const [hasLoaded, setHasLoaded] = useState(false)
  const [newRandQuote, setNewRandQuote] = useState(false)
  const quoteText = useRef(null)
  const speakerName = useRef(null)

useEffect(() => {
    async function getQuote() {
        await fetch('https://real-housewives-server.herokuapp.com/randomquote')
        .then(data => data.json())
        .then(json => {
            setRandomQuote(`${json[0].quote} ~${json[0].name}`)
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

    return (
      <div>
        <div>
          <h2>{randomQuote}</h2>  
        </div>
        <div>
          <button onClick={newQuote}>New Quote</button>
        </div>
      </div>
    )
}

export default Homepage;