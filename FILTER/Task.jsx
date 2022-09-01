import React from 'react'
import { useState } from 'react'
import "./Task.css"
import Data from "./Data.json"

const Task = () => {
    const [state,setstate] = useState("")
  return (
    <div>
        <center>
            <div className="container">
                <div className="col-md">
                    <input type="text" placeholder='SEARCH STATE' onChange={(event)=>setstate(event.target.value)}/>
                    <div className="col-md-4">
                        {
                            Data.filter((city)=>city.name.toLowerCase().includes(state.toLowerCase())).map((city)=>
                            {
                                return(
                                    <div>
                                        {city.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Task