import React from 'react'
import { Gift, SubtotalStyled } from "./styled/Subtotal.styled"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider.js'
import { getBasketTotal } from '../reducer.js'

function Subtotal() {
  const [{basket}, dispatch] = useStateValue()

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
       <button className='subtotal__button'>Proceed to checkout</button>
    </SubtotalStyled>
  )
}

export default Subtotal