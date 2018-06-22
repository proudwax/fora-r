import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import GameChat from '../../containers/GameChat/GameChat';
import Grid from '../Grid/Grid';

import './PageGame.css';

const PageGame = () => {
    return (<Grid>
        <MenuContainer />
        <div className='PageGame'>
            PageGame
        </div>
        <GameChat/>
    </Grid>);
}

export default PageGame;