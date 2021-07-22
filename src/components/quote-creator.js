import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './quote-editor.css'

function QuoteCreator() {
  const [quoteData, setQuoteData] = useState({})

  function handleChange(e) {
      setQuoteData({
          quote: (e.target.form.quote.value) ? e.target.form.quote.value : '',
          name: (e.target.form.name.value) ? e.target.form.name.value : '',
          img_url: (e.target.form.img_url.value) ? e.target.form.img_url.value : ''
      })
  }

    async function handleSubmit(e) {
        e.preventDefault()
        let URL = `https://real-housewives-server.herokuapp.com/newquote`
        await fetch(URL, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                quote: quoteData.quote,
                name: quoteData.name,
                img_url: quoteData.img_url
            })
        })
        window.location.reload()
    }

    return (
        <div className="QuoteEditor">
          <form className="QuoteForm classes.root" onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
          <div className='groupInput'>
            <TextField id='outlined-multiple-flexible' multiline label="Quote" name='quote' className="groupField" required />     
            <TextField label="Housewife" name='name' className="groupField" required/>
          </div>
          <div className='groupInput'>
            <TextField id='outlined-multiple-flexible' multiline label="Image URL" defaultValue={'https://i.insider.com/5df773d8fd9db276fe0a6c55?width=1136&format=jpeg'} name='img_url' className="groupField" required />
          </div>
          <div className="buttonInput">
          <Button type='submit' className="submitButton">Submit</Button>
          </div>
        </form>
      </div>
    )
  }


export default QuoteCreator;