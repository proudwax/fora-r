import * as types from './actionTypes';

const initialState = {
    players: [
        'Player1',
        'Player2'
    ],
    listScore: [
        [1, 0],
        [0, 0],
        [0, 1],
        [1, 0]
    ]
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_SCORE:
            return { ...state, score: state.score.push(action.payload) };
        default:
            return state;
    }
}

// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getNames = (state) => {
    return state.game.players;
}

export const getListScore = (state) => {
    return state.game.listScore;
}