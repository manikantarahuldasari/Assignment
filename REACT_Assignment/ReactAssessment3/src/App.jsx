import "./App.css"; 
// import NestedJSXElement from "./Q1/NestedJSXElement";
// import DynamicTable from "./Q2/DynamicTable";
// import GridLayout from "./Q3/GridLayout";
// import FormDynamically from "./Q4/FormDynamically";
// import Styling from "./Q5/Styling";
// import ThemeSwitcher from "./Q6/ThemeSwitcher";
import Profile from "./Q8/Profile";
import SearchBar from "./Q7/SearchBar";
import Product from "./Q9/Product";
import Gallery from "./Q10/Gallery";
import Todolist from "./Q11/Todolist";
import LoginForm from "./Q12/LoginForm";

function App(){
  const names=["alice","bob","charlie","alas"]
   const images=[
    {url:"https://static.toiimg.com/thumb/msid-113193500,width-400,resizemode-4/113193500.jpg"},
    {url:"https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"},
    {url:"https://static.vecteezy.com/system/resources/thumbnails/026/992/343/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLhKeKDjgocMWx2Cc1eYtlVIMkPyO3hiyMw&s"}
    ]

  return(
    <div className="app">
    {/* <NestedJSXElement/> */}
    {/* <DynamicTable/>
    <GridLayout/> */}
    {/* <FormDynamically/> */}
    {/* <Styling/> */}
    {/* <ThemeSwitcher/> */}
    <SearchBar names={names}/>
    <Profile name="Alice" Bio="FULL STACK WEB DEVELOPER" image="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"/>
    <Product  pName="iphone"
    pPrice="$1000"
    pImage="https://static.toiimg.com/thumb/msid-113193500,width-400,resizemode-4/113193500.jpg"/>
    <Gallery images={images}/>
    <Todolist/>
    <LoginForm/>
    </div>
  )
}
export default App;