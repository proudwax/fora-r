import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import * as formLoginSelectors from './store/formLogin/reducer';

import FormLogin from './containers/FormLogin/FormLogin';
import Game from './containers/Game/Game.js';

import './App.css';

const App = (props) => {
    return (
        <Router>
            <div className='App'>
                <Route exact path='/' component={FormLogin} />
                <PrivateRoute isLogin={props.isLogin} path='/game/' component={Game} />
            </div>
        </Router>
    );
}

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
    <Route
        {...rest}
        render={props => {
                return isLogin ? (
                    <Component {...props} />
                ) : (
                    <FormLogin/>
                    /* <Redirect to='/' /> */
                )
            }
        }
    />
);

const mapStateToProps = (state) => {
    return {
        isLogin: formLoginSelectors.isLogin(state)
    };
}

export default connect(mapStateToProps)(App);