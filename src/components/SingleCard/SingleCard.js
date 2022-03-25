import React from 'react';
import './SingleCard.css';

const SingleCard = ({ data }) => {
    console.log(data);
    const { name, image, price } = data;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="watch-img" />
            <h2>Price: ${price}</h2>
        </div>
    );
};

export default SingleCard;