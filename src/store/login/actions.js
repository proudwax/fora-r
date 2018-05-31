import * as types from './actionTypes';

export function toggleLogin(toggleLogin) {
    return {
        type: types.IS_LOG_IN,
        payload: toggleLogin
    };
}

export const logined = () => {
    return {
        type: types.IS_LOG_IN,
        payload: true
    }
}