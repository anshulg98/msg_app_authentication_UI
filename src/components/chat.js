import React, { Component, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './nav/Nav'
import ChatBody from './chatBody/ChatBody'
import './chat.css'

 const Chat =(props)=> {
  const handleClick= async ()=>{
    let refreshToken = localStorage.getItem("refreshToken")
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    const resp= fetch("http://localhost:4000/api/auth/logout", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }, 
    })
    alert ("You have logged out")
    navigate('/sign-in');
  }
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('accessToken')){
        
    }else{
        navigate('/sign-in');
    }
    // eslint-disable-next-line
}, [])
  // const response =  fetch("http://localhost:4000/api/protected_resource", {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }, 
  // })
  return(
    <div className="__main">
        <ChatBody />  
        <div >
          <center>
        <button type="submit" className="logoutbutton" onClick={handleClick}>
           Logout
      </button>  
      </center>
        </div>
  </div>
  
  )
}

export default Chat
