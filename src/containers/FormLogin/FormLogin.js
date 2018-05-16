import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as formLoginActions from '../../store/formLogin/actions';
import * as formLoginSelectors from '../../store/formLogin/reducer';

import FormField from '../../components/FormField/FormField';


class FormLogin extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.props);
        // нужно добавить что-то типо isLogin для -> return <Redirect to='/game' />;
    };

    render() {
        const { nickName, setNickName } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Where are my topics?</h2>
                <FormField>
                    <input
                        onChange={(event) => { setNickName(event.target.value) }}
                        type='text'
                        name='Login'
                        placeholder='Your nickname'
                        value={nickName}
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
        nickName: formLoginSelectors.getNickName(state)
    };
}

// В дополнение к чтению состояния контейнеры могут отправлять действия (dispatch actions). 
// В похожем стиле вы можете определить функцию mapDispatchToProps(), которая получает метод dispatch() и возвращает колбек props,
// который вы можете вставить в представление.
const mapDispatchToProps = (dispatch) => {
    return {
        setNickName: bindActionCreators(formLoginActions.setNickName, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);