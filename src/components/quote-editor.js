import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './quote-editor.css'

function QuoteEditor(props={quote:{quote: '', name:'', img_url:''}}) {
  const [quoteData, setQuoteData] = useState({})

  function handleChange(e) {
      setQuoteData({
          quote: (e.target.form.quote.value),
          name: (e.target.form.name.value),
          img_url: (e.target.form.img_url.value)
      })
  }

    async function handleSubmit(e) {
        e.preventDefault()
        let URL = `https://real-housewives-server.herokuapp.com/${props.quote.id}`
        await fetch(URL, {
            method: 'PATCH',
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

    function handleClose() {
      window.location.reload()
  }

    return (
        <div className="QuoteEditor">
          <form className="QuoteForm classes.root" onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
          <div className='groupInput'>
            <TextField id='outlined-multiple-flexible' multiline label="Quote" defaultValue={props.quote.quote} name='quote' className="groupField" required />     
          </div>
          <div className='groupInput'>    
            <TextField label="Housewife" defaultValue={props.quote.name} name='name' className="groupField" required/>
          </div>
          <div className='groupInput'>
            <TextField id='outlined-multiple-flexible' multiline label="Image URL" defaultValue={props.quote.img_url} name='img_url' className="groupField" required />
          </div>
          <div className="Buttons">
          <Button variant="contained" color='secondary' className='submitButton' type='submit'>Submit</Button>
          <Button variant="contained" color='secondary' className='cancelButton' onClick={() => handleClose()}>Cancel</Button>
          </div>
        </form>
      </div>
    )
  }


export default QuoteEditor;