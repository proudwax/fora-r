import React from 'react';
import styled from 'styled-components';

import './GameTimer.css';

const Line = styled.span`
    width: ${props => { return (props.timePassed / props.roundTime * 100).toFixed(2); }}%;
`;

class GameTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tick: 0
        };

        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleRestartTimer = this.handleRestartTimer.bind(this);
    }

    handleStartTimer() {
        this.timer = setInterval(() => {
            this.setState(prevState => { return { ...prevState, tick: prevState.tick + 1 } });
        }, 1000);

        setTimeout(() => {
            clearInterval(this.timer);
        }, this.props.roundTime * 1000);
    }

    handleRestartTimer() {
        clearInterval(this.timer);

        this.handleStartTimer();
    }

    handleStopTimer() {
        clearTimeout(this.timer);
    }

    componentDidMount() {
        this.handleStartTimer();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (<div className='GameTimer'>
            <Line timePassed={this.state.tick} roundTime={this.props.roundTime} className='GameTimer-Line'></Line>
        </div>);
    }
}

GameTimer.defaultProps = {
    roundTime: 10
};

export default GameTimer;