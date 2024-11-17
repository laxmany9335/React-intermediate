import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode:""
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          name="firstName"
          onChange={changeHandler}
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          name="lastName"
          onChange={changeHandler}
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email here"
          value={formData.email}
          name="email"
          onChange={changeHandler}
        />
        <br />
        <br />

        <textarea
          placeholder="Enter your comments"
          name="comments"
          onChange={changeHandler}
          value={formData.comments}
        />
        <br />
        <br />

        <input
          type="checkbox"
          id="isVisible"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Is Visible?</label>

        <br/>
        <br/>
        <input
        type='radio'
        name='mode'
        value="online-mode"
        id = "online-mode"
        checked ={formData.mode === "online-mode"}
        onChange={changeHandler}/>
        <label htmlFor='online-mode'>Online Mode</label>
        <br/>
        <br/>
        <input 
        type = "radio"
        name = "mode"
        value='offline-mode'
        id='offline-mode'
        checked ={formData.mode === "offline-mode"}
        onChange={changeHandler}/>
        <label htmlFor='offline-mode'>Offline Mode</label>
      </form>
    </div>
  );
}

export default App;
