import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';

class FormLogin extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Where are my topics?</h2>
                <Button text='Send' type='submit' />
            </Fragment>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(FormLogin);