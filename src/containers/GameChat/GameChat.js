import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { chatSelectors, chatActions } from '../../store/chat';
import { userSelectors } from '../../store/user';
import { chatGame } from '../../api/socket';

import GameMessages from '../../components/GameMessages/GameMessages';
import GameMessageSend from '../../components/GameMessageSend/GameMessageSend';

import './GameChat.css';

class GameChat extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { inited, onChangeInit, onAddMessage, onJoinMessage, onLeaveMessage } = this.props;

        // не плодим подписки на socket
        if (!inited) {
            onChangeInit(true);
            onAddMessage();
            onJoinMessage();
            onLeaveMessage();
        }
    }

    handleSubmit(message) {
        chatGame.sendMessage(message);
    }

    render() {
        const { messages, nickName } = this.props;

        return (<div className='GameChat'>
            <div className='GameChat-Content'>
                <GameMessages myNickName={nickName} items={messages}/>
            </div>
            <div className='GameChat-Form'>
                <GameMessageSend onSend={this.handleSubmit}/>
            </div>
    </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        nickName: userSelectors.getNickName(state),
        inited: chatSelectors.isInited(state),
        messages: chatSelectors.getMessages(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInit: bindActionCreators(chatActions.changeInit, dispatch),
        onAddMessage: bindActionCreators(chatActions.addMessage, dispatch),
        onJoinMessage: bindActionCreators(chatActions.joinMessage, dispatch),
        onLeaveMessage: bindActionCreators(chatActions.leaveMessage, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameChat);