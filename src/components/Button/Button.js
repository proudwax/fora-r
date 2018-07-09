import React from 'react';
import classNames from 'classnames';

import './Button.css';

const Button = (props) => {
    const { classes, color, disabled, ...rest } = props

    const className = classNames(
            'Button', 
            `Button_${color}`,
            classes
        );
    return (<button className={className} {...rest} disabled={disabled}><span>{props.children}</span></button>);
}

export default Button;