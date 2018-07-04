import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { gameSelectors, gameActions } from '../../store/game';

import './GameConnect.css';

import Spinner from '../../components/Spinner/Spinner';

class GameConnect extends React.Component {
    constructor(props) {
        super(props);

        const { id, onCreate } = props;

        if(!id) {
            onCreate();
        }
    }
    
    render() {
        const { id, isConnected, onConnect } = this.props;

        if (!isConnected) {
            if (id) {
                onConnect(id);
            }
            
            return (<div className='GameConnect'><Spinner /></div>);
        }

        return this.props.children;
    }
}

const mapStateToProps = (state) => {
    return {
        id: gameSelectors.getID(state),
        isConnected: gameSelectors.isConnected(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: bindActionCreators(gameActions.create, dispatch),
        onConnect: bindActionCreators(gameActions.connect, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GameConnect);