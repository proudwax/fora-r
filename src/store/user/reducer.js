import * as types from './types';

const initialState = {
    pointOfEnter: '',
    nickName: '',
    role: 'viewer'
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_NICKNAME:
            return { ...state, nickName: action.payload };
        case types.SET_ROLE:
            return { ...state, role: action.payload };

        default:
            return state;
    }
}

