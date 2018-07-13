import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import PageHome from '../../pages/PageHome/PageHome';
import PageGame from '../../pages/PageGame/PageGame';
import PageCommonGame from '../../pages/PageCommonGame/PageCommonGame';
import PageLogin from '../../pages/PageLogin/PageLogin';
import NoMatch from '../../components/NoMatch/NoMatch';

import GamePrivateRoute from '../../containers/GamePrivateRoute/GamePrivateRoute';

import './App.css';

const App = (props) => {
    const { history } = props;

    return (<ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={PageHome} />
            <GamePrivateRoute exact path="/game" component={PageCommonGame} />
            <GamePrivateRoute exact path="/game/:id" component={PageGame} />
            <Route path="/login" component={PageLogin} />
            <Route component={NoMatch} />
        </Switch>
    </ConnectedRouter>);
}

export default App;