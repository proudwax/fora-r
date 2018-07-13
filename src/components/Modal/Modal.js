import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../components/Button/Button';

import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this._modal = document.createElement('div');
    }

    componentWillMount() {
        document.body.appendChild(this._modal);
    }
    componentWillUnmount() {
        document.body.removeChild(this._modal);
    }

    render() {
        return ReactDOM.createPortal(<div className='Modal'>
                <div className='Modal-Table'>
                    <div className='Modal-Cell'>
                        <div ref={this.props.nodeContainer} className='Modal-Content'>
                            <Button onClick={this.props.onCloseModal}>Close</Button>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>, this._modal);
    }
}

export default Modal;