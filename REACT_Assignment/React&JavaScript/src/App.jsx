import "./App.css";
import Greeting from "./greeting/Greeting";
import Counter from "./counter/Counter";
import Product from "./product/Product";
import UserProfile from "./userprofile/UserProfile";
import List from "./list/List";
function App(){
  return(
    <div className="app">
      <Greeting name="john" />
      <Counter/>
      <Product/>
      <UserProfile/>
      <List/>
    </div>
  )
}
export default App;