import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home"
import Login from './page/Login';
import SignUp from './page/SignUp'
import Dashboard from './page/Dashboard';
import { useState } from 'react';
function App() {

  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <div className="App">
        <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />

        <Routes>
           <Route path = "/"  element = {<Home/> }/>
           <Route path = "login"  element = {<Login/>} />
           <Route path = "/signup" element = {<SignUp/>} />
           <Route path = "dashboard" element = {<Dashboard/>} />
        </Routes>
    </div>
  );
}

export default App;
