import "./App.css";
import Parent from "./Q1/Parent";
import MultipleProps from "./Q2/MultipleProps";
import ParentBtn from "./Q3/ParentBtn";
import InputParent from "./Q4/InputParent";
import ConditionalParent from "./Q5/ConditionalParent";
import ParentData from "./Q6/ParentData";
import ParentValues from "./Q7/ParentValues";
import ParentObj from "./Q8/ParentObj";
import ParentAddItem from "./Q9/ParentAddItem";
function App(){
  return(
    <div>
      <Parent/>
     <MultipleProps/>
     <ParentBtn/>
     <InputParent/>
     <ConditionalParent/>
     <ParentData/>
     <ParentValues/>
     <ParentObj/>
     <ParentAddItem/>
    </div>
  )
}
export default App;