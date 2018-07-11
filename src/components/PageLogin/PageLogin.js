import React from 'react';

import MenuContainer from '../../containers/MenuContainer/MenuContainer';
import Grid from '../Grid/Grid';
import FormLogin from '../../containers/FormLogin/FormLogin';

import './PageLogin.css';

const PageLogin = (rest) => {
    return (<Grid>
        <MenuContainer />
        <div className='Grid-Main'>
            <h1>PageLogin</h1>
            <FormLogin {...rest} />
        </div>
    </Grid>);
}

export default PageLogin;