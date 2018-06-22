import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../Grid/Grid';

import './PageHome.css';

const PageHome = () => {
    return (<Grid>
        <MenuContainer />
        <div className='PageHome'>PageHome</div>
    </Grid>);
}

export default PageHome;