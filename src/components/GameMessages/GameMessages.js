import React from 'react';

import './GameMessages.css';

const GameMessages = (props) => {
    const messages = props.items.map((item, index) => {
        return (<div className='GameMessage' key={index}>
            <div className='GameMessage-Name'>{item.name}</div>
            <div className='GameMessage-Text'>{item.text}</div>
        </div>);
    });

    return (<div className='GameMessages'>{messages}</div>);
}

export default GameMessages;