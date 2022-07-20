import React, { useState, useEffect }from 'react'
import { useStateValue } from '../StateProvider';
import Product from "./Product"
import { BgImage, HomeFlex, HomeStyled, CategoryFlex} from "./styled/Home.styled"



export default function Home () {
    const [{}, dispatch] = useStateValue()

    const [products, setProducts] = useState([]);
    const [prodJewelry, setprodJewelry] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    const categories = [ 
        {
            title:"Shopping for",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
        },
        {
            title:"Computer and Accessories",
            image:         "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        },
        {
            title:"Dress",
            image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
        },
        {
            title:"Games",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
        }
    ]

    const addToBasket = (title, image, price, rating, description) => {
        // dispatch the item to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              title: title,
              image: image,
              price: price,
              rating: rating,
              description:description
            },
        });
    };

    useEffect( () => {
        const getServerSideProd = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if(!res.ok) throw Error("Did not receive data");
                const apiProducts = await res.json();
                setProducts(apiProducts)
                setFetchError(null)
            }
            catch (err){
                setFetchError(err.message)
            } 

            try {
                const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
                if(!res.ok) throw Error("Did not receive data");
                const apiProducts = await res.json();
                setprodJewelry(apiProducts)
                setFetchError(null)
            }
            catch (err){
                setFetchError(err.message)
            }   
        }

        getServerSideProd();
    }, [])

    console.log("products >>>>>", products)

    return (
        <HomeStyled>  
            <BgImage src= "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt=""/>
            {fetchError && <h1>Refresh page, refresh page...</h1>}
            <CategoryFlex>
                {categories.map((category, index) =>
                 <Product
                    key={index}
                    catgyTitle={category.title}
                    image= {category.image}
                    hideElement
                />)}
            </CategoryFlex>
            <HomeFlex>
                {products.map((product) =>
                <Product
                    key={product.id}
                    title={ product.title.slice(0, 35) + "..." }
                    rating={product.rating.rate}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    addToBasket={addToBasket}
                />
                )}
            </HomeFlex>
            <HomeFlex>
                {prodJewelry.map((product) =>
                    <Product
                        key={product.id}
                        title={product.title.slice(0, 35) + "..."}
                        rating={product.rating.rate}
                        image={product.image}
                        price={product.price}
                        description={product.description}
                        addToBasket={addToBasket}
                    />
                )}
            </HomeFlex>
        </HomeStyled>
    )
}

