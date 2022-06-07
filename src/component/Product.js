import React from 'react'
import { useStateValue } from "../StateProvider";
import { ProductInfo, Price, Rating, ProductTitle, ProductStyled} from "./styled/Product.styled"

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
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

  return (
    <ProductStyled>
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