import React from 'react';
const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Artista: {product.artist}</p>
      <p>Precio: ${product.price}</p>
      <p>Sección: {product.category}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
};

export default ItemDetail;
