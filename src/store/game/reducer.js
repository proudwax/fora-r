import * as types from './types';

const initialState = {
    gameID: null,
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
        case types.SET_GAME_ID:
            return { ...state, gameID: action.payload };    

        default:
            return state;
    }
}