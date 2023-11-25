import { createContext, useState } from 'react';
export const CartContext = createContext ([]);
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]) 
    const removeCart = () => {setCartList([])}
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

    const totalPrice = () => {
        return cartList.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0).toFixed(2);
    };

    const totalQuantity = () => {
        return cartList.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
    };

    const removeCartItem = (productId) => {
        const updatedCart = cartList.filter(item => item.id !== productId);
        setCartList(updatedCart);
    }
    
    return(
        <CartContext.Provider value={{cartList,addCart, removeCart, removeCartItem, totalPrice, totalQuantity}}>{children}</CartContext.Provider>
    )
}
export default CartContext