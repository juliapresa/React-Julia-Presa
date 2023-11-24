import React, { useState } from 'react';

export const ItemCounter = ({ initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const add = () => {
        setQuantity(quantity + 1);
    };

    const remove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <p>Agregar al carrito:</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    );
};