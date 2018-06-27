import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../Grid/Grid';
import GameLogOut from '../../containers/GameLogOut/GameLogOut';

import './PageGame.css';

const PageGame = () => {
    return (<Grid>
        <MenuContainer />
        <div className='PageGame'>
            Game
            <GameLogOut />
        </div>
    </Grid>);
}

export default PageGame;