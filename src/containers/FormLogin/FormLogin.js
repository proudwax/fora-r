import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as userActions from '../../store/user/actions';
import * as userSelectors from '../../store/user/reducer';

import * as loginActions from '../../store/login/actions';
import * as loginSelectors from '../../store/login/reducer';

import FormField from '../../components/FormField/FormField';


class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.toggleLogin(!this.props.isLogin);
        // this.props.sendNickName(this.props.nickName);
        this.props.setNickName(this.props.nickName);
        this.props.setRole(this.props.role);
    };


    render() {
        const { nickName, isLogin, role, setNickName, roomID, getRoomID, setRole } = this.props;
        
        if (!roomID) {
            getRoomID();
            return <div>Loading...</div>
        }

        if (isLogin) {
            return <Redirect to={`/game/${roomID}`} />;
        }


        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Enter your nick name {}</h2>
                <FormField>
                    <input
                        onChange={(event) => { setNickName(event.target.value) }}
                        type='text'
                        name='Login'
                        placeholder='Your nickname'
                        value={nickName}
                        autoComplete='off'
                    />
                </FormField>
                <FormField>
                    <label>Player
                        <input
                            onChange={(event) => { setRole(event.target.value) }}
                            type='radio'
                            name='Role'
                            value='player'
                            checked={role === 'player'}
                        />
                    </label>
                    <label>Viewer
                        <input
                            onChange={(event) => { setRole(event.target.value) }}
                            type='radio'
                            name='Role'
                            value='viewer'
                            checked={role === 'viewer'}
                        />
                    </label>
                </FormField>
                <button
                    className='Button'
                    text='Send'
                    type='submit'
                    disabled={!nickName}
                >Send</button>
            </form>
        );
    }
}

// После того, как стейт обновился, мы должны вызвать перерендер представления. 
// Это значит, что представление должно улавливать изменения той части стейта, от которого оно зависит. 
// Это делается с помощью mapStateToProps.
const mapStateToProps = (state) => {
    return {
        nickName: userSelectors.getNickName(state),
        roomID: userSelectors.getRoomID(state),
        isLogin: loginSelectors.isLogin(state),
        role: userSelectors.getRole(state)
    };
}

// В дополнение к чтению состояния контейнеры могут отправлять действия (dispatch actions). 
// В похожем стиле вы можете определить функцию mapDispatchToProps(), которая получает метод dispatch() и возвращает колбек props,
// который вы можете вставить в представление.
const mapDispatchToProps = (dispatch) => {
    return {
        setNickName: bindActionCreators(userActions.setNickName, dispatch),
        toggleLogin: bindActionCreators(loginActions.toggleLogin, dispatch),
        getRoomID: bindActionCreators(userActions.getRoomID, dispatch),
        setRole: bindActionCreators(userActions.setRole, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);