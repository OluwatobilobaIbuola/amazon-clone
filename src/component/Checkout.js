import React, {useState} from 'react'
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from '../StateProvider.js'
import { CheckoutLeft, CheckoutRight, UserHeading, CheckoutTitle, CheckoutStyled, CheckoutImage } from "./styled/Checkout.styled"
import { Link } from 'react-router-dom'


function Checkout() {
  const [{user, basket}, dispatch] = useStateValue();
  const [removeAll, setRemoveAll] = useState(false)

  const removeFromBasket = (id) => {
    dispatch({
        type:'EMPTY_BASKET',
    })
    console.log(id)
  }

  return (
    <CheckoutStyled>
        <CheckoutLeft>
          <CheckoutImage src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
          <div>
            <UserHeading>Hello, {user?.email}</UserHeading>
            <CheckoutTitle>Shopping Cart</CheckoutTitle>
            {!removeAll && <Link onClick={() => {removeFromBasket(); setRemoveAll(true)}} to="/checkout">remove all items</Link>}
            {basket.map((item, index) => { return (
            <CheckoutProduct
            id={index}
            item={item}
            />)})}
          </div>
        </CheckoutLeft>
        <CheckoutRight>
            <Subtotal/>
        </CheckoutRight>
    </CheckoutStyled>
  )
}

export default Checkout