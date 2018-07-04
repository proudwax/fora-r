import React from 'react';

import { getGames } from '../../store/game/actions'; 

import './GamesActive.css';

class GamesActive extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            games: []
        };

        // getGames((err, games) => {
        //     return this.setState({ games: games });
        // });
    }


    render() {

        const { games } = this.state;

        if (games) { 
            return (<div className='GamesActive'>Active games: {games.length}</div>);
        }

        return null;
    }
}

export default GamesActive;