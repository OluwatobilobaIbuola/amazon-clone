import React, {useState, useEffect}from 'react'
import {db} from "../firebase"
import { onSnapshot, collection, orderBy, query} from "firebase/firestore";
import { useStateValue } from "../StateProvider";
import Order from "./Order"
import { OrdersStyled } from "./styled/OrdersStyled"

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{user, basket}, dispatch] = useStateValue();
    
    useEffect( () => {
        if(user){
          
            const q = query(collection(db, "users", user?.uid, "orders"), orderBy('created', "desc"));
            onSnapshot( q, querySnapshot => {
                
                setOrders(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        } else {
            setOrders([])
        }  
    },[user])
    console.log("current orders is ", orders)  
  return (
        <OrdersStyled>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </OrdersStyled>
  )
}

export default Orders