import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemCounter } from '../ItemCounter/ItemCounter';
import CartContext from '../../context/CartContext';
const ItemDetail = ({product}) => {
  const {addCart} = useContext(CartContext)
  const [count, setCount] = useState(true)

  const onAdd = quantity =>{
    addCart ({...product, quantity})
    setCount(false)
  } 

  return (
    <div className="divCards">
      <div className="card-body">
        <h1 className='title'>{product.title}</h1>
        <p>Artista: {product.artist}</p>
        <p>Precio: ${product.price}</p>
        <p>Sección: {product.category}</p>
        <img src={product.imageUrl} className="card-img-top img"/>
        {
          count ?
          <>
            <ItemCounter initial={1} onAdd={onAdd}/>
          </>
          :
          <>
            <Link to='/checkout/'>Ver carrito</Link>
            <Link to='/'>Ir a Inicio</Link>
          </>
        }
      </div>
    </div>
  );
};

export default ItemDetail