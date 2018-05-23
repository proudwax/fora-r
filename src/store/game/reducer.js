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
    ],
    opponentStatus: 'pending' // pending || done
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_SCORE:
            return { ...state, score: state.score.push(action.payload) };
        case types.OPPONENT_PENDING:
            return { ...state, opponentStatus: 'pending' };
        case types.OPPONENT_DONE:
            return { ...state, opponentStatus: 'done' };    

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

export const getOpponentStatus = (state) => {
    return state.game.opponentStatus;
}