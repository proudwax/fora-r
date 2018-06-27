import React from 'react';
import { NavLink  } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    const items = props.items.map((item, index) => {
        return (<li className='Menu-Item' key={index}><NavLink className='Menu-Link' exact activeClassName='Menu-Link_active' to={item.path}>{item.text}</NavLink></li>);
    });

    return (<ul className='Menu'>{items}</ul>);
}

export default Menu;