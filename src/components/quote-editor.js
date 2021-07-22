import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './quote-editor.css'

function QuoteEditor(props) {
  const [quoteData, setQuoteData] = useState({})

  function handleChange(e) {
      setQuoteData({
          quote: (e.target.form.quote) ? e.target.form.quote.value : '',
          name: (e.target.form.name) ? e.target.form.name.value : '',
          img_url: (e.target.form.img_url) ? e.target.form.img_url.value : ''
      })
  }

    async function handleSubmit(e) {
        let URL = `https://real-housewives-server.herokuapp.com/${props.quote.id}`
        await fetch(URL, {
            method: 'PATCH',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                quote: quoteData.quote,
                hw_id: quoteData.name,
                img_url: quoteData.img_url
            })
        })
        // window.location.reload()
    }

    return (
        <div className="QuoteEditor">
          <form className="QuoteForm classes.root" onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
          <div className='groupInput'>
            <TextField label="Quote" defaultValue={props.quote.quote} name='quote' className="groupField" required />     
            <TextField label="Housewife" defaultValue={props.quote.name} name='name' className="groupField" required/>
          </div>
          <div className='groupInput'>
            <TextField label="Image URL" defaultValue={props.quote.img_url} name='img_url' className="groupField" required />
          </div>
          <div className="buttonInput">
          <Button type='submit' className="submitButton">Submit</Button>
          </div>
        </form>
      </div>
    )
  }


export default QuoteEditor;