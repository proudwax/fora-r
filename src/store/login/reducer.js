import * as types from './actionTypes';

const initialState = {
    isLogin: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.IS_LOG_IN:
            return { ...state, isLogin: action.payload };
        default:
            return state;
    }
}

// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const isLogin = (state) => {
    return state.login.isLogin;
}