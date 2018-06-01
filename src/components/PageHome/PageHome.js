import React from 'react';

import Menu from '../Menu/Menu';
import Grid from '../Grid/Grid';

import './PageHome.css';

const PageHome = () => {
    return (<Grid>
        <Menu />
        <div className='PageHome'>PageHome</div>
    </Grid>);
}

export default PageHome;