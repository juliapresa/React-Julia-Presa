import { useContext, useState } from 'react';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  const {addCart} = useContext(CartContext)
  const onAdd = quantity =>{
    addCart ({...product, quantity})
    setCount(false)
  } 
  const [count, setCount] = useState(true)
  return (
    <div className="divCards">
    <div className="card-body">
      <h1 className='title'>{product.title}</h1>
      <p>Artista: {product.artist}</p>
      <p>Precio: ${product.price}</p>
      {
        count ? 
        <button onClick={() => addCart(product)}>Agregar</button>
        :
        <>
        <Link to='/checkout/'>Ver carrito</Link>
        <Link to='/'>Ir al Inicio</Link>
        </>
      }
      <p>Sección: {product.category}</p>
      <img src={product.imageUrl} className="card-img-top img"/>
      <button onClick={() => addCart(product)}>Agregar</button>
      <ItemCounter initial={1} onAdd={onAdd}/>
    </div>
    </div>
  );
};

export default ItemDetail