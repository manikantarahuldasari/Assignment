import "./App.css";
// import Counter from "./Q1counter/Counter";
// import CountdownTimer from "./Q2countdown/Countdown";
import CurrencyConverter from "./Q3/Moneyconversion"; 
function App(){
  return(
    <div className="app">
      {/* <h2>COUNTER APP</h2> */}
      {/* <Counter/> */}
      {/* <CountdownTimer initialSeconds={20}/> */}
     {<CurrencyConverter/>} 
    </div>
  )
}
export default App;