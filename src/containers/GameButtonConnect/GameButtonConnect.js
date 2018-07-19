import React, { Fragment } from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

// import './GameButtonConsnect.css';

class GameButtonConnect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            modalVisible: true
        });
    }

    handleCloseModal() {
        this.setState({
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
                <Modal onClose={(e) => handleCloseModal(e)} isVisible={this.state.modalVisible}>
                    {children}
                </Modal>
            </Fragment>
        );
    }
}

export default GameButtonConnect;