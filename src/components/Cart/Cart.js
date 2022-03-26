import React from 'react';

const Cart = ({ cartInfo }) => {
    const { id, name, image } = cartInfo;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Cart;