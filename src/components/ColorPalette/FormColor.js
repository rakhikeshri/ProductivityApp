import React, { useState, useRef, useEffect } from "react";
import Values from "values.js";
import "./ColorPalette.css"

const FormColor = ({ setList }) => {
    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = e => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(5);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.focus();
    }, []);


    return ( 
        <div className="form-color">
            <h1>Color Palette Generator</h1>
            <form onSubmit={ handleGenerator } className="colorPalette-form">
                <input ref={textRef} type="text" placeholder="#fff" onChange={e => setColor(e.target.value)} />
                <input type="submit" value="Generate" />
            </form>
            { error ? <p className="error">No color exist...</p> :null }
        </div>
    );
}
 
export default FormColor;