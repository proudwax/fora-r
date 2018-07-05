import io from 'socket.io-client';

const socket = io('http://localhost:8000');

export const create = (cb, data) => {
    socket.on('createdGameID', gameID => cb(null, gameID));
    socket.emit('createGame', data);
}

export const connect = (cb, data) => {
    socket.emit('connectGame', data);
    socket.on('connectedGame', bool => cb(null, bool));
}

export const logout = (cb, data) => {
    socket.emit('logoutGame', data);
    cb();
}










socket.on('reconnect', function () {
    console.log('reconnect');
    // if (username) {
    //     socket.emit('add user', username);
    // }
});