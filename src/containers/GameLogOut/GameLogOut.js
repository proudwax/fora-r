import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { gameSelectors, gameActions} from '../../store/game';

import './GameLogOut.css';

class GameLogOut extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { onLogOut, gameID, history } = this.props;

        onLogOut(gameID);
        history.push('/game');
    }

    render() {
        return (
            <button className='GameLogOut' onClick={this.handleClick}>Log out Game</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameID: gameSelectors.getGameID(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: bindActionCreators(gameActions.logOutGame, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameLogOut));