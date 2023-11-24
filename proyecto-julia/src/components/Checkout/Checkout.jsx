import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
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
           <button className='buttonCheckout'>Terminar compra</button>
           <p className='precioTotal'>Precio total: {totalPrice()}</p>
           <p className='precioTotal'>Cantidad total: {totalQuantity()}</p>
           </div>
             }
        </>
    )
}