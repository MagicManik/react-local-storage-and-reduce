import React, { useEffect, useState } from 'react';
import { priceReducer } from '../Calculate/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const totalPrice = priceReducer(cosmetics)
    return (
        <div>
            <h1>Welcome To My Cosmetic Store</h1>
            <p>Total Price: {totalPrice}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;