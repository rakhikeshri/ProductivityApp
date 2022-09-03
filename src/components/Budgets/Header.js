import React from 'react'
import './budgets.css'

const Header = ({totalExpense}) => {
  return (
    <header className='budgets-header'>
        <h1 className='budgets-title'>Budgets</h1>
        <div className='total-expense'>Total - Rs. {totalExpense}/-</div>
    </header>
  )
}

export default Header