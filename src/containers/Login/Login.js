import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';
import * as loginActions from '../../store/login/actions';

const Login = (props) => {
    const { children: Children } = props;

    return (
        <div className='Login'>
            {Children}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogined: bindActionCreators(loginActions.logined, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Login);