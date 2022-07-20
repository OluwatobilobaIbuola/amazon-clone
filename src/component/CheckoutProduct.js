import React from "react"
import { useStateValue } from "../StateProvider.js"
import { CoDesc, CoTitle, CoProductInfo, CheckoutProductDiv } from "./styled/CheckoutProduct.styled"

function CheckoutProduct(props) {
    const [{basket}, dispatch] = useStateValue();
    const {item: {image, title, price, rating, description}} = props;
    const {id} = props;
    const {hideButton} = props;
    const {hideDescription} = props

    const removeFromBasket = (id) => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
        console.log(id)
    }

  return (
    <>
    <CheckoutProductDiv>
        <img src={image} alt={title} />
        <CoProductInfo>
            <CoTitle>{title}</CoTitle>
            {!hideDescription && <CoDesc>{description}</CoDesc>}
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div>
                {Array(Math.floor(rating))
                .fill()
                .map((_, i) => (
                    <span>⭐</span>
                ))}
            </div>
            {!hideButton && 
                <button onClick={ () => {removeFromBasket(id)}}>Remove from Basket</button>
            }
        </CoProductInfo>
    </CheckoutProductDiv>
    <hr/>
    </>
  )
}

export default CheckoutProduct