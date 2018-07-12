import React from 'react';

import './GameChoiseCard.css';

const GameChoiseCard = ({ name, url, checked, index,...props}) => {
    return (
        <div className='GameChoiseCard' {...props}>
            <input id={`GameChoiseCard-${name}-${index}`} className='GameChoiseCard-Input' 
                type='radio' 
                name='choise' 
                value={name}
                checked={checked}
            />
            <label htmlFor={`GameChoiseCard-${name}-${index}`} className='GameChoiseCard-Lable'>
                <div className='GameChoiseCard-Check'>
                    <img className='GameChoiseCard-Image' src={url} alt={name}/>
                </div>
            </label>
        </div>
    );
}

export default GameChoiseCard;