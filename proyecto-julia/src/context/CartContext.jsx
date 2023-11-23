import { createContext, useState } from 'react';
export const CartContext = createContext ([]);
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]) 
    const addCart = (product) => {
        setCartList([...cartList,product])
        
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