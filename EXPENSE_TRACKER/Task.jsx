import React from 'react'
import "./Task.css"
import Table from "./Table"
import { useState } from 'react'

const Task = () => {
    const [state,setState] = useState("")
    const [store,setStore] = useState([])
    const [totalAmount,setTotalamount] = useState(0)
    const date = new Date().toLocaleDateString()
    const total = parseInt(totalAmount)
    const value = parseInt(state)

    const changeHandler = (event)=>{
        setState(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        event.target.reset()
    }

    const incHandler = ()=>{
        setTotalamount(total+value)
        setState("")
        setStore([...store,{
            Date:date,
            Total:total,
            Added:value,
            Removed:"0",
            Balance:total+value
        }])
    }
    const decHandler = ()=>{
        setTotalamount(total-value)
        setState("")
        setStore([...store,{
            Date:date,
            Total:total,
            Added:"0",
            Removed:total-value,
            Balance:total-value
        }])
    }

  return (
    <div>
        <center>
            <div className="container">
                <div className="col-md-12">
                    <form onSubmit={submitHandler}>
                        <input type="number" placeholder='ENTER VALUE' onChange={changeHandler}/>
                        <button className='bg-primary' onClick={incHandler}><i className='fa fa-plus-circle'></i></button>
                        <button className='bg-warning' onClick={decHandler}><i className='fa fa-minus-circle'></i></button>
                    </form>
                    <Table store={store}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Task