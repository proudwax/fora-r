import React from 'react';

import Button from '../../components/Button/Button';
import GameChoiseCard from '../../components/GameChoiseCard/GameChoiseCard';

import Rules from '../../modules/Game/gameData';

import './GameChoise.css';


class GameChoise extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createRadioInputs = this.createRadioInputs.bind(this);
    }

    // создаем input radio из array
    createRadioInputs = (radioInputs) => (onChange) => {
        return radioInputs.map((item, index) => <div key={index} className='GameChoise-Item'>
            <GameChoiseCard 
                name={item.name} 
                url={item.url}
                onChange={onChange}
            />
        </div>);
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
                {this.createRadioInputs(Rules)(this.handleChange) }
                <Button size='l' color='primary' type='submit'>Send</Button>
            </form>
        </div>);
    };
}

export default GameChoise;