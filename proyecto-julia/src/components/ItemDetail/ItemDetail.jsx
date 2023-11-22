import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mfetch"
const ItemDetail = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  useEffect(()=>{
      mFetch(pid)
      .then(result => {
        setProduct(result);
      })
      .catch(error => console.log(error));
  }, [pid])
  return (
    <div className="divCards">
    <div className="card-body">
      <h1 className='title'>{product.title}</h1>
      <p>Artista: {product.artist}</p>
      <p>Precio: ${product.price}</p>
      <p>Sección: {product.category}</p>
      <img src={product.imageUrl} className="card-img-top img"/>
    </div>
    </div>
  );
};

export default ItemDetail