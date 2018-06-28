import * as types from './types';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

export function changeNickName(nickName) {
    return {
        type: types.SET_NICKNAME,
        payload: nickName
    };
}

export const sendNickName = (nickName) => {
    socket.emit('setNickName', nickName);
}

export const setRole = (role) => {
    return {
        type: types.SET_ROLE,
        payload: role
    }
}