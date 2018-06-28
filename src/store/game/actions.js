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

export const createGame = (data) => (dispatch) => {
    socket.emit('createGame', data);
    socket.on('GameID', (gameID) => {
        setTimeout(() => {
            dispatch(setGameID(Number(gameID)));
        }, 500);
    });
}

export const logOutGame = (gameID) => (dispatch) => {
    console.log(gameID);
    socket.emit('logoutGame', gameID);
    dispatch(setGameID(null));
}

export const getGames = (cb) => {
    socket.emit('getGames');
    socket.on('rooms', (games) => { console.log(games); return cb(null, games) });
}