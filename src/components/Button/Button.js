import React from 'react';

import './Button.css';

const Button = ({ text, cls, type, ...props }) => {
    const className = cls => {
        return cls ? `Button ${cls}` : 'Button';
    };
    return (<button className={className()} type={type}><span className='Button-Text'>{text}</span></button>);
}

export default Button;