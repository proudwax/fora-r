import React from 'react';
import { Redirect } from 'react-router-dom';

import FormField from '../../components/FormField/FormField';
import Spinner from '../../components/Spinner/Spinner';


class FormLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            enterToRoom: true,
            redirectToReferrer: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        if (!this.state.enterToRoom) {
            return <Spinner />;
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
                    />
                </FormField>
                <button
                    className='Button'
                    text='Send'
                    type='submit'
                    disabled={false}
                >Send</button>
            </form>
        );
    }
}


export default FormLogin;