import React from 'react';

import './GameChoise.css';

class GameChoise extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.getAll());
        // this.props.addScore();
    }

    render() {
        const { Round } = this.props;
        return (<div>
            <h1>Rounr: {Round}</h1>
            <h2>GameChoise</h2>
            <form onSubmit={this.handleSubmit}>
                <label>1<input type='radio' name='choise' value='1' /></label>
                <label>2<input type='radio' name='choise' value='2' /></label>
                <label>3<input type='radio' name='choise' value='3' /></label>
                <label>4<input type='radio' name='choise' value='4' /></label>
                <label>5<input type='radio' name='choise' value='5' /></label>
                <button type='submit'>Send</button>
            </form>
        </div>);
    };
}

export default GameChoise;