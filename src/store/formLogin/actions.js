import * as types from './actionTypes';

export function setNickName(nickName) {
    return {
        type: types.SET_NICKNAME,
        payload: nickName
    };
}

export function toggleLogin(toggleLogin) {
    return {
        type: types.IS_LOG_IN,
        payload: toggleLogin
    };
}