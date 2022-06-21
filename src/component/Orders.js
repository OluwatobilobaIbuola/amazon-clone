import React, {useState, useEffect}from 'react'
import {db} from "../firebase"
import { doc, onSnapshot, collection, orderBy} from "firebase/firestore";
import { useStateValue } from "../StateProvider";
import Order from "./Order"
import "./Orders.css"

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{user, basket}, dispatch] = useStateValue();
    
    useEffect( () => {
        if(user){
          
            const q = collection(db, "users", user?.uid, "orders");
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
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
  )
}

export default Orders