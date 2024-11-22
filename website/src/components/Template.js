import React from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import frameImage from '../assest/frame.png'; // Ensure correct path and file extension

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span> {desc2} </span>
        </p>
        {formtype === "signup" ? <SignUpForm setIsLoggedIn ={setIsLoggedIn} /> : <LogInForm setIsLoggedIn = {setIsLoggedIn}/>}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div>
        <img
          src={frameImage}
          alt="pattern"
          height={558}
          width={584}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          height={558}
          width={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
