import React from 'react';

import './GameChoiseCard.css';

const GameChoiseCard = ({ name, url, ...props}) => {
    return (
        <label className='GameChoiseCard'>
            <input className='GameChoiseCard-Imput' type='radio' name='choise' value={name} />
            <div className='GameChoiseCard-Media'>
                <img className='GameChoiseCard-Image' src={url} alr={name}/>
            </div>
        </label>
    );
}

export default GameChoiseCard;