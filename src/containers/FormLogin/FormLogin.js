import React from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelectors, userActions } from '../../store/user';
import { loginSelectors, loginActions } from '../../store/login';

import { commonGame } from '../../api/socket';

import FormField from '../../components/FormField/FormField';

import './FormLogin.css';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

        this.inputNickName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.focusNickName = this.focusNickName.bind(this);
    }

    componentDidMount() {
        this.focusNickName();
    }

    focusNickName() {
        !this.props.isAuthenticated && this.inputNickName.current.focus();
    }

    handleSubmit = (event) => {
        const { nickName, onAuthenticate } = this.props;

        event.preventDefault();

        onAuthenticate();
        commonGame.addUser(nickName);
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { isAuthenticated } = this.props;
        const { nickName, onChangeNickName } = this.props;

        if (isAuthenticated) {
            return <Redirect to={from} />;
        }

        return (
            <div className='FormLogin'>
                <form className='FormLogin-Form' onSubmit={this.handleSubmit}>
                    <h2>Enter your nick name {}</h2>
                    <FormField>
                        <input
                            type='text'
                            name='Login'
                            placeholder='Your nickname'
                            autoComplete='off'
                            value={nickName}
                            ref={this.inputNickName}
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
            </div>
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
        onAuthenticate: bindActionCreators(loginActions.authenticate, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);