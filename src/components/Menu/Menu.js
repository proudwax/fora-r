import React from 'react';
import { NavLink  } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
    return (<ul className='Menu'>
        <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/game'>Game</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/login'>Login</NavLink></li>
    </ul>);
}

export default Menu;