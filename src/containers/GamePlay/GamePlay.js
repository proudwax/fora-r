import React from 'react';

import GameScore from '../../components/GameScore/GameScore';
import GameChoise from '../../components/GameChoise/GameChoise';
import GameTimer from '../../components/GameTimer/GameTimer';

import './GamePlay.css';

const GamePlay = () => {
    return (<div className='GamePlay'>
            <GameScore me='1' opponent='0'/>
            <GameChoise/>
            <div>Opponent</div>
            <GameTimer roundTime1={30}/>
        </div>); 
}

export default GamePlay;