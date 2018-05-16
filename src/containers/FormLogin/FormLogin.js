import React from 'react';
import { connect } from 'react-redux';

// import * as formLoginActions from '../store/formLogin/actions';
import * as formLoginSelectors  from '../../store/formLogin/reducer';

import FormField from '../../components/FormField/FormField';


class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nickName: ''
        };

        this.handleLoginInputChange = this.handleLoginInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginInputChange = (event) => {
        console.log(this.loginInput.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(this.loginInput.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Where are my topics?</h2>
                <FormField>
                    <input 
                        onChange = {this.handleLoginInputChange}
                        type = 'text'
                        name = 'Login'
                        placeholder = 'Your nickname'
                        ref = {(input) => { this.loginInput = input }}
                    />
                </FormField>
                <button 
                    onClick = {this.handleClick}
                    className = 'Button'
                    text = 'Send'
                    type = 'submit' 
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
        nickName: formLoginSelectors.getNickname(state)
    };
}

// В дополнение к чтению состояния контейнеры могут отправлять действия (dispatch actions). 
// В похожем стиле вы можете определить функцию mapDispatchToProps(), которая получает метод dispatch() и возвращает колбек props,
// который вы можете вставить в представление.

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            // dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);