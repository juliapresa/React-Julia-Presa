import { createContext, useState } from 'react';
export const CartContext = createContext ([]);
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]) 
    const addCart = (product) => {setCartList([...cartList,product])} 
    //si ya esta el producto, cambiar la cantidad
    const removeCart = () => {setCartList([])}
    //funcion precio total
    //funcion cantidad de productos en total
    //eliminar por producto
    return(
        <CartContext.Provider value={{cartList,addCart, removeCart}}>{children}</CartContext.Provider>
        )
}
export default CartContext