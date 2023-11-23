import React, { useState } from 'react';

export const ItemCounter = ({ initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <p>Agregar al carrito:</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    );
};