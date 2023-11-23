import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mfetch"
import { ItemCounter } from '../ItemCounter/ItemCounter';
import CartContext from "../../context/CartContext";

const ItemDetail = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  const {addCart} = useContext(CartContext)

  useEffect(()=>{
      mFetch(pid)
      .then(result => {setProduct(result)})
      .catch(error => console.log(error));
  }, [])
  const onAdd = quantity =>{
    alert ('seleccionaste: ', quantity)
    addCart ({...product, quantity})
  } 
  return (
    <div className="divCards">
    <div className="card-body">
      <h1 className='title'>{product.title}</h1>
      <p>Artista: {product.artist}</p>
      <p>Precio: ${product.price}</p>
      <p>Sección: {product.category}</p>
      <img src={product.imageUrl} className="card-img-top img"/>
      <ItemCounter initial={1} onAdd={onAdd}/>
      <button onClick={addCart}>Agregar</button>
    </div>
    </div>
  );
};

export default ItemDetail