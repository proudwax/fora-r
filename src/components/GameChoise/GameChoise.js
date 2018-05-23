import React from 'react';

import './GameChoise.css';

const radioInputs = [
    { type: 'radio', name: 'choise', value: 1, label: '1' },
    { type: 'radio', name: 'choise', value: 2, label: '2' },
    { type: 'radio', name: 'choise', value: 3, label: '3' },
    { type: 'radio', name: 'choise', value: 4, label: '4' },
    { type: 'radio', name: 'choise', value: 5, label: '5' },
];

class GameChoise extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createRadioInputs = this.createRadioInputs.bind(this);
    }

    // создаем input radio из array
    createRadioInputs = (radioInputs) => (onChange) => {
        return radioInputs.map((item, index) => <label key={index}>
            {item.label}
            <input 
                type={item.type} 
                name={item.name} 
                value={item.value} 
                onChange={onChange}
            />
        </label>);
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
        const { round } = this.props;

        return (<div>
            <h1>Rounr: {round}</h1>
            <h2>GameChoise</h2>
            <form onSubmit={this.handleSubmit}>
                { this.createRadioInputs(radioInputs)(this.handleChange) }
                <button type='submit'>Send</button>
            </form>
        </div>);
    };
}

export default GameChoise;