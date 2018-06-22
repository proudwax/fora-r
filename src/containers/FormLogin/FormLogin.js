import React from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';
import * as userActions from '../../store/user/actions';

import * as loginSelectors from '../../store/login/reducer';
import * as loginActions from '../../store/login/actions';

import FormField from '../../components/FormField/FormField';


class FormLogin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.onAuthenticate();
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { isAuthenticated } = this.props;
        const { nickName, onChangeNickName } = this.props;

        if (isAuthenticated) {
            return <Redirect to={from} />;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Enter your nick name {}</h2>
                <FormField>
                    <input
                        type='text'
                        name='Login'
                        placeholder='Your nickname'
                        autoComplete='off'
                        value={nickName}
                        onChange={(event) => { onChangeNickName(event.target.value) }}
                    />
                </FormField>
                <button
                    className='Button'
                    text='Send'
                    type='submit'
                    disabled={toggleDisabledButton(nickName)}
                >Send</button>
            </form>
        );
    }
}

const toggleDisabledButton = (name) => {
    return !(name.trim().length > 3);
}

const mapStateToProps = (state) => {
    return {
        nickName: userSelectors.getNickName(state),
        isAuthenticated: loginSelectors.isLogin(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeNickName: bindActionCreators(userActions.changeNickName, dispatch),
        onAuthenticate: bindActionCreators(loginActions.authenticate,dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);