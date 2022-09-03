import React,{useState, useEffect} from 'react'
import Header from './Header'
import Form from './Form'
import ExpenseList from './ExpenseList'

const getLocalStorage = () => {
  let budgets = JSON.parse(localStorage.getItem("react-budgets-data"));
  if (budgets) {
    return budgets;
  } else {
    return [];
  }
};

const Budgets = () => {
  const [expense, setExpense] = useState(getLocalStorage())
  const [totalExpense, setTotalExpense] = useState(0)

  useEffect(() => {
    localStorage.setItem("react-budgets-data", JSON.stringify(expense));
  }, [expense]);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < expense.length; i++){
      temp += parseInt(expense[i].price);
    }
    setTotalExpense(temp);
  }, [expense])

  const handleClearBudgets = () => {
    if(expense.length === 0){
      alert("The expense list is already empty.")
    }else{
      setExpense([])
    }
  }

  return (
    <div className='budgets-container'>
      <Header totalExpense={totalExpense} />
      <Form expense={expense} setExpense={setExpense}/>
      <hr style={{margin:"10px", marginTop:"20px"}}/>
      {expense.length < 1 ? <h3 className='no-expense'>No expense added, you can add new expenses.</h3> : (
        <ExpenseList expense={expense} setExpense={setExpense}/>
      )}
      <hr style={{margin:"10px", marginTop:"0"}}/>
      <button className='clear-all' onClick={handleClearBudgets}>Clear All Expenses</button>
    </div>
  )
}

export default Budgets
