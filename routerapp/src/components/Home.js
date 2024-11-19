import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nagivate = useNavigate();
  function clickHandler(){
    nagivate("/about");
  }
  return (
    <div>
      <div>
      this is my Home Page
    </div>
    <button onClick={clickHandler}>move to about page</button>
    </div>
  )
}

export default Home