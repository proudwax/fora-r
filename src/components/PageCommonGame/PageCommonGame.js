import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../Grid/Grid';
import GameMenu from '../../containers/GameMenu/GameMenu';
import GamesActive from '../../containers/GamesActive/GamesActive';

import './PageCommonGame.css';

const PageCommonGame = () => {
    return (<Grid>
        <MenuContainer />
        <div className='Grid-GameMenu'>
            <GameMenu />
        </div>
        <div className='Grid-GamesActive'>
            <GamesActive />
        </div>
    </Grid>);
}

export default PageCommonGame;