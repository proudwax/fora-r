import * as types from './types';

const initialState = {
    init: false,
    messages: []
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] };
        case types.INITED:
            return { ...state, init: action.payload };
        case types.LOGOUT:
            return { ...state, messages: action.payload };

        default:
            return state;
    }
}