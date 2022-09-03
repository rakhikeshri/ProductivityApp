import SingleColor from "./SingleColor.js";
import React from 'react'


const DisplayColors = ({ list }) => {
    return ( 
        <div className="colors-box">
            {
                list.map((color, index) => (
                    <SingleColor key={index} hexColor={color.hex}/>
                ))
            }
        </div>
    );
}
 
export default DisplayColors;