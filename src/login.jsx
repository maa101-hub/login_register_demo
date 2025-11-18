import React from "react";
import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
function Login() {
  const [email,Setemail]=useState();
  const [password,Setpassword]=useState();
  const navigate = useNavigate();
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then((res)=>{
      console.log(res);
      if(res.data === 'success') {
        if(res.data.role === 'teacher') {
          navigate('/teacher'); // Redirect to teacher page if role is teacher
        } else {
          alert("Login Successful");
          navigate('/home'); // Redirect to home page after successful login
        }
      }
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
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>(Setemail(e.target.value))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>(Setpassword(e.target.value))}/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">
        You don't have an  account? <a href="/signup">Sign Up here</a>
      </p>
    </div>
  );
}
export default Login;