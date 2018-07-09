import React from 'react';
import classNames from 'classnames';

import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            focused: !!props.autoFocus
        };

        this._input = React.createRef();
        
        this.focus = this.focus.bind(this);
        this.focusIn = this.focusIn.bind(this);
        this.focusOut = this.focusOut.bind(this);
    }

    componentDidMount() {
        this.focus();
    }
    
    focusIn() {
        this.setState({ focused: true });
    }

    focusOut() {
        this.setState({ focused: false });
    }

    focus() {
        this.setState({ focused: true });
        this._input.focus();
    }

    render() {
        const { size, ...rest } = this.props;
        const { focused } = this.state;

        const className = classNames(
            'Input',
            size && `Input_size_${size}`,
            focused && 'Input_focused'
        );

        return (<div className={className}>
            <input onFocus={this.focusIn} onBlur={this.focusOut} ref={node => (this._input = node)} className='Input-Control' {...rest}/>
        </div>);
    }
}

export default Input;