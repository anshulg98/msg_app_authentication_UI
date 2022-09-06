//import { Toast } from 'bootstrap';
import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const toastOptions = {
//   position: "bottom-right",
//   autoClose: 8000,
//   pauseOnHover: true,
//   draggable: true,
//   theme: "dark",
// };

//toast.configure()

const SignUp =(props) => {
  
  const [name, setname] = useState('');
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [role, setrole] = useState('');
  let navigate = useNavigate();
  useEffect(()=>{    if(localStorage.getItem('accessToken')){      navigate('/chat')    }},[])
  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
      if (!email.endsWith(".com")){
        toast("Email should end with .com");
      //  return false;
      //  alert("Email is not proper")
        navigate("/sign-up")
      }
      if (role!="1" && role!="2"){
      //  alert("Role can be 1(client) or 2(admin)")
        toast("Role can be 1(client) or 2(admin)");
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
            toast("Registered")
          //  alert("Registered")
           // toast.error("Email should end with .com");
            navigate("/sign-in")
            
          }
        else {
          toast("Check your user name");
        //  alert("Check your user name")
        }
      }

    }
    catch (error){
      toast("error")
    //  alert("error")
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
          /> <ToastContainer />
        </div>
        <div>
          <center>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          </center>
          
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
       
      </form>
     
    )
  }
  export default SignUp
