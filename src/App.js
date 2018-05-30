import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as loginSelectors from './store/login/reducer';

import FormLogin from './containers/FormLogin/FormLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Game from './containers/Game/Game';
import Main from './Main';

import './App.css';

const App = ({ isLogin, ...props}) => {

    return (
        <Router>
            <div className='App'>
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                <Route exact path='/' component={Main} />
                <Route path='/login' component={FormLogin} />
                <PrivateRoute authed={isLogin} path='/game/:id' component={Game} />
            </div>
        </Router>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: loginSelectors.isLogin(state)
    };
}

export default connect(mapStateToProps)(App);