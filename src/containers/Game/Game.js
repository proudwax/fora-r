import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Game extends React.Component {
    render() {
        return (
            <div>Game</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);