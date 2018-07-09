import * as types from './types';

const initialState = {
    id: null,
    connected: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_ID:
            return { ...state, id: action.payload };
        case types.CONNECTED:
            return { ...state, connected: action.payload };    
        case types.QUIT:
            return { ...state, id: action.payload.id, connected: action.payload.connected };

        default:
            return state;
    }
}