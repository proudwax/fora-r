import * as types from './actionTypes';

export function setNickName(nickName) {
    return {
        type: types.SET_NICKNAME,
        payload: nickName
    };
}