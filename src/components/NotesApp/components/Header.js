import React from 'react'
import '../NotesApp.css'

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1 className="title-notes">Daily Notes</h1>
      <button onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)} className='toggleBtn'>Toggle Mode</button>
    </div>
  )
}

export default Header
