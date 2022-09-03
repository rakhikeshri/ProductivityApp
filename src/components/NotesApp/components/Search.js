import React from 'react'
import { MdSearch } from 'react-icons/md'
import '../NotesApp.css'

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
        <input onChange={(e) => handleSearchNote(e.target.value)} type="text" placeholder='type to search...' />
        <MdSearch className='search-icon-notes' size = '1.5em' />
    </div>
  )
}

export default Search