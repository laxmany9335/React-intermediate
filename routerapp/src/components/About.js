import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
 let nagivate = useNavigate();
  function clickHandler(){
    nagivate("/support");
  }

  function backHandler(){
    nagivate(-1);
  }
  return (
    <div>
        <div>About</div>
        <button onClick={clickHandler}>Move to Support page</button>
        <button onClick={backHandler}>go back</button>
    </div>
  )
}

export default About