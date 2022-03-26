import React from 'react';
import './ChooseForMe.css';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const ChooseForMe = ({ cards, chooseForMe, modalIsOpen, openModal, closeModal, randomCard = {} }) => {

    const { name = "Cart is empty", image } = randomCard;
    return (
        <div>
            <div>
                <div onClick={openModal} className='cart-counter'>
                    <button onClick={() => chooseForMe(cards)} className='chooseForMe-btn'>CHOOSE 1 FOR ME</button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div onClick={closeModal} className='cart-counter'>
                        <GrClose className='icon' />
                    </div>
                    <div className='modal-container'>
                        <div className="cart-info">
                            <img className="item-img item-modal-img" src={image} alt="watch img" />
                            <h2 className="item-name">{name}</h2>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ChooseForMe;