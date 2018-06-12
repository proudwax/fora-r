import React from 'react';

import Menu from '../Menu/Menu';
import Grid from '../Grid/Grid';
import FormLogin from '../../containers/FormLogin/FormLogin';

import './PageLogin.css';

const PageLogin = (rest) => {
    return (<Grid>
        <Menu />
        <div className='PageLogin'>
            <h1>PageLogin</h1>
            <FormLogin {...rest} />
        </div>
    </Grid>);
}

export default PageLogin;