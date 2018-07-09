import React from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelectors, userActions } from '../../store/user';

import { commonGame } from '../../api/socket';

import * as loginSelectors from '../../store/login/reducer';
import * as loginActions from '../../store/login/actions';

import FormField from '../../components/FormField/FormField';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './FormLogin.css';

class FormLogin extends React.Component {
    constructor (props) {
        super(props);

        this.inputNickName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.focusNickName = this.focusNickName.bind(this);
    }

    componentDidMount() {
        this.focusNickName();
    }
    
    focusNickName() {
        // !this.props.isAuthenticated && this.inputNickName.current.focus();
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
                        <Input type='text'
                            name='Login'
                            size='m'
                            autoFocus='true'
                            placeholder='Your nickname'
                            autoComplete='off'
                            value={nickName}
                            ref={this.inputNickName}
                            onChange={(event) => { onChangeNickName(event.target.value) }}/>
                        
                    </FormField>
                    <Button
                        text='Send'
                        type='submit'
                        disabled={toggleDisabledButton(nickName)}
                    >Send</Button>
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
        onAuthenticate: bindActionCreators(loginActions.authenticate,dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);