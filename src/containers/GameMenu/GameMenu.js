import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { gameSelectors, gameActions } from '../../store/game';
import { userSelectors, userActions } from '../../store/user';

import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal'; 
import './GameMenu.css';

class GameMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: '',
            modalVisible: false
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOutsideModalClick = this.handleOutsideModalClick.bind(this);
    }

    handleShowModal() {
        document.addEventListener('click', this.handleOutsideModalClick, false);

        this.setState({ modalVisible: true });
    }

    handleCloseModal() {
        document.removeEventListener('click', this.handleOutsideModalClick, false);

        this.setState({ modalVisible: false });
    }

    handleOutsideModalClick(e) {
        if (this.containerModal.contains(e.target)) {
            return;
        }

        this.handleCloseModal();
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
                    <Button 
                        size='l'
                        color='secondary' 
                        classes='GameMenu-Button' 
                        onClick={this.handleShowModal}>
                        Connect to Game
                    </Button>
                    {this.state.modalVisible && <Modal nodeContainer={(node) => this.containerModal = node} onCloseModal={this.handleCloseModal}><h1>List of active game</h1></Modal>}
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
