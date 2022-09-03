import React, { useState } from 'react'
import Values from 'values.js'
import './ColorPalette.css'
import DisplayColors from './DisplayColors.js';
import FormColor from './FormColor.js';

function ColorPalette() {
  const [list, setList] = useState(new Values('#ccc').all(5));

  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={list}/>
    </div>
  )
}

export default ColorPalette