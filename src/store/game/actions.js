import * as types from './types';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

export function setID(id) {
    return {
        type: types.SET_ID,
        payload: id
    }
}

export const connected = (bool) => {
    return {
        type: types.CONNECTED,
        payload: bool
    }
}

export const quit = () => {
    return {
        type: types.QUIT,
        payload: { id: null, connected: false }
    }
}

export const create = () => dispatch => {
    socket.emit('createGame');

    socket.on('createdGameID', gameID => {
        setTimeout(() => {
            dispatch(setID(Number(gameID)));
        }, 500);
    });
}

export const connect = (gameID) => (dispatch) => {
    socket.emit('connectGame', gameID);

    socket.on('connectedGame', bool => {
        setTimeout(() => {
            dispatch(connected(bool));
        }, 500);
    });
}

export const logout = (gameID) => dispatch => {
    socket.emit('logoutGame', gameID);
    dispatch(quit());
}

export const getGames = (cb) => {
    socket.emit('getGames');
    socket.on('rooms', (games) => { console.log(games); return cb(null, games) });
}

socket.on('reconnect', function () {
    console.log('reconnect');
    // if (username) {
    //     socket.emit('add user', username);
    // }
});