import React, { useState, useRef, useEffect } from 'react';
import { Line, LoginStyled, LoginText, Container, Instruction, Valid, ErrStyle, InValid } from "./styled/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, _createUserWithEmailAndPassword, _signInWithEmailAndPassword } from "../firebase";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
  const navigate = useNavigate()

  const nameRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [registerPage, setRegisterPage] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    nameRef.current.focus()
  }, [nameRef]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    if(password.length > 4){
      setValidMatch(password === matchPassword);
    }
  }, [password, matchPassword]);


  const signIn = async (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    try{
      const response = await _signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      console.log(response)
      const user =  response.user;
        // Signed in  
      console.log("signed-in user>>>> ", user);
    }
    catch (error) {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage);
      if (error?.message === "Firebase: Error (auth/wrong-password).") {
        setErrMsg("Wrong Password");
      } else if(error?.message === "Firebase: Error (auth/user-not-found)."){
        setErrMsg("There was a problem. We cannot find an account with that email address");
      }
    }
  }

  const register = async (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    const v3 = PWD_REGEX.test(matchPassword);
    if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry or Empty Field");
        return;
    }
    
    try{
      const response = await _createUserWithEmailAndPassword(auth, email, password);
      navigate("/")
      // Signed in 
      console.log("resgistered credentials >>>>>>", response);
      const user = response.user;
      console.log("resgistered user>>>>>", user);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail("");
      setName("")
      setPassword("");
      setMatchPassword("");
    }
    catch (error) {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
        setErrMsg("Email address already in use. You indicated you're a new customer, but an account already exists with the email address.");
      }
    };
  }

  return (
    <LoginStyled>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
      </Link>
      <Container>
        {!registerPage ? (
        <>
          <h2>Sign-In</h2>
          {errMsg && <ErrStyle aria-live="assertive">{errMsg}</ErrStyle>}
          <form>  
            <h5>Mobile number or email
              { validEmail && <Valid><FontAwesomeIcon icon={faCheck} /></Valid>}
              { (!validEmail && email)  && <InValid><FontAwesomeIcon icon={faTimes} /></InValid>}
            </h5>
            <input 
              ref={nameRef}
              required
              autoComplete="off"
              type= "text" 
              onChange= {(e) => {
                setEmail(e.target.value)
              }} 
              placeholder=""
              aria-invalid={validEmail ? "false" : "true"} 
              aria-describedby="uidnote"
              value={email}
            />
            <h5>Password
            { validPassword && <Valid><FontAwesomeIcon icon={faCheck} /></Valid>}
            { (!validPassword && password)  && <InValid><FontAwesomeIcon icon={faTimes} /></InValid>}
            </h5>
            <input 
              type= "password" 
              onChange= {(e) => {setPassword(e.target.value)}} 
              placeholder="At least 8 characters" 
              value={password}
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              required
              onFocus={(e) => {
                  setPasswordFocus(true)
              }}
              onBlur={(e) => {
                  setPasswordFocus(false)
              }}
            />
            { (passwordFocus && !validPassword) && <Instruction id="pwdnote">
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </Instruction>}
            <button onClick={signIn} type= "submit">Continue</button>
          </form>
          <LoginText>
            By signing-in you agree to the AMAZON FAKE CLONE <Link to="">Conditions of Use</Link> & Sale. Please
            see our <Link to="">Privacy Notice</Link>.
          </LoginText>
          <Line><span>New to Amazon?</span></Line>
          <button onClick={() => {setRegisterPage(true);setEmail("");setPassword("");setPhoneNumber()}}>Create your Amazon account</button>
        </>
        ) : (
        <>
          <h2>Create account</h2>
          {errMsg && <ErrStyle aria-live="assertive">{errMsg}</ErrStyle>}
          <form>  
            <h5>
              Your name
            </h5>
            <input 
              ref={nameRef} 
              type= "text" 
              onChange= {(e) => {setName(e.target.value)}} 
              placeholder="First and last name" 
              value={name}
              required
              aria-describedby="uidnote"
            />
            <h5>Email
              { validEmail && <Valid><FontAwesomeIcon icon={faCheck} /></Valid>}
              { (!validEmail && email)  && <InValid><FontAwesomeIcon icon={faTimes} /></InValid>}
            </h5>
            <input 
              required
              autoComplete="off"
              type= "text" 
              onChange= {(e) => {
                setEmail(e.target.value)
              }} 
              placeholder=""
              aria-invalid={validEmail ? "false" : "true"} 
              aria-describedby="uidnote"
              value={email}
            />
            <h5>Password
            { validPassword && <Valid><FontAwesomeIcon icon={faCheck} /></Valid>}
            { (!validPassword && password)  && <InValid><FontAwesomeIcon icon={faTimes} /></InValid>}
            </h5>
            <input 
              type= "password" 
              onChange= {(e) => {setPassword(e.target.value)}} 
              placeholder="At least 8 characters" 
              value={password}
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              required
              onFocus={(e) => {
                  setPasswordFocus(true)
              }}
              onBlur={(e) => {
                  setPasswordFocus(false)
              }}
            />
            { (passwordFocus && !validPassword) && <Instruction id="pwdnote">
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </Instruction>}
            <h5>Re-enter password
            { validMatch && <Valid><FontAwesomeIcon icon={faCheck} /></Valid>}
            { ( !validMatch && matchPassword)  && <InValid><FontAwesomeIcon icon={faTimes} /></InValid>}
            </h5>
            <input 
              type= "password" 
              onChange= {(e) => {setMatchPassword(e.target.value)}} 
              placeholder="" 
              aria-describedby="confirmnote"
              value={matchPassword}
              onFocus={(e) => {
                  setMatchFocus(true)
              }}
              onBlur={(e) => {
                  setMatchFocus(false)
              }}
            />
            { (matchFocus && !validMatch) && <Instruction id="confirmnote">
              <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </Instruction>}
            <button onClick={register} type= "submit">Continue</button>
          </form>
          <LoginText>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </LoginText>
          <hr/>
          <p>Already have an account? <Link onClick={() => {setRegisterPage(false);setEmail("");
            setPassword("");setPhoneNumber();setName("");setMatchPassword("")}} to="/">Sign-In</Link>
          </p>
          <p><Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice</Link></p>
        </>
        )}
      </Container>
    </LoginStyled>


  )
}

export default Login