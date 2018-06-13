import * as types from './actionTypes';
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

export function setRoomID(roomID) {
    return {
        type: types.SET_ROOM_ID,
        payload: roomID
    }
}

export const asyncGetRoomID = () => dispatch => {
    socket.emit('firstConnect');
    socket.on('RoomID', roomID => {
        setTimeout(()=> {
            dispatch(setRoomID(Number(roomID)));
        }, 500);
    });    
}