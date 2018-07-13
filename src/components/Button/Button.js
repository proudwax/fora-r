import React from 'react';
import classNames from 'classnames';

import './Button.css';

class Button extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this._button = React.createRef();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
    }

    handleFocusIn() {
        this.setState({ focused: true });
    }

    handleFocusOut() {
        this.setState({ focused: false });
    }

    handleFocus() {
        this.setState({ focused: true });
        this.props.ref.focus();
    }
    
    componentDidMount() {
        const { node } = this.props;

        if (node) {
            node(this._button);
        }
    }

    render() {
        const { classes, color, size, disabled, node, ...rest } = this.props;
        const { focused } = this.state;

        const className = classNames(
                'Button',
                size ? `Button_size_${size}` : 'Button_size_m',
                !disabled && color && `Button_${color}`,
                !disabled && focused && 'Button_focused',
                classes
            );

        return (<button 
            ref={node => this._button = node}
            onFocus={this.handleFocusIn} 
            onBlur={this.handleFocusOut} 
            className={className} 
            {...rest} 
            disabled={disabled}>
                <span className='Button-Text'>
                    {this.props.children}
                </span>
            </button>
        );
    }   
}

export default Button;