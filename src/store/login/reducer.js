import * as types from './actionTypes';

const initialState = {
    isAuthenticated: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.IS_LOG_IN:
            return { ...state, isAuthenticated: action.payload };
        default:
            return state;
    }
}

// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const isLogin = (state) => {
    return state.login.isAuthenticated;
}