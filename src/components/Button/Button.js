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

        this.focus = this.focus.bind(this);
        this.focusIn = this.focusIn.bind(this);
        this.focusOut = this.focusOut.bind(this);
    }

    focusIn() {
        this.setState({ focused: true });
    }

    focusOut() {
        this.setState({ focused: false });
    }

    focus() {
        this.setState({ focused: true });
        this._button.focus();
    }
    
    render() {
        const { classes, color, size, disabled, ...rest } = this.props;
        const { focused } = this.state;

        const className = classNames(
                'Button',
                size ? `Button_size_${size}` : 'Button_size_m',
                color && `Button_${color}`,
                focused && 'Button_focused',
                classes
            );

        return (<button 
            ref={node => (this._button = node)} 
            onFocus={this.focusIn} 
            onBlur={this.focusOut} 
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