import * as types from './types';

export function changeNickName(nickName) {
    return {
        type: types.SET_NICKNAME,
        payload: nickName
    };
}

export const setRole = (role) => {
    return {
        type: types.SET_ROLE,
        payload: role
    }
}