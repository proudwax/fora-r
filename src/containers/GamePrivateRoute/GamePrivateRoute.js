import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';

const GamePrivateRoute = ({ component: Component, ...rest }) => {
    return (<Route {...rest} render={props =>
            <Component {...props}/>
        }
    />);
};

const mapStateToProps = (state) => {
    return {
        // nickName: userSelectors.getNickName(state),
        // role: userSelectors.getRole(state),
        // players: gameSelectors.getNames(state),
        // listScore: gameSelectors.getListScore(state),
        // opponentStatus: gameSelectors.getOpponentStatus(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onAddScore: bindActionCreators(gameActions.addListScore, dispatch),
        // listenOpponentStatus: bindActionCreators(gameActions.listenOpponentStatus, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePrivateRoute);