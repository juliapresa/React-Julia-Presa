import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {addDoc, collection, getFirestore} from 'firebase/firestore'

import CartContext from '../../context/CartContext'
import TheForm from '../Form/Form';

import "./checkout.css"
export const Checkout = () =>{
    const {cartList, removeCart, removeCartItem, totalPrice, totalQuantity} = useContext(CartContext)
    const [theId, setTheId] = useState('')
    const [emptyCart, setEmptyCart]= useState(true)
    const [form, setForm] = useState({
        names: '',
        phone: '',
        mail: ''
    })
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
        order.buyer = FormData
        order.products = cartList.map(({id, price, title})=> ({id: id, price: price, title: title}))
        order.total = totalPrice()
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(({id}) =>setTheId(id))
        .catch(err=>console.log(err))
        .finally(()=>setForm({
            name: '',
            phone: '',
            mail: ''
        }
        ))
    } 

    const formForm = (evt) =>{
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }
    return(
        <>
            {theId !== '' && <p>El id es{theId}</p>}
            {emptyCart ? <Empty/>
                :
                <div>
                    <div className='divCheckout'>
                    {cartList.map(product => 
                        <div className='divDataCheckout' key={product.id}>
                            <p>Producto: {product.title}</p>
                            <p>Precio: {product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <img src={product.imageUrl} className="card-img-top img"/>
                            <button className='buttonRemove' onClick={() => removeCartItem(product.id)}>Quitar</button>
                        </div>
                    )}
                    </div>
                    <div className='divInfoForm'>
                    <div className='divInfo col-md-6 col-sm-12'>
                        {totalPrice()!==0 && <p className='totalPrice'>Precio total: {totalPrice()}</p>}
                        {totalQuantity()!==0 && <p className='totalPrice'>Cantidad total: {totalQuantity()}</p>}
                        <button className='buttonEmpty' onClick={removeCart}>Vaciar carrito</button>
                    </div>
                    <TheForm form={form} formForm={formForm} finalOrder={finalOrder} />
                    </div>
                </div>
            }
        </>
    )
}