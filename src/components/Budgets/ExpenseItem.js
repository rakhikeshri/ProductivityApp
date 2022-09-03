import React from 'react';

function ExpenseItem({expense, index, removeExpense}) {
  let date = new Date(expense.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = i => {
    removeExpense(i);
  }

  return (
    <div className="expense-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      <div className="added-desc">{expense.desc}</div>
      <div className="added-price">Rs. {expense.price}/-</div>
      <div className="added-date">{day + "/" + month + "/" + year}</div>
    </div>
  )
}

export default ExpenseItem;