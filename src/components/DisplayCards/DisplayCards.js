import React, { useEffect, useState } from 'react';

const DisplayCards = () => {

    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);


    return (
        <div>
            <h2>Cards</h2>
            <div>
                {
                    watches.map(watch => (
                        <p>{watch.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayCards;