import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp =(props) => {
  const [name, setname] = useState('');
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [role, setrole] = useState('');
  let navigate = useNavigate();
  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
      if (!email.endsWith(".com")){
        alert("Email is not proper")
        navigate("/sign-up")
      }
      if (role!="1" && role!="2"){
        alert("Role can be 1(client) or 2(admin)")
        navigate("/sign-up")
      }
      else{
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },body: JSON.stringify({name:name, username:user, email:email, password: pass, role:role})
      });
      const json = await response.json()
          console.log(json)
          if (response.ok){
            alert("Registered")
            navigate("/sign-in")
          }
        else {
          alert("Check your user name")
        }
      }

    }
    catch (error){
      alert("error")
      console.log(error)
    }
  }
    return (
      <form onSubmit ={handleSubmit} className="auth-inner">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text" value={name}
            onChange={e=>setname(e.target.value)} required minLength={6} 
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label>username</label>
          <input type="text" value={user}
           onChange={e=>setuser(e.target.value)} required minLength={6} 
          className="form-control" 
          placeholder="username" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email" value={email}
            onChange={e=>setemail(e.target.value)} required email="true" 
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" value={pass}
            onChange={e=>setpass(e.target.value)} required minLength={6} 
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <input
            type="text" value={role}
            onChange={e=>setrole(e.target.value)} required maxLength={1} min={"1"} max={"2"}
            className="form-control"
            placeholder="Enter 1 for client and 2 for admin" 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
  export default SignUp
