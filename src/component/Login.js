import React, { useState } from 'react'
import { LoginStyled, LoginText, LoginContainer } from "./styled/Login.styled"
import { Link } from "react-router-dom"
import {db, auth, _createUserWithEmailAndPassword, _signInWithEmailAndPassword } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const signIn = e => {
    e.preventDefault();
 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }

  const register = e => {
    e.preventDefault();
    
    _createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  return (
    <LoginStyled>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
      </Link>
      <LoginContainer>
        <h1>Sign-in</h1>
        <form>
            <h5>E-Mail</h5>
            <input type= "text" onChange= {(e) => {setEmail(e.target.value)}} placeholder="email" value={email}/>
            <h5>Password</h5>
            <input type= "password" onChange= {(e) => {setPassword(e.target.value)}} placeholder="password" value={password}/>
            <button onClick={signIn} type= "submit">Sign In</button>
        </form>
        <LoginText>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </LoginText>
        <button onClick={register}>Create your amazon acount</button>
      </LoginContainer>
    </LoginStyled>


  )
}

export default Login