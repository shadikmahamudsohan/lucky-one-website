import React from 'react';
import './Cart.css';
import { AiOutlineDelete } from 'react-icons/ai';


const Cart = ({ cartInfo }) => {
    const { id, name, image } = cartInfo;
    return (
        <div className='cart'>
            <div className="cart-info">
                <img className="item-img" src={image} alt="watch img" />
                <h3 className="item-name">{name}</h3>
                <AiOutlineDelete className='delete-btn' size={30} />
            </div>
        </div>
    );
};

export default Cart;