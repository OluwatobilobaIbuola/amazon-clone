import React, { useEffect } from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import Payment from "./component/Payment"
import { GlobalStyled } from "./component/styled/Global.styled.js"
import { Routes, Route} from "react-router-dom"
import Checkout from "./component/Checkout"
import Login from "./component/Login.js"
import { _onAuthStateChanged, auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders";


const promise = loadStripe(
 "pk_test_51L8mxhB0TUKCM6cKcgqoQgKoitGpoHB7GvUz3TZJtyYshxCr6hB77GxX9T4H0ankzdsEk6WkPPF3yOdqxhXTNnHv00MC3zxHDU"
);

function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    _onAuthStateChanged(auth, (authUser) => {
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
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <><Header/>  <Home/></> }/>
        <Route path="checkout" element={ <><Header/>  <Checkout/></> }/>
        <Route path="payment" element={ <><Header/> <Elements stripe={promise}><Payment/></Elements></> }/>
        <Route path="orders" element={ <><Header/>  <Orders/></> }/>
      </Routes>
    </>
  );
}


export default App;
