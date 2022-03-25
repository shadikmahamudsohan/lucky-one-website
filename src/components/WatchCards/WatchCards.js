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
            <div className='cards-container'>
                <div className='cards'>
                    {
                        watches.map(watch => (
                            <SingleCard key={watch.id} data={watch} />
                        ))
                    }
                </div>
                <div className='selected-card'>
                    <h2>Selected Watches</h2>
                </div>
            </div>
        </div>
    );
};

export default WatchCards;