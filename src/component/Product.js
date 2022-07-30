import React, { useState, useEffect } from 'react'
import { ProductInfo, Price, Rating, ProductTitle, ProductStyled} from "./styled/Product.styled"

function Product({title, rating, image, price, description, hideElement, catgyTitle, addToBasket}) {

  const [isHover, setIsHover] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() =>{
    console.log("i re-render")
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setBrowserWidth(width);
      console.log("browserwidth after render >>> ", browserWidth);
    }) 
  }, []);

 
  const hoverEffect = () => {
    setIsHover(true)
  };
  const hoverEffectOut = () => {
    setIsHover(false)
  };

  return (
    <>
    {browserWidth > 768 ? (
    <ProductStyled style={{boxShadow: isHover? "0 0 8px 0 rgba(0,0,0,0.7)" : null}}
    onMouseLeave={hoverEffectOut} onMouseEnter={hoverEffect}
    >
      <ProductInfo>
        {hideElement ? <h5>{catgyTitle}</h5> : <ProductTitle>{title}</ProductTitle>}   
        {!hideElement &&
          <p>
            <small>$</small>
            <Price>{price || null}</Price>
          </p>
        }
        <Rating>
          {Array(Math.floor(rating || null)).fill()
          .map((_, i) => 
          ( <span>⭐</span>))}
        </Rating>
      </ProductInfo>
      <img src={image} alt=""/>
      {(!hideElement &&  browserWidth > 768) && <button onClick={() => addToBasket(title, image, price, rating, description)}>Add to basket</button>}
      {hideElement && <p>Shop now</p>}
    </ProductStyled>
    ) : (
      <ProductStyled style={{boxShadow: isHover? "0 0 8px 0 rgba(0,0,0,0.7)" : null}}
    onClick={() => addToBasket(title, image, price, rating, description)}
    onMouseLeave={hoverEffectOut} onMouseEnter={hoverEffect}
    >
      <ProductInfo>
        {hideElement ? <h5>{catgyTitle}</h5> : <ProductTitle>{title}</ProductTitle>}   
        {!hideElement &&
          <p>
            <small>$</small>
            <Price>{price || null}</Price>
          </p>
        }
        <Rating>
          {Array(Math.floor(rating || null)).fill()
          .map((_, i) => 
          ( <span>⭐</span>))}
        </Rating>
      </ProductInfo>
      <img src={image} alt=""/>
      {(!hideElement &&  browserWidth > 768) && <button onClick={() => addToBasket(title, image, price, rating, description)}>Add to basket</button>}
      {hideElement && <p>Shop now</p>}
    </ProductStyled>
    )
    }
    </>
  )
}

export default Product