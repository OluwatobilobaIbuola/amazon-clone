import React from 'react'
import Product from "./Product"
import { BgImage, HomeFlex, HomeStyled} from "./styled/Home.styled"

export default function Home () {
    return (
        <HomeStyled>
            <div> 
                <BgImage src= "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                alt=""
                />
                <HomeFlex>
                    <Product 
                    id="4546"
                    title="Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts"
                    price={22}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg"
                    />
                    <Product
                    id="64637"
                    title="Computers & Accessories Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts"
                    price={200}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                    />
                </HomeFlex>
                <HomeFlex>
                    <Product
                     id="47463"
                    title="Electronics Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts"
                    price={340}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                    />
                    <Product
                     id="94974"
                    title="Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts"
                    price={170}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg"
                    />
                    <Product
                    id="45463"
                    title="Health & Personal Care Shop Father's Day Gifts Shop Father's Day Gifts Shop Father"
                    price={150}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                    />
                </HomeFlex>
                <HomeFlex>
                    <Product
                    id="57563"
                    title="New arrivals in Toys Shop Father's Day Gifts Shop Father's Day Gifts Shop Father's Day Gifts"
                    price={80}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
                    />
                </HomeFlex>

            </div>
        </HomeStyled>
    )
}
