import React, {useRef} from 'react'
import './budgets.css'

const Form = ({expense, setExpense}) => {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddExpense = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    if(desc.current.value === ""  || price.current.value === "" || date.current.value === ""){
      alert("please fill the details to save the expense.")
    }else{
      setExpense([...expense, {
        "desc" : desc.current.value,
        "price": price.current.value,
        "date": newD.getTime()
      }])
    }

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;

  }
   
  return (
    <form className='expense-form' onSubmit={AddExpense}>
      <div className='form-inner'>
        <input className='inputs-budgets desc' type='text' name='desc' id='desc' placeholder='e.g. rent' ref={desc}/>
        <input className='inputs-budgets price' type='number' name='price' id='price' placeholder='e.g. 100/-' ref={price}/>
        <input className='inputs-budgets date' type='date' name='date' id='date' placeholder='Expense date..' ref={date}/>
        <input className='inputs-budgets submit' type='submit' value='Add'/>
      </div>
    </form>
  )
}

export default Form