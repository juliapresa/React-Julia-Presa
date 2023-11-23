import React, { useState } from 'react';

export const ItemCounter = ({ initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleAdd = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onAdd(newQuantity);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onAdd(newQuantity);
        }
    };

    return (
        <div>
            <p>Agregar al carrito:</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
            <p>Cantidad: {quantity}</p>
        </div>
    );
};
