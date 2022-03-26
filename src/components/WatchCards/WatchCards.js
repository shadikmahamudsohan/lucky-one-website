import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ChooseForMe from '../ChooseForMe/ChooseForMe';
import SingleCard from '../SingleCard/SingleCard';
import './WatchCards.css';

const WatchCards = () => {

    const [watches, setWatches] = useState([]);
    const [carts, setCart] = useState([]);
    const [randomCard, setRandomCard] = useState({});

    // load api

    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);

    // handle selected watches cart

    const handleAddToCart = (cartInfo) => {
        const exists = carts.find(cart => cart.id === cartInfo.id);
        if (exists) {
            alert('Already selected');
        } else if (carts.length >= 4) {
            alert('Cart is full');
        } else {
            cartInfo['order'] = carts.length;
            const newCart = [...carts, cartInfo];
            setCart(newCart);
        }
    };

    // handle choose for me
    const chooseForMe = (selectedCards) => {
        const randomNumber = Math.floor(Math.random() * selectedCards.length);
        const randomCard = selectedCards.find(selectedCard => selectedCard.order === randomNumber);
        setRandomCard(randomCard);
    };

    //clear Selected Cards
    const clearSelectedCards = () => {
        setCart([]);
    };


    // handle random card in model 
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                        <ChooseForMe
                            cards={carts}
                            chooseForMe={chooseForMe}
                            modalIsOpen={modalIsOpen}
                            openModal={openModal}
                            closeModal={closeModal}
                            randomCard={randomCard}
                        />
                        <button onClick={clearSelectedCards} className='chooseAgain-btn'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchCards;