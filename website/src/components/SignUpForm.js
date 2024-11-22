import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      {/* Role Selection */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      {/* Form */}
      <form>
        {/* Name Fields */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="First Name"
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Last Name"
            />
          </label>
        </div>

        {/* Email Field */}
        <label>
          <p>
            Email <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Create Email Username"
          />
        </label>

        {/* Password Field */}
        <label>
          <p>
            Create Password <sup>*</sup>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </label>

        {/* Confirm Password Field */}
        <label>
          <p>
            Confirm Password <sup>*</sup>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm your Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </label>

        {/* Submit Button */}
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
