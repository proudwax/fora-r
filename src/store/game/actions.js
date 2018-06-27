import * as types from './types';
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

export function setGameID(gameID) {
    return {
        type: types.SET_GAME_ID,
        payload: gameID
    }
}

export const createGame = () => dispatch => {
    socket.emit('firstConnect');
    socket.on('GameID', gameID => {
        setTimeout(() => {
            dispatch(setGameID(Number(gameID)));
        }, 500);
    });
}