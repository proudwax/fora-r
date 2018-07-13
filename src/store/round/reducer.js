import * as types from './types';

const initialState = {
    score: {},
    time: 30, 
    tick: 0,
    choise: ''
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_TIME:
            return { ...state, time: action.payload };
        case types.ADD_SCORE:
            return { ...state, score: {...store, score: action.payload} };    
        case types.SET_TICK:
            return { ...state, tick: action.payload };
        case types.SET_CHOISE:
            return { ...state, choise: action.payload };    

        default:
            return state;
    }
}