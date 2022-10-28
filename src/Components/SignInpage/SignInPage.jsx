import React, { useRef } from 'react'
import { auth } from '../../firebase';
import "./SignInPage.css"

const SignInPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(error => {
            alert(error.massage)
        });
    };

    const signIn =(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(error => (error.massage));
    };

  return (
    <div className="signin">
        <form>
            <h1>Sign in</h1>
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwordRef} placeholder='Password' type='password'/>
            <button type='submit' onClick={signIn}>Sign in</button>
            <h6>
                <span>New to Netflix?</span>
                <span onClick={register}> Sign up now.</span>
            </h6>
        </form>
    </div>
  )
}

export default SignInPage