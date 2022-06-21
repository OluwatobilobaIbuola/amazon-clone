import React from 'react'
import { Gift, SubtotalStyled } from "./styled/Subtotal.styled"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider.js'
import { getBasketTotal } from '../reducer.js'
import { useNavigate } from 'react-router-dom'


function Subtotal() {
  const [{basket}, dispatch] = useStateValue()
  const navigate = useNavigate();
  return (
    <SubtotalStyled>
       <CurrencyFormat 
       renderText={(value) => (
           <>
               <p>
                    Subtotal ({basket?.length} items): <strong>{value}</strong>
               </p>
               <Gift>
                   <input type="checkbox"/> This order contains a gift 
               </Gift>
           </>
       )}
       decimalScale={2}
       value={getBasketTotal(basket)} 
       displayType={'text'} 
       thousandSeparator={true} 
       prefix={'$'} />
       <button onClick={e => navigate("/payment")}>Proceed to checkout</button>
    </SubtotalStyled>
  )
}

export default Subtotal