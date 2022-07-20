import React from 'react'
import { OrderId, OrderStyled, OrderTotal } from "./styled/OrderStyled"
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <OrderStyled>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <OrderId>
                <small>{order.id}</small>
            </OrderId>
            {order.data.basket?.map((item, index) => { return (
              <CheckoutProduct
              id={index}
              item={item}
              hideButton
              hideDescription
            />)})}
            <CurrencyFormat
                renderText={(value) => (
                    <OrderTotal>Order Total: {value}</OrderTotal>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </OrderStyled>
    )
}

export default Order;