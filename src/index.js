import 'es6-promise';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';

import App from './App';
import Foo from './Foo';
import Bar from './Bar';
import Game from './containers/Game/Game';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';

import * as reducers from './store/reducers';

const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(combineReducers({ ...reducers, route: routerReducer }), applyMiddleware(router, thunk));

// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fragment> {/* Убрать обертку div */}
                <Route exact path='/' component={App} />
                <Route path='/foo' component={Foo} />
                <Route path='/bar' component={Bar} />
                <Route exact path='/game' component={Game} />
                <Route path='/game/:id' component={Game} />
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);