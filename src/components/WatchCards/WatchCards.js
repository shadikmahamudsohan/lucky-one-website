import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleCard from '../SingleCard/SingleCard';
import './WatchCards.css';

const WatchCards = () => {

    const [watches, setWatches] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);

    const handleAddToCart = (cartInfo) => {
        const exists = carts.find(cart => cart.id === cartInfo.id);
        if (exists) {
            alert('Already selected');
        } else if (carts.length >= 4) {
            alert('Cart is full');
        } else {
            const newCart = [...carts, cartInfo];
            setCart(newCart);
        }

    };

    return (
        <div>
            <div className='cards-container'>
                <div className='cards'>
                    {
                        watches.map(watch => (
                            <SingleCard
                                key={watch.id}
                                data={watch}
                                handleAddToCart={handleAddToCart} />
                        ))
                    }
                </div>
                <div className='selected-card'>
                    <h1>Selected watches</h1>
                    {
                        carts.map(cart => (
                            <Cart key={cart.id} cartInfo={cart} />
                        ))
                    }
                    <div className="cart-btn">
                        <button className='chooseForMe-btn'>CHOOSE FOR ME</button>
                        <button className='chooseAgain-btn'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchCards;