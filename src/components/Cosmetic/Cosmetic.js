import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = props => {
    const { name, id, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only For: ${price}</p>
            <p>It has id: {id}</p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;