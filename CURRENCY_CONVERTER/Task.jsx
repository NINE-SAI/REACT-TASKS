import React , { useEffect , useState }  from 'react'
import "./Task.css"
import CurrencyOptions from './CurrencyOptions'

const Task = () => {
    const [currencyOptions,setCurrencyOptions] = useState([])
    const [fromCurrency,setFromCurrency] = useState("")
    const [toCurrency,setToCurrency] = useState("")
    const [fromAmount,setFromAmount] = useState(0)
    const [toAmount,setToAmount] = useState(0)
    const [currencyName,setCurrencyName] = useState({})

    useEffect(()=>{
        fetch("https://api.frankfurter.app/currencies")
        .then(response=>response.json())
        .then((data)=>{
            setCurrencyOptions(Object.keys(data))
            setFromCurrency(Object.keys(data)[0])
            setToCurrency(Object.keys(data)[0])
            setCurrencyName(data)
        })
    },[])
    useEffect(()=>{
        if(parseInt(fromAmount)===0){
            setToAmount(0)
        }else if(fromAmount===0){
            setToAmount("")
        }else if(fromCurrency===toCurrency){
            setToAmount(fromAmount)
        }else{
            fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`)
            .then(response=>response.json())
            .then((data)=>{
                setToAmount(Object.values(data.rates)[0])
            })
        }
    },[fromCurrency,fromAmount,toCurrency,toAmount])

  return (
    <div>
        <center>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h6>FROM</h6>
                        <CurrencyOptions currencyOptions={currencyOptions} updateHandler={event=>setFromCurrency(event.target.value)}/>
                        {currencyName[`${fromCurrency}`]}
                        <form>
                            <input type="text" value={fromAmount} onChange={event=>setFromAmount(event.target.value)}/>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h6>TO</h6>
                        <CurrencyOptions currencyOptions={currencyOptions} updateHandler={event=>setToCurrency(event.target.value)}/>
                        {currencyName[`${toCurrency}`]}
                        <form>
                            <input type="text" readOnly value={toAmount} onChange={event=>setToAmount(event.target.value)}/>
                        </form>
                    </div>
                    <div className="col-md-12 mb-3">
                        {fromAmount}{fromCurrency} = {toAmount}{toCurrency}
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Task