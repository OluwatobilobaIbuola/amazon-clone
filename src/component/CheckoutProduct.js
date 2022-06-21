import React from "react"
import { useStateValue } from "../StateProvider.js"
import { COTitle, COProductInfo, CheckoutProductDiv } from "./styled/CheckoutProduct.styled"

function CheckoutProduct(props) {
    const [{basket}, dispatch] = useStateValue();
    const {item: {image, title, price, rating}} = props;
    const {id} = props;
    const {hideButton} = props;

    const removeFromBasket = (id) => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
        console.log(id)
    }

  return (
    <CheckoutProductDiv>
        <img src={image} alt={title} />
        <COProductInfo>
            <COTitle>{title}</COTitle>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <span>⭐</span>
                ))}
            </div>
            {!hideButton && 
                <button onClick={ () => {removeFromBasket(id)}}>Remove from Basket</button>
            }
        </COProductInfo>
    </CheckoutProductDiv>
  )
}

export default CheckoutProduct