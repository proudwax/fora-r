import React from 'react';
import { connect } from 'react-redux';
import { NavLink  } from 'react-router-dom';

import * as userSelectors from '../../store/user/reducer';

import './Menu.css';

const Menu = (props) => {
    const { roomID } = props;
    
    return (<ul className='Menu'>
        <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName='active' to={`/game/${roomID}`}>Game</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/login'>Login</NavLink></li>
    </ul>);
}

const mapStateToProps = (state) => {
    return {
        roomID: userSelectors.getRoomID(state)
    }
}; 

export default connect(mapStateToProps)(Menu);