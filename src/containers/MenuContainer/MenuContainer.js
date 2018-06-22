import React from 'react';
import { connect } from 'react-redux';

import * as userSelectors from '../../store/user/reducer';

import Menu from '../../components/Menu/Menu';

class MenuContainer extends React.Component {
    render () {
        const { roomID } = this.props;

        const items = [
            { path: '/', text: 'Home' },
            { path: '/game' + (roomID && `/${roomID}`), text: 'Game' },
            { path: '/login', text: 'Login' }
        ];

        return (<Menu items={items}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        roomID: userSelectors.getRoomID(state)
    }
}; 

export default connect(mapStateToProps)(MenuContainer);