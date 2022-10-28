import React, { useState } from 'react'
import './Login.css'
import logo from "../../Images/Netfilm-logo.png"
import SignInPage from '../SignInpage/SignInPage'

const Login = () => {
  const [signIn, setsignIn] = useState(false)

  return (
    <div className="loginscreen">
        <div className="login_background">
            <img className='login_logo' src={logo} alt="logo" />
        </div>
        <button onClick={()=>setsignIn(true)} className='login_button'>Sign in</button>
        <div className="login_gradient"></div>
        <div className="login_body">
          {signIn?(<SignInPage/>):(
            <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address"/>
                <button onClick={()=>setsignIn(true)} className='login_input_button'>get started</button>
              </form>
            </div>
            </>
          )}
        </div>
    </div>
  )
}

export default Login