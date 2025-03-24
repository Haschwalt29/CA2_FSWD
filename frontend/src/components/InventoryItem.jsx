// Frontend - InventoryItem.jsx
import React from 'react';

const InventoryItem = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
};

export default InventoryItem;