import React from 'react';

import GameMessages from '../../components/GameMessages/GameMessages';
import GameMessageSend from '../../components/GameMessageSend/GameMessageSend';

import './GameChat.css';

class GameChat extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            messages: [
                { name: 'test', text: 'first message' },
                { name: 'test', text: 'second message' }
            ]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(message) {
        const { messages } = this.state;

        messages.push({ name: 're', text: message });

        this.setState({
            messages: messages
        });
    }

    render() {
        const { messages } = this.state;

        return (<div className='GameChat'>
            <div className='GameChat-Content'>
                <GameMessages items={messages}/>
            </div>
            <div className='GameChat-Form'>
                <GameMessageSend onSend={this.handleSubmit}/>
            </div>
    </div>);
    }
}

export default GameChat;