import "./Counter.css"
import { useState } from "react";
function Counter(){
    var[state,setState]=useState(0);
    function decCount(){
        setState(state-1)
    };
    function reset(){
        setState(0)
    }
    function inCre(){
        setState(state+1)
    }
    return(
        <div className="counter"> 
            <h2>{state}</h2>
            <br /> <button className="dec"   onClick={decCount}>Decrement</button>
            <button className="res"  onClick={reset}>Reset</button>
            <button className="inc" onClick={inCre}>Increament</button>
        </div>

    )
}
export default Counter;