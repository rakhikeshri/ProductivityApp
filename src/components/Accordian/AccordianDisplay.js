import './accordian.css'
import React, { useState } from 'react'
export const AccordianDisplay = ({ question, answer }) =>{
    const [showInfo, setShowInfo] = useState(false)
    return(
        <article className="single-qa">
            <div className="question-head">
            <h1>{question}</h1>
            <button className="show-hide-qa" 
            onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? '-' : '+'}
            </button>
            </div>
            {showInfo && <p>{answer}</p>}
        </article>
    )
}