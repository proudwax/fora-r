import * as types from './types';

const initialState = {
    messages: []
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] };

        default:
            return state;
    }
}