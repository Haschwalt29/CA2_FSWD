// Frontend - InventoryList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryItem from './InventoryItem';

const InventoryList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/items').then(res => setItems(res.data));
    }, []);

    return (
        <div>
            {items.map(item => <InventoryItem key={item._id} item={item} />)}
        </div>
    );
};

export default InventoryList;
