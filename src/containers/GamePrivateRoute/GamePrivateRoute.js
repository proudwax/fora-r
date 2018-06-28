import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { loginSelectors } from '../../store/login';

const GamePrivateRoute = ({ component: Component, ...rest }) => {
    return (<Route {...rest} render={props => {
        return rest.isLogin ? (
            <Component {...props} />
        ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
    }
    }
    />);
};

const mapStateToProps = (state) => {
    return {
        isLogin: loginSelectors.isLogin(state)
    };
}


export default connect(mapStateToProps)(GamePrivateRoute);