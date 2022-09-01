import React from 'react'

const Table = ({store,deleteHandler,editHandler}) => {
  return (
    <div className="col-md-10">
        <table className='table'>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>AGE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {
                store.map((event,index)=>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{event.name}</td>
                    <td>{event.role}</td>
                    <td>{event.age}</td>
                    <td><i className='fa fa-edit' style={{"color":"yellow"}} onClick={()=>editHandler(index)}></i> </td>
                    <td><i className='fa fa-trash-o' style={{"color":"red"}} onClick={()=>deleteHandler(index)}></i></td>
                </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}
export default Table