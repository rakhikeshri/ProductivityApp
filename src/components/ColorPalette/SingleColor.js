import { useState } from "react";
import React from 'react'
import Clip from "./clipTransparent.png"

const SingleColor = ({ hexColor }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
    }

    return ( 
        <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
            <div className="content">
                <p>#{ hexColor }</p>
                <button onClick={ handleCopy(hexColor) }>
                    <img src={ Clip } alt="copy" />
                </button>
            </div>
            { copy ? <p className="copy-alert">Copied to clipboard</p> : null }
            
        </div>
    );
}
 
export default SingleColor;