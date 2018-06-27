import React from 'react';

import Menu from '../../components/Menu/Menu';

class MenuContainer extends React.Component {
    render () {
        const items = [
            { path: '/', text: 'Home' },
            { path: '/game', text: 'Game' },
            { path: '/login', text: 'Login' }
        ];

        return (<div className='Grid-Sidebar'><Menu items={items}/></div>);
    }
}

export default MenuContainer;