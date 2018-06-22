import React from 'react';
import { NavLink  } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    const items = props.items.map((item, index) => {
        return (<li key={index}><NavLink exact activeClassName='active' to={item.path}>{item.text}</NavLink></li>);
    });

    return (<ul className='Menu'>{items}</ul>);
}

export default Menu;