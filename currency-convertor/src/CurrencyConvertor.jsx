import { IoMdSwap } from "react-icons/io";
import axios from "axios";
import { useEffect,useState } from "react";
import { motion } from "framer-motion"


const CurrencyConvertor = () => {

    const [currencies,setCurrencies] = useState({})
    const [fromCurrency,setFromCurrency] = useState('USD')
    const [toCurrency,setToCurrency] = useState('GBP')
    const [amount,setAmount] = useState("")
    const [convertedAmount,setConvertedAmount] = useState("")

useEffect(()=>{
    axios.get('https://api.frankfurter.app/currencies').then((res)=>{
        setCurrencies(res.data)
    })
},[])

useEffect(()=>{
    if (amount>=1) {
        axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`).then((res)=>{
            setConvertedAmount(JSON.stringify(res.data.rates[toCurrency]))
        })
    }
        
},[amount,toCurrency,fromCurrency])


function handleFromCurrencyChange (event) {
setFromCurrency(event.target.value)
}

function handleToCurrencyChange (event) {
    setToCurrency(event.target.value)
}

function handleSwap () {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
}

function handleAmount (event) {
setAmount(event.target.value)
}



  return (
    <div className="flex flex-col justify-center items-center">
   <div className="flex flex-wrap justify-center items-center md:gap-[60px] gap-[20px]">

    <motion.select initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5}}  className="w-[120px] h-[40px] bg-red-600 text-white bg-opacity-[0.7] cursor-pointer outline-none font-bold font-mono text-[20px] p-[4px]" name="currency" id="curr" value={fromCurrency} onChange={handleFromCurrencyChange}>
       {
       Object.keys(currencies).map((currency,value)=>{
       return (
        <option key={value}>{currency}</option>
        )
       })
       
       }
    </motion.select>

    <motion.button initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,delay:0.5}} onClick={handleSwap}><IoMdSwap className="text-white font-bold text-[40px]" /></motion.button>

    <motion.select initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5,delay:0.25}}  className="w-[120px] h-[40px] bg-slate-600 bg-opacity-[0.8] text-white cursor-pointer outline-none font-bold font-mono text-[20px] p-[4px]" name="currency" id="curr" value={toCurrency} onChange={handleToCurrencyChange}>
       {
       Object.keys(currencies).map((currency,value)=>{
       return (
        <option key={value}>{currency}</option>
        )
       })
       
       }
    </motion.select>

   </div>

   <div className="pt-[50px]">
    <motion.input initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,delay:0.75}}  className="w-[280px] h-[40px] p-[4px] outline-none font-bold font-mono text-[18px]" type="number" placeholder="Enter Amount" min={1} max={10000000000} onChange={handleAmount} value={amount}/>
   </div>

   {
   convertedAmount && <div className="pt-[30px] flex flex-wrap justify-center items-center">
    <p className="text-white font-mono font-bold text-[20px]">{amount && `${amount} ${fromCurrency} =  ${convertedAmount} ${toCurrency}`}</p>
   </div>
    }
    </div>
  )
}

export default CurrencyConvertor