import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
function SignUpForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords don't Match");
    }
    setIsLoggedIn(true);
    toast.success("Sign up Successful");
    navigate("/");
  
  }
  return (
    <div>
      {/* Role Selection */}
      <div className=" flex">
        <button>Student</button>
        <button>Instructor</button>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-4">
        {/* Name Fields */}
        <div className=" flex flex-row gap-2">
          <label className="w-full">
            <p className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
              First Name <sup  className="text-[#f50505]">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="First Name"
              className="bg-[#E8F0FE] w-full rounded-[0.5rem] text-black p-[10px]"
            />
          </label>

          <label className ="w-full">
            <p  className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
              Last Name <sup className = "text-[#f50505]">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Last Name"
              className="bg-[#E8F0FE] w-full rounded-[0.5rem] text-white p-[10px]"
            />
          </label>
        </div>

        {/* Email Field */}
        <label w-full>
          <p className = "text-[0.85rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
            Email <sup className = "text-[#f50505]">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Create Email Username"
            className="bg-[#E8F0FE] w-full rounded-[0.5rem] text-white p-[10px]"
          />
        </label>

        {/* Password Field */}
         
         <div className="flex gap-2">
         <label className="w-full relative">
          <p className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
            Create Password <sup className = "[#f50505]">*</sup>
          </p>
          <div >
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter new Password"
                className="bg-[#E8F0FE] w-full rounded-[0.5rem] text-white p-[10px]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] cursor-pointer"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
         </label>

        <label className = "w-full relative">
          <p className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
            Confirm Password <sup className="text-[#f50505]">*</sup>
          </p>
          <div>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password..."
               className="bg-[#E8F0FE] w-full rounded-[0.5rem] text-white p-[10px]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
             className="absolute right-4 top-[42px] cursor-pointer"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </label>

         </div>

        {/* Submit Button */}
        <button
         className="bg-yellow-500 rounded-[8px] font-medium text-black-500 px-[12px] py-[8px]"
        >Create Account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
