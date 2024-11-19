
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Lab from './components/Lab';
import Support from "./components/Support"
import NotFound from "./components/NotFound"
import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">

     <ul>
       <li>
        <NavLink to = "/" >Home Page</NavLink>
       </li>
       <li>
       <NavLink to = "/support" >Support</NavLink>
       </li>
       <li>
       <NavLink to = "/about" >About</NavLink>
       </li>
       <li>
       <NavLink to = "/lab" >Labs</NavLink>
       </li>
     </ul>

     <Routes>
        <Route path='/' element ={<MainHeader/>}>
          <Route index element ={<Home/>}/>
          <Route path='/support' element ={<Support/>} />
          <Route path='/about' element ={<About/>} />
          <Route path='/lab' element ={<Lab/>} />
          <Route path='*' element ={<NotFound/>} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
