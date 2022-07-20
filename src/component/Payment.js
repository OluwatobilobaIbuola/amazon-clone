import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import { Value, PaymentDetails, FlexLarge, FlexSmall, PaymentSection, PaymentContainer, PaymentStyled } from "./styled/PaymentStyle"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "../axios";
import {db} from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 




function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("The secret is " + clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()


        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement)}
        })
        .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
             
            setDoc(doc(db, "users", user?.uid, "orders", paymentIntent.id), {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')
        })
    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
        <PaymentStyled>
            <PaymentContainer>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/* Payment section - delivery address */}
                <PaymentSection>
                    <FlexSmall>
                        <h3>Delivery Address</h3>
                    </FlexSmall>
                    <FlexLarge>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </FlexLarge>
                </PaymentSection>

                {/* Payment section - Review Items */}
                <PaymentSection>
                    <FlexSmall>
                        <h3>Review items and delivery</h3>
                    </FlexSmall>
                    <FlexLarge>
                        {basket.map((item, index) => { return (
                        <CheckoutProduct
                        id={index}
                        item={item}
                        hideDescription
                        />)})}
                    </FlexLarge>
                </PaymentSection>
                {/* payment section - stripe */}
                <PaymentSection>
                    <FlexSmall>
                        <h3>Payment Method</h3>
                    </FlexSmall>
                    <PaymentDetails>
                            {/* Stripe magic will go */}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <Value>Order Total: {value}</Value>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                    </PaymentDetails>
                </PaymentSection>
            </PaymentContainer>
        </PaymentStyled>
    )
}

export default Payment




