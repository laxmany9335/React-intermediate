import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

function LogInForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
}
  return (
    <form onSubmit={submitHandler}>
      {/* Email Field */}
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
        />
      </label>

      {/* Password Field */}
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <div>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            name="password"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <Link to="/forgot-password">
          Forgot Password?
        </Link>
      </label>

      {/* Submit Button */}
      <button type="submit">Sign In</button>
    </form>
  );
}

export default LogInForm;
