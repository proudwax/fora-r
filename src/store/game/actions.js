import * as types from './actionTypes';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

export function addListScore(score) {
    return {
        type: types.ADD_SCORE,
        payload: score
    };
}

export function listenOpponentStatus(interval) {
    socket.on('timer', timestamp => console.log(timestamp));
    socket.emit('subscribeToTimer', 1000);
}