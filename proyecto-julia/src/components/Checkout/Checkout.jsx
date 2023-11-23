import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import "./checkout.css"
export const Checkout = () =>{
    const {cartList, removeCart} = useContext(CartContext)
    console.log (cartList)
    return(
        <div>
            {cartList.map(product => 
            <div>
                Producto: {product.name},
                Precio: {product.price}
                Cantidad: {product.quantity}
                <button>Quitar</button>
                </div>
            )}
        Precio total:
        <button onClick={removeCart}>Vaciar carrito</button>
        <button>Terminar compra</button>
        </div>
    )
}