import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
import '../todo.css'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='container' >
        {items.map(item => {
            const {id, title} = item
            return (
                <ul className="lsit-group" key={id}>
                    <li className='list-group-item'>
                        <h3>{title}</h3>
                        <div className='fa-btns' style={{ float : "right" }}>
                            <button type='button' className='editBtn' onClick={() => editItem(id)}>
                                <FaEdit/>
                            </button>
                            <button type='button' className='deleteBtn' onClick={() => removeItem(id)}>
                                <FaTrash/>
                            </button>
                        </div>
                    </li>
              </ul>
            )
        })}
      
    </div>
  )
}

export default List
