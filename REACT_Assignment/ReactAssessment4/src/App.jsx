import "./App.css";
import UserGreeting,{UserFarewell} from "./Q1.1/UserComponents";
// import PdfViewer from "./Q1.2/PdfViewer";
import UserProfile from "./Q1.3/UserProfile";
import UserStatus from "./Q1.3/UserStatus";
import User from "./Q1.4/User";
import Gallery from "./Q1.5/Gallery";
import image1 from "../src/images/image1.jpeg"
import image2 from "../src/images/image2.jpg"
import image3 from "../src/images/image3.jpg"



import FilteredList from "./Q2.1/FilteredList";
import Captalize from "./Q2.2/Captalize";
import LongestWord from "./Q2.3/LongestWord";
import FilterItems from "./Q2.4/FilterItems";
import SearchableList from "./Q2.5/SearchableList";
function App(){
  const details={
    name:"Jane",
     email:"jane@example.com" ,
     isOnline:"true"
  }
  const images=[image1,image2,image3]
  return(
    <div className="app">
      <UserGreeting/>
      <UserFarewell/>
      {/* <PdfViewer/> */}
      <UserProfile name={details.name} email={details.email} />
      <UserStatus isOnline={details.isOnline} />
      <User/>
       <Gallery images={images}/>
       <FilteredList numbers={[1, 3, 7, 9, 2]}/>
       <Captalize words={['react', 'javascript', 'html']}/>
       <LongestWord words={['React', 'JavaScript', 'HTML']}/>
       <FilterItems/>
       <SearchableList/>
    </div>
  )
}
export default App;