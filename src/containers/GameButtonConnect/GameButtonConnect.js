import React, { Fragment } from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

import './GameButtonConnect.css';

class GameButtonConnect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            modalVisible: true
        });
    }

    handleCloseModal() {
        this.modalVisible({
            modalVisible: false
        })
    }

    render() {
        const { handleOpenModal, handleCloseModal } = this;
        const { children } = this.props;

        return (
            <Fragment>
                <Button
                    size='l'
                    color='secondary'
                    classes='GameMenu-Button'
                    onClick={handleOpenModal}>
                    Connect to Game
                </Button>
                <Modal onClose={handleCloseModal} isVisible={this.state.modalVisible}>
                    {children}
                </Modal>
            </Fragment>
        );
    }
}

export default GameButtonConnect;