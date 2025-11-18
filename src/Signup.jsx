import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {
  const [name ,Setname]=useState();
  const [email,Setemail]=useState();
  const [password,Setpassword]=useState();
  const navigate = useNavigate();
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    axios.post('http://localhost:3001/signup',{name,email,password,role})
    .then((res)=>{
      console.log(res);
      alert("User Created Successfully");
      Setname(null);
      Setemail(null);
      Setpassword(null);
      navigate('/login'); // Redirect to login page after successful signup
    })
    .catch((err)=>{
      console.log(err);
      alert("Error Creating User");
    });
  }
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Sign Up</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" name="name" className="form-control" id="name" placeholder="Enter your email" onChange={(e)=>(Setname(e.target.value))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>(Setemail(e.target.value))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>(Setpassword(e.target.value))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role:</label>
          <input type="text" name="role" className="form-control" id="role" placeholder="Enter your role" onChange={(e)=>(Setrole(e.target.value))}/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Signup;
