import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { gameSelectors, gameActions } from '../../store/game';
import { userSelectors, userActions } from '../../store/user';

import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';
import GameButtonConnect from '../../containers/GameButtonConnect';

import './GameMenu.css';

class GameMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        };

        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate() {
        this.setState({
            status: 'waiting'
        });

        this.props.onGetRole();
        this.props.onCreate();
    }

    render() {
        if (this.props.id) {
            return (<Redirect to={{
                pathname: '/game/' + this.props.id,
                state: { from: this.props.location }
            }}
            />);
        }

        if (this.state.status === 'waiting') {
            return (<div className='GameMenu'>
                <Spinner />
            </div>);
        }

        return (
            <div className='GameMenu' >
                <div className='GameMenu-Item'>
                    <Button
                        size='l'
                        color='primary'
                        classes='GameMenu-Button'
                        onClick={this.handleCreate}>
                        Create Game
                    </Button>
                </div>
                <div className='GameMenu-Item'>
                    <GameButtonConnect>
                        <p>test</p>
                    </GameButtonConnect>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: gameSelectors.getID(state),
        role: userSelectors.getRole(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: bindActionCreators(gameActions.create, dispatch),
        onGetRole: bindActionCreators(userActions.getRole, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMenu);
