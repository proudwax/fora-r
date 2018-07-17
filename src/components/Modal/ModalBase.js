import React from 'react';
import ReactDOM from 'react-dom';

import './ModalBase.css';

class ModalBase extends React.Component {
    constructor(props) {
        super(props);

        this._modal = document.createElement('div');
        this._modal.classList.add('Modal');
    }

    componentWillMount() {
        document.body.appendChild(this._modal);
    }
    componentWillUnmount() {
        document.body.removeChild(this._modal);
    }

    render() {
        return ReactDOM.createPortal(<div className='Modal-Table'>
            <div className='Modal-Cell'>
                <div ref={this.props.modalContent} className='Modal-Content'>
                    {this.props.children}
                </div>
            </div>
        </div>, this._modal);
    }
}

export default ModalBase;