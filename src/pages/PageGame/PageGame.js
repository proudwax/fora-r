import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../../components/Grid/Grid';
import GameLogOut from '../../containers/GameLogOut/GameLogOut';
import GameConnect from '../../containers/GameConnect/GameConnect';
import GameChat from '../../containers/GameChat/GameChat';
import GamePlay from '../../containers/GamePlay/GamePlay';

import './PageGame.css';

const PageGame = () => {
    return (<Grid>
        <MenuContainer />
        <div className='Grid-Sidebar'>
            <GameLogOut />
        </div>
        <div className='PageGame'>
            <GameConnect>
                <h1>Game</h1>
                <GamePlay/>
                <GameChat />
            </GameConnect>
        </div>
    </Grid>);
}

export default PageGame;