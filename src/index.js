import 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import PageHome from './components/PageHome/PageHome';
import PageGame from './components/PageGame/PageGame';
import PageLogin from './components/PageLogin/PageLogin';
import NoMatch from './components/NoMatch/NoMatch';

import GamePrivateRoute from './containers/GamePrivateRoute/GamePrivateRoute';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';

import * as reducers from './store/reducers';

const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(combineReducers({ ...reducers, route: routerReducer }), applyMiddleware(router, thunk));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={PageHome} />
                <GamePrivateRoute path="/game" component={PageGame} />
                <Route path="/login" component={PageLogin} />
                <Route component={NoMatch} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);