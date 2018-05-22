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
    render() {
        const { players, listScore, onAddScore } = this.props;
        // listScore.length - уже прошедших игр
        // round - текущий
        const round = listScore.length + 1;

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
        players: gameSelectors.getNames(state),
        listScore: gameSelectors.getListScore(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddScore: bindActionCreators(gameActions.addListScore, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);