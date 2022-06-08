import React, { useEffect } from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import { GlobalStyled } from "./component/styled/Global.styled.js"
import { Routes, Route} from "react-router-dom"
import Checkout from "./component/Checkout"
import Login from "./component/Login.js"
import { auth } from "./firebase"
import {_onAuthStateChanged} from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
        <>
          <GlobalStyled/>
          <Routes>
              <Route path="/" element={ <><Header/>  <Home/></> }/>
              <Route path="checkout" element={ <><Header/>  <Checkout/></> }/>
              <Route path="login" element={ <Login/> }/>
          </Routes>
        </>
      
     
  );
}

export default App;
