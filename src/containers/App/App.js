import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as loginSelectors from '../../store/login/reducer';
import * as userSelectors from '../../store/user/reducer';

import GamePrivateRoute from '../../containers/GamePrivateRoute/GamePrivateRoute';
import PageLogin from '../../components/PageLogin/PageLogin';
import PageMain from '../../components/PageMain/PageMain';
import Game from '../../containers/Game/Game';

import './App.css';

const App = (props) => {
    return (
        <Router>
            <div className='App'>
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/game'>Game</Link></li>
                </ul>
                <Route exact path='/' component={PageMain} />
                <Route path='/login' component={PageLogin} />
                <GamePrivateRoute path='/game' component={Game} />
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogin: loginSelectors.isLogin(state),
        pointOfEnter: userSelectors.getPointOfEnter(state)
    };
}

export default connect(mapStateToProps)(App);