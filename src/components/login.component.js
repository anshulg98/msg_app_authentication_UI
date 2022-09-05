import React, { Component, useState} from 'react'
import { useNavigate } from 'react-router-dom'
 const Login =(props)=> {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');
  const [msg, setmsg] = useState('');
  let navigate = useNavigate();
  // const onChangeHandle=(e)=>{
  //   setCredentials({...credentials, [e.target.name]: e.target.value})
  // }
  const handleSubmit = async (e)=>{
   try { 
    e.preventDefault();
    // if (user.length === 0 || pass.length === 0){
    //   alert("Fill all the feilds")
    //   setmsg("Fill all the feilds")
    // }
    // else if (user.length <6 || pass.length < 6){
    //   alert("Username and Password should have min 6 characters")
    // }
    console.log("hello")
    const resp = await fetch("http://localhost:4000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },body: JSON.stringify({username: user, password: pass})
          });
          //console.log("hello1")
          const json = await resp.json()
          console.log(json)
          if (resp.ok){
            
          //let { accessToken, refreshToken } = res.data;
      localStorage.setItem("accessToken", json.accessToken);
      localStorage.setItem("refreshToken", json.refreshToken);
      alert("Logged in")
      navigate("/chat")
    }
      
      
      else {
        alert('Wrong Credentials')
      }
      console.log(resp)}
      catch (error) {
        console.error("error");
        alert ("something went wrong!Please try again")

      }
  }

    return (
      <form onSubmit ={handleSubmit} value={msg} className="auth-inner">
        <h3>LogIn</h3>
        <div className="mb-3">
          <label>Enter username</label>
          <input
            type="text" value={user}
            onChange={e=>setuser(e.target.value)} minLength={6} required
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" value={pass}
            onChange={e=>setpass(e.target.value)} minLength={6} required
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="sign-up text-left">
          Don't have an account?<a href="/sign-up">Sign up</a>
        </p>
      </form>
    )
  }
export default Login