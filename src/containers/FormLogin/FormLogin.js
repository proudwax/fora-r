import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as userActions from '../../store/user/actions';
import * as userSelectors from '../../store/user/reducer';

import * as formLoginActions from '../../store/formLogin/actions';
import * as formLoginSelectors from '../../store/formLogin/reducer';

import FormField from '../../components/FormField/FormField';


class FormLogin extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.toggleLogin(!this.props.isLogin);
        // нужно добавить что-то типо isLogin для -> return <Redirect to='/game' />;
    };

    render() {
        const { nickName, isLogin, setNickName } = this.props;

        if (isLogin) {
            return <Redirect to={`/game/${Date.now()}`} />;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Enter your nick name</h2>
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
        isLogin: formLoginSelectors.isLogin(state)
    };
}

// В дополнение к чтению состояния контейнеры могут отправлять действия (dispatch actions). 
// В похожем стиле вы можете определить функцию mapDispatchToProps(), которая получает метод dispatch() и возвращает колбек props,
// который вы можете вставить в представление.
const mapDispatchToProps = (dispatch) => {
    return {
        setNickName: bindActionCreators(userActions.setNickName, dispatch),
        toggleLogin: bindActionCreators(formLoginActions.toggleLogin, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);