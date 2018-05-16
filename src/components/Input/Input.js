import React from 'react';

const Input = ({ type, name, placeholder, value, reqired, ...props}) => {
    return <input className='Input' type={type} name={name} placeholder={placeholder} value={value} />
};

export default Input;