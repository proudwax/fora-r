import React from 'react';

import GameScore from '../../components/GameScore/GameScore';
import GameChoise from '../../components/GameChoise/GameChoise'

import './GamePlay.css';

const GamePlay = () => {
    return (<div className='GamePlay'>
            <GameScore me='1' opponent='0'/>
            <GameChoise/>
            <div>Opponent</div>
            <div>Timer</div>
        </div>); 
}

export default GamePlay;