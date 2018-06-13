import 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import App from './containers/App/App';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

import * as reducers from './store/reducers';

const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(combineReducers({ ...reducers, route: routerReducer }), applyMiddleware(router, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);