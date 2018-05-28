import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';

import * as gameActions from '../../store/game/actions';
import * as gameSelectors from '../../store/game/reducer';


import GameChoise from '../../components/GameChoise/GameChoise';
import GameScore from '../../components/GameScore/GameScore';
import GameWaiting from '../../components/GameWaiting/GameWaiting';

class Game extends React.Component {
    
    listenStatus() {
        gameActions.listenOpponentStatus();
    }

    componentDidMount() {
        this.listenStatus(this.props);
    }

    render() {
        const { players, role, listScore, onAddScore } = this.props;
        // listScore.length - уже прошедших игр
        // round - текущий
        const round = listScore.length + 1;

        if(role === 'viewer') {
            return (<div>
                <GameScore players={players} listScore={listScore} />
            </div>);
        }

        return (<div>
            <GameScore players={players} listScore={listScore} />
            <GameChoise round={round} addScore={onAddScore} />
            <GameWaiting />
        </div>);
    }
}


const mapStateToProps = (state) => {
    return {
        nickName: userSelectors.getNickName(state),
        role: userSelectors.getRole(state),
        players: gameSelectors.getNames(state),
        listScore: gameSelectors.getListScore(state),
        opponentStatus: gameSelectors.getOpponentStatus(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddScore: bindActionCreators(gameActions.addListScore, dispatch),
        listenOpponentStatus: bindActionCreators(gameActions.listenOpponentStatus, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);