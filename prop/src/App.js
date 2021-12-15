import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  
  return (
    <div>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about' element ={<About/>} />
         <Route path='/contact' element ={<Contact/>}/>
       </Routes>
    </div>
  );
}

export default App;
