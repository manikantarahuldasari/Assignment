import { useState } from "react";
const CurrencyConverter=()=>{
    const[amount,setamount]=useState("");
    const[convertedAmount,setConvertedAmount]=useState(null);
    const [exchangeRate,setExchangeRate]=useState(0.01176);

    const handleconvert=()=>{
        const result=parsefloat(amount)*exchangeRate;
        setConvertedAmount(result.toFixed(2));
    }

return (
    <div>
        <h3>Currnecy Converter</h3>
        <label>Amount in INR:

        <input type="number" value={amount}
        onChange={(e)=>setamount(e.target.value)} />
        </label>
        <button onClick={handleconvert}>Convert</button>
        <p> convertedAmount:<strong>${setConvertedAmount}USD</strong></p>
    </div>
)
}
export default CurrencyConverter