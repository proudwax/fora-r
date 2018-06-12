import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';
import * as loginActions from '../../store/login/actions';

import FormLogin from '../../containers/FormLogin/FormLogin';

const Login = (props) => {
    return (
        <div className='Login'>
            <FormLogin onLogined={props.onLogined} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogined: bindActionCreators(loginActions.logined, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Login);