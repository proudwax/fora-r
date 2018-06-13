import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import * as userSelectors from '../../store/user/reducer';
import * as userActions from '../../store/user/actions';

import PageHome from '../../components/PageHome/PageHome';
import PageGame from '../../components/PageGame/PageGame';
import PageLogin from '../../components/PageLogin/PageLogin';
import NoMatch from '../../components/NoMatch/NoMatch';

import GamePrivateRoute from '../../containers/GamePrivateRoute/GamePrivateRoute';
import Spinner from '../../components/Spinner/Spinner';

import './App.css';

const App = (props) => {
    const { roomID, getRoomID, history } = props;

    if (!roomID) {
        getRoomID();
        return (<div className='loading'>
            <Spinner/>
        </div>);
    } else {
        return (<ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={PageHome} />
                <GamePrivateRoute path="/game" component={PageGame} />
                <Route path="/login" component={PageLogin} />
                <Route component={NoMatch} />
            </Switch>
        </ConnectedRouter>);
    }
}

const mapStateToProps = (state) => {
    return {
        roomID: userSelectors.getRoomID(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRoomID: bindActionCreators(userActions.asyncGetRoomID, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);