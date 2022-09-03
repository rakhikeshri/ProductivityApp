import React,{useState, useEffect, useRef} from 'react'
import List from './Components/List'
import Alert from './Components/Alert'
import './todo.css'

const getLocalStorage = () => {
  let todoList = JSON.parse(localStorage.getItem("todo-list"))
  if(todoList){
    return todoList
  }else{
    return []
  }
}

const TodoApp = () => {
  const [list,setList] = useState(getLocalStorage())
  const [name,setName] = useState("")
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show: false, msg:"", type:""})

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(list))
  }, [list])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      showAlert(true,"danger", "Please enter value")
    }else if(name && isEditing){
      setList(
        list.map(item => {
          if(item.id === editId){
            return {...item, title: name}
          }
          return item
        })
      )
      setName("")
      setEditId(null)
      setIsEditing(false)
      showAlert(true, "success", "todo edited")
      inputRef.current.focus()
    }else{
      showAlert(true, "success", "todo added to the list")
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName("")
      inputRef.current.focus()
    }
  };
  const showAlert = ( show = false, type = "", msg = "" ) => {
    setAlert({ show, type , msg })
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "todo deleted")
    setList(list.filter(item => item.id !== id))
    inputRef.current.focus()
  };
  const editItem = (id) => {
    const editItem = list.find(item => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(editItem.title)
    inputRef.current.focus()
  };
  const clearList = () => {
    showAlert(true, "danger", "Cleared Todos")
    setList([])
    inputRef.current.focus()
  };
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
          <h1 style={{ marginBottom:"1.5rem", textAlign:"center" }}>Today's List - todo</h1>
          <div className='mb-3 form'>
            <input ref={inputRef} type="text" className="form-control input" placeholder='Enter the todos' onChange={(e)=>setName(e.target.value)} value={name}/>
            <button type='submit' className='todo-btn'>{isEditing ? "Edit" : "Add"}</button>
          </div>
      </form>
      {list.length < 1 ? <h3 className='notodo' style={{textAlign:"center", paddingTop:"15px"}}>there is no todo, you can add new todos :)</h3> : (
        <div style={{ marginTop:"2rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem}/>  
            <button className='todo-btn clear-todo-btn' onClick={clearList}>Clear Todos</button>
        </div>
      )}
    </section>
  )
}

export default TodoApp

