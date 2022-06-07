import React from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import { GlobalStyled } from "./component/styled/Global.styled.js"
import { Routes, Route} from "react-router-dom"
import Checkout from "./component/Checkout"
import Login from "./component/Login.js"

function App() {
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
