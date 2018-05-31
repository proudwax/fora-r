import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../../store/login/actions';

import Login from '../../containers/Login/Login';
import FormLogin from '../../containers/FormLogin/FormLogin';

const PageLogin = (props) => {
    return (
        <Login>
            <FormLogin onLogined={this.onLogined} />
        </Login>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogined: bindActionCreators(loginActions.logined, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(PageLogin);