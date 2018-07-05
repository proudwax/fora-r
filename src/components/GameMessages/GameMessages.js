import React from 'react';

import './GameMessages.css';

class GameMessages extends React.Component {
    constructor(props) {
        super(props);
        
        this.messages = React.createRef();
        this.handleDown = this.handleDown.bind(this);
    }
    
    handleDown() {
        const node = this.messages.current;

        node.scrollTop = node.scrollHeight;
    }
    
    componentDidUpdate(){
        this.handleDown();
    }

    render() {
        const { items, myNickName } = this.props;

        const messages = items.map((item, index) => {
            if (item.status === 'join') {
                return (<div className='GameMessage' key={index}>
                    <div className='GameMessage-Name'>joined {item.name}</div>
                </div>);
            }

            if (item.status === 'leave') {
                return (<div className='GameMessage' key={index}>
                    <div className='GameMessage-Name'>leave {item.name}</div>
                </div>);
            }

            const classMe = item.name === myNickName ? ' GameMessage_me' : '';
            return (<div className={`GameMessage${classMe}`} key={index}>
                <div className='GameMessage-Name'>{item.name}</div>
                <div className='GameMessage-Text'>{item.text}</div>
            </div>);
        });

        return (<div ref={this.messages} className='GameMessages'>{messages}</div>);
    }
}

export default GameMessages;