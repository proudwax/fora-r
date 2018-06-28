import * as types from './types';

const initialState = {
    isAuthenticated: false,
    redirectToReferrer: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.IS_LOG_IN:
            return { ...state, isAuthenticated: action.payload };
        case types.REDIRECT:
            return { ...state, redirectToReferrer: true };
        default:
            return state;
    }
}