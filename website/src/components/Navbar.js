import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assest/Logo.svg"
import {toast} from "react-hot-toast" 
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsloggedIn = props.setIsloggedIn;

  return (
    <div className='flex justify-evenly bg-[#152561] text-2xl pt-3 pb-3 font-bold text-white'>
          <Link to = "/">
               <img src= {logo} alt='Logo' width={160} height={32} loading='lazy' />
          </Link>

          <nav>
              
              <ul className='flex  gap-3'>
                 <li>
                   <Link to = "/" > Home</Link>
                 </li>
                 <li>
                   <Link to = "/" > About</Link>
                 </li>
                 <li>
                   <Link to = "/" > Contact</Link>
                 </li>
              </ul>
          </nav>

          <div className='flex ml-5 mr-5 gap-5'>

                   { !isLoggedIn &&
                    <Link to = "/login">
                      <button>
                        Login
                      </button>
                    </Link>
                   }

                    { !isLoggedIn &&
                    <Link to = "/signup"> 
                    <button>
                      Sign Up
                    </button>
                    </Link>
                   }

                    { isLoggedIn &&
                    <Link to = "/">
                       <button onClick={()=>{
                          setIsloggedIn(false);
                          toast.success("Logged Out")
                          }}>
                          Log Out
                      </button>
                    </Link>
                   }
                   
                   { isLoggedIn &&
                    <Link to = "/dashboard">
                      <button>
                         Dashboard
                      </button>
                    </Link>
                   }

               </div>
    </div>
  )
}

export default Navbar