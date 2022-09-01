import React from 'react'
import { useState } from 'react'
import "./Todo.css"

const Todo = () => {
    const [todo,setTodo] = useState("")
    const [todos,setTodos] = useState([])
    const [editId,setEditId] = useState(0)

    const submitHandler = (event)=>{
        event.preventDefault()
        if(todo !== ''){
            setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
            setTodo("")
        }
        if(editId){
            const editTodo = todos.find((i)=>i.id===editId)
            const updateTodos = todos.map((t)=>
            t.id===editTodo.id ? (t={id:t.id,todo}) : {id:t.id,todo:t.todo})
            setTodos(updateTodos)
            setEditId(0)
            setTodo("")
            return
        }
    }
    const editHandler = (id)=>{
        const editTodo = todos.find((i)=>i.id === id)
        setTodo(editTodo.todo)
        setEditId(id)
    }
    const deleteHandler = (id)=>{
        const deleteTodo = todos.filter((to)=>to.id !== id)
        setTodos([...deleteTodo])
    }

  return (
    <center className="center">
        <div className="container">
          <h1>TODO LIST</h1>
            <form onSubmit={submitHandler}>
                <input onChange={(event)=>setTodo(event.target.value)} value={todo} type="text"/>
                <button type="submit">{editId ? "EDIT" : "GO"}</button>
            </form>
            <ul className="allTodos">
                {
                    todos.map((t)=>(
                        <li className="singleTodo">
                            <span className="todoText">{t.todo}</span>
                            <button onClick={()=>editHandler(t.id)}>EDIT</button>
                            <button onClick={()=>deleteHandler(t.id)}>DELETE</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </center>
  )
}
export default Todo