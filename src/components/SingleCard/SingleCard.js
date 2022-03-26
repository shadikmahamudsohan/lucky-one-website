import React from 'react';
import './SingleCard.css';

const SingleCard = ({ data, handleAddToCart }) => {
    const { name, image, price } = data;
    return (
        <div className='card'>
            <img src={image} className='watch-img' alt="watch-img" />
            <div className='card-info'>
                <h1 className='card-name'>{name}</h1>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={() => handleAddToCart(data)} className='add-to-cart-btn'>ADD TO CART</button>
        </div>
    );
};

export default SingleCard;