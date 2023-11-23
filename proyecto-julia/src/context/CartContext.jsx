import { createContext, useState } from 'react';
export const CartContext = createContext ([]);
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]) 
    const addCart = (product) => {
        const existingProductIndex = cartList.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cartList];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCartList(updatedCart);
        } else {
            setCartList([...cartList, product]);
        }
    }
    
    const removeCart = () => {setCartList([])}
    //funcion precio total
    //funcion cantidad de productos en total
    //eliminar por producto
 
    const removeCartItem = (productId) => {
        const updatedCart = cartList.filter(item => item.id !== productId);
        setCartList(updatedCart);
    }
    return(
        <CartContext.Provider value={{cartList,addCart, removeCart, removeCartItem}}>{children}</CartContext.Provider>
        )
}
export default CartContext