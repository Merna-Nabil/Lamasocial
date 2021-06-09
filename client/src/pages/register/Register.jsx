import React from 'react'
import './register.css'
export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
           <div className="loginLeft">
           <h3 className="loginLogo">Lamasocial</h3>
               <span className="loginDesc">Connect With Friends all over the world through Lamasocial</span>
           </div>
           <div className="loginRight">
               <div className="loginBox">
       <input placeholder="Username" className="loginInput" />
       <input placeholder="Email" className="loginInput" />
       <input placeholder="Password" className="loginInput" />
       <input placeholder="Re write Password" className="loginInput" />
       <button className="loginButton">sign Up</button>
       <button className="loginRegisterButton">Log In Account</button>
              </div>
              </div>
            </div>
        </div>
    )
}
