import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Chat from './components/chat'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-up'}>
              Telstra messaging App
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/chat'}>
                    ChatBox
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
            <Routes>
              <Route exact path="/" element={<Login />}  />
              <Route path="/sign-in" element={<Login />}  />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App