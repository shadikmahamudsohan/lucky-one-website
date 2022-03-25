import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './WatchCards.css';

const WatchCards = () => {

    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);


    return (
        <div>
            <h2>Cards</h2>
            <div className='cards-container'>
                {
                    watches.map(watch => (
                        <SingleCard key={watch.id} data={watch} />
                    ))
                }
            </div>
        </div>
    );
};

export default WatchCards;