import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='container'>
            <h1>Answering Questions</h1>
            {/* First question */}
            <h3>1. How react works?</h3>
            <p>
                <span>Answer: </span>
                React turns JSX in to Javascript and make a copy of real Browser DOM which is called Virtual DOM. First Virtual DOM will render all data like Browser DOM. When there is any changes inside the Virtual DOM and compare that to the previous DOM. Then react render the Browser DOM with least changes. When there is no change in the data react again compare it withe its previous DOM. If it doesn't find any changes it won't change the Browser DOM.
            </p>

            {/* second question */}
            <h3>2. How useState works?</h3>
            <p>
                <span>Answer: </span>
                Props are <b>read-only</b>. If you pass a prop to a component you can only use that data. You can't modify that data. On the other hand, State changes can be <b>asynchronous</b>. This is used to change data in react. Unlike props State can be modified using this.setState. useState allows react to only change the state and doesn't render the hole component.
            </p>
        </div>
    );
};

export default Questions;