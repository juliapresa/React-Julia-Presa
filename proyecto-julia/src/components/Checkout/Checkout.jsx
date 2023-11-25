import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {addDoc, collection, getFirestore} from 'firebase/firestore'

import CartContext from '../../context/CartContext'

import "./checkout.css"
export const Checkout = () =>{
    const {cartList, removeCart, removeCartItem, totalPrice, totalQuantity} = useContext(CartContext)
    const [emptyCart, setEmptyCart]= useState(true)
    const Empty = ()=>{
        return (
            <>
                <p>El carrito esta vacío</p>
                <Link to='/detail/'>Volver a los productos</Link>
            </>
        )
    }

    useEffect(() => {
        setEmptyCart(cartList.length === 0);
      }, []);
    
    const finalOrder = ()=>{
        const order = {}
        order.buyer = {name: 'julia', phone:'3093039', email:'soyunemail@gmail.com'}
        order.products = cartList.map(({id, price, title})=> ({id: id, price: price, title: title}))
        order.total = totalPrice()
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(res =>console.log(res))
        .catch(err=>console.log(err))
    } 
    return(
        <>
            {emptyCart ? <Empty/>
                :
                <div className='divCheckout'>
                    {cartList.map(product => 
                        <div className='divDataCheckout' key={product.id}>
                            <p>Producto: {product.title}</p>
                            <p>Precio: {product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <img src={product.imageUrl} className="card-img-top img"/>
                            <button className='buttonCheckout' onClick={() => removeCartItem(product.id)}>Quitar</button>
                        </div>
                    )}
                    <button className='buttonCheckout' onClick={removeCart}>Vaciar carrito</button>
                    <button className='buttonCheckout' onClick={finalOrder}>Terminar compra</button>
                    <p className='totalPrice'>Precio total: {totalPrice()}</p>
                    <p className='totalPrice'>Cantidad total: {totalQuantity()}</p>
                </div>
            }
        </>
    )
}