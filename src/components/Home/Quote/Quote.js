import React, { useState, useEffect } from 'react'
import quotesData from './quotesData.js'
import './Quote.css'

const Quote = () => {
  const [quotes, setQuotes] = useState("")

  const getQuote = () => {
    let randomNum = Math.floor(Math.random() * quotesData.length) 
    setQuotes(quotesData[randomNum])
  }

  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div className='quote-box'> 
        <h1 className='quotes'>{quotes.quote}</h1>  
    </div>
  )
}

export default Quote