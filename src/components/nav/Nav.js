import React, { Component } from "react";
import "./nav.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const HandleClick= async ()=>{
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
  let navigate = useNavigate();

}


export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        {/* <div className="nav__blocks">
          <img src={logo}></img>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={HandleClick}>
      Logout
    </button>
        {/* <div className="nav__blocks"></div>
        <div className="nav__blocks"></div> */}

      </div>
    );
  }
}
