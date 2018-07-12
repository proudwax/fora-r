import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import GameChoiseCard from '../../components/GameChoiseCard/GameChoiseCard';

import Rules from '../../modules/Game/gameData';

import './GameChoise.css';

const Circle = styled.div`
    left: calc(50% + ${props => x(30)(props.angle)}%);
    top: calc(50% + ${props => y(30)(props.angle)}%);
`;

// 360 / count * index / 180 * Math.PI => 1deg = (PI / 180)rad 
// const angle = (count) => (index) => 2 / count * index * Math.PI; 
const angle = (count) => (index) => (360 / count * index - 90) / 180 * Math.PI; // Поворачиваем точку отсчёта.

const x = (radius) => (angle) => radius * Math.cos(angle).toFixed(2);
const y = (radius) => (angle) => radius * Math.sin(angle).toFixed(2);

class GameChoise extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createRadioInputs = this.createRadioInputs.bind(this);
    }

    // создаем input radio из array
    createRadioInputs = (radioInputs) => (onChange) => {
        const count = angle(radioInputs.length);

        return radioInputs.map((item, index) => <Circle angle={count(index)} key={index} className='GameChoise-Item'>
            <GameChoiseCard
                index={index}
                name={item.name}
                url={item.url}
                onChange={onChange}
            />
        </Circle>);
    }

    handleChange(e) {
        this.radioChecked = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.radioChecked);
        // this.props.addScore();
    }

    render() {
        return (<div className='GameChoise'>
            <form onSubmit={this.handleSubmit}>
                <div className='GameChoise-List'>
                    {this.createRadioInputs(Rules)(this.handleChange)}
                </div>
                <Button size='l' color='primary' type='submit'>Send</Button>
            </form>
        </div>);
    };
}

export default GameChoise;