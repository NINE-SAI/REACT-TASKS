import React from 'react'

const CurrencyOptions = ({currencyOptions,updateHandler}) => {
    const Options = currencyOptions.map((data,index)=>{
        return <option key={index} value={data}>{data}</option>
    })

  return (
    <div>
        <select onChange={updateHandler}>
            {Options}
        </select>
    </div>
  )
}

export default CurrencyOptions