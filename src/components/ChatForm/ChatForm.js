import React from 'react';

import './ChatForm.css';

class ChatForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <form className='ChatForm' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='Login'
                    placeholder='Message'
                    autoComplete='off'
                    value=''
                    onChange={(event) => { console.log(event.target.value) }}
                />
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

export default ChatForm;