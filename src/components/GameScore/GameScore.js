import React from 'react';

import './GameScore.css';

const GameScore = ({me, opponent, ...props}) => {

    return (<div className='GameScore'>
        <div className='GameScore-List'>
            <div className='GameScore-Item'>{me}</div>
            <div className='GameScore-Item'>{opponent}</div>
        </div>
    </div>);
}

export default GameScore;