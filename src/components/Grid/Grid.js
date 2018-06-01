import React from 'react';

import './Grid.css';

const Grid = ({children, ...props}) => {
    return (<div {...props} className='Grid'>{children}</div>);
}

export default Grid;