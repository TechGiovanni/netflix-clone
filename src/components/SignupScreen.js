import React, { useRef } from 'react';
import './SignupScreen.css';
import {auth, createUserWithEmailAndPasswor, signInWithEmailAndPasswor  } from "../../src/firebase"

function SignupScreen() {
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      // two styleFunctionSx, The Sign in function and Register Function 

      const register = (e) => {
        e.preventDefault(); // everytime a button is inside of a form it will typically refresh, and to prevent that we say "e.preventDefault Behaviour"
        
        createUserWithEmailAndPasswor(auth, emailRef.current.value, passwordRef.current.value)
        .then((authUser) => { console.log(authUser);
        })
        .catch((error) => { alert(error.message); });
      };



      const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPasswor(auth, emailRef.current.value, passwordRef.current.value).then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => { alert(error.message); });
      };


      return (
      <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="Email or phone number" autoComplete="email"/>
        <input ref={passwordRef} type="password" placeholder="Password" autoComplete="current-password"/>
        <button type='submit' onSubmit={signIn}>Sign In</button> {/* this button triggers the sign in function */}

        <h4>
          <span className="signupScreen__gray">New to netflix? </span>          
          <span className="signupScreen__link" onClick={register}>Sign Up now.</span> {/*This fake link triggers the Register function*/}
        </h4>
      </form>
    </div>
  )
};

export default SignupScreen;