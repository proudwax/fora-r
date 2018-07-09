import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { gameSelectors, gameActions} from '../../store/game';
import { chatActions } from '../../store/chat';

import Button from '../../components/Button/Button';

import './GameLogOut.css';

class GameLogOut extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { onLogOut, onLogOutChat, id, history } = this.props;

        onLogOut(id);
        onLogOutChat();
        history.push('/game');
    }

    render() {
        return (
            <Button onClick={this.handleClick}>Log out Game</Button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: gameSelectors.getID(state),
        isConnected: gameSelectors.isConnected(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: bindActionCreators(gameActions.logout, dispatch),
        onLogOutChat: bindActionCreators(chatActions.logout, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameLogOut));