import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../Grid/Grid';
import GameLogOut from '../../containers/GameLogOut/GameLogOut';
import GameConnect from '../../containers/GameConnect/GameConnect';
import GameChat from '../../containers/GameChat/GameChat';

import './PageGame.css';

const PageGame = () => {
    return (<Grid>
        <MenuContainer />
        <div className='PageGame'>
            <GameConnect>
                <GameLogOut />
                Game
                <GameChat />
            </GameConnect>
        </div>
    </Grid>);
}

export default PageGame;