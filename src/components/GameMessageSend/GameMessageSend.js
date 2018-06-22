import React from 'react';

class GameMessageSend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisabled = this.handleDisabled.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ value: ''});
        this.props.onSend(this.state.value);
    }

    handleDisabled(value) {
        return !value.length;
    }

    render() {
        const { value } = this.state;
        const { handleSubmit, handleChange, handleDisabled } = this;

        return (<form className='GameMessageSend' onSubmit={handleSubmit}>
            <input
                className='GameMessageSend-Input'
                autoComplete='off'
                type='text'
                name='Message'
                placeholder='Enter your message'
                value={value} 
                onChange={handleChange}
            />
            <button 
                className='GameMessageSend-Button'
                type='submit'
                disabled={handleDisabled(value)}
            >
                Send
            </button>
        </form>);
    }
}

export default GameMessageSend;