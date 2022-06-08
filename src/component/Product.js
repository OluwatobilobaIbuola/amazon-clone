import React, { useState } from 'react'
import { useStateValue } from "../StateProvider";
import { ProductInfo, Price, Rating, ProductTitle, ProductStyled} from "./styled/Product.styled"

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  const [isHover, setIsHover] = useState(false)
  console.log(basket)
  const addToBasket = () => {
    // dispatch the item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };
  const hoverEffect = () => {
    setIsHover(true)
  }
  const hoverEffectOut = () => {
    setIsHover(false)
  }

  return (
    <ProductStyled onMouseLeave={hoverEffectOut} onMouseEnter={hoverEffect}
        style= {isHover? {boxShadow:"0px 1px 2px 2px rgba(0,0,0,0.2)",
        transform: "scale(1.015)"}: null }>
      <ProductInfo>   
        <ProductTitle>{title}</ProductTitle>
        <p>
            <small>$</small>
            <Price>{price}</Price>
        </p>
        <Rating>
            {Array(rating).fill()
            .map((_, i) => 
            ( <span>⭐</span>))}
        </Rating>
      </ProductInfo>
      <img src= {image} alt=""/>
      <button onClick={addToBasket}>Add to basket</button>
    </ProductStyled>
  )
}

export default Product