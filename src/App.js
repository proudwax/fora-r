import React from 'react';
import { connect } from 'react-redux';

import * as loginSelectors from './store/login/reducer';

import FormLogin from './containers/FormLogin/FormLogin';
import './App.css';

const App = (props) => {
    return (
        <div className='App'>
            <FormLogin />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: loginSelectors.isLogin(state)
    };
}

export default connect(mapStateToProps)(App);