import * as types from './actionTypes';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

export function addListScore(store) {
    return {
        type: types.ADD_SCORE,
        payload: store
    };
}

export function listenOpponentStatus(store) {
    socket.emit('sendStore', store);
}