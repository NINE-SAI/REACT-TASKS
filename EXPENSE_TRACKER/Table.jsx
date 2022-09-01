import React from 'react'

const Table = ({store}) => {
  return (
    <div className="col-md-10">
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>DATE</th>
                <th>INCREMENT</th>
                <th>DECREMENT</th>
                <th>BALANCE</th>
            </tr>
        </thead>
        <tbody>
            {
                store.map((data,index)=>{
                    return<tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.Date}</td>
                        <td>{data.Added}</td>
                        <td>{data.Removed}</td>
                        <td>{data.Balance}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
</div>
  )
}

export default Table