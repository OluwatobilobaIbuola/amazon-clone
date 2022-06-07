import React from 'react'
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from '../StateProvider.js'
import { CheckoutTitle, CheckoutStyled, CheckoutImage } from "./styled/Checkout.styled"


function Checkout() {
  const [{basket}, dispatch] = useStateValue()
  return (
    <CheckoutStyled>
        <div>
          <CheckoutImage src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt=""/>
          <CheckoutTitle>Your shopping basket</CheckoutTitle>
          {basket.map((item, index) => { return (
          <CheckoutProduct
          id={index}
          item={item}
          />)})}
        </div>
        <div>
            <Subtotal/>
        </div>
    </CheckoutStyled>
  )
}

export default Checkout