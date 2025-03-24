// Frontend - InventoryForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = ({ onAdd }) => {
    const [form, setForm] = useState({ name: '', quantity: '', price: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/items', form);
        onAdd(res.data);
        setForm({ name: '', quantity: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required />
            <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default InventoryForm;