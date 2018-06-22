

class Game {
    constructor() {
        // Ключи объекта выигрывают
        this.rules = {
            'rock': ['scissors', 'lizard'],
            'paper': ['rock', 'spock'],
            'scissors': ['paper', 'lizard'],
            'lizard': ['spock', 'paper'],
            'spock': ['rock', 'scissors']
        }
    }

    round(player1, player2) {
        if (player1 == player2) return [0, 0];

        if (this.rules[player1].some(item => item === player2)) {
            return [1, 0];
        } else {
            return [0, 1];
        }
    }
}

let newGame = new Game();

console.log(newGame.round('rock', 'rock'));