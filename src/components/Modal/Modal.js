import React from 'react';

import ModalBase from './ModalBase';

class Modal extends React.Component {
    static getDerivedStateFromProps(nextProps) {
        if (nextProps.isVisible) {
            return {
                isVisible: true,
            };
        } else {
            return {
                isVisible: false,
            };
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            isVisible: props.isVisible
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOutsideModalClick = this.handleOutsideModalClick.bind(this);
    }

    handleShowModal() {
        document.addEventListener('click', this.handleOutsideModalClick, false);
    }

    handleCloseModal() {
        document.removeEventListener('click', this.handleOutsideModalClick, false);

        this.setState({ isVisible: false });
    }

    handleOutsideModalClick(e) {
        if (this._content.contains(e.target)) {
            return;
        }

        this.handleCloseModal();
    }

    render() {
        const { isVisible } = this.state;

        if (isVisible) {
            this.handleShowModal();

            return (
                <ModalBase
                    modalContent={(node) => this._content = node}
                    onClose={this.handleCloseModal}
                >
                    {this.props.children}
                </ModalBase>);
        }
        return null;
    }
}

Modal.defaultProps = {
    isVisible: false
};

export default Modal;