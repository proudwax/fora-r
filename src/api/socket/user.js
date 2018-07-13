import socket from './socket';

export const setUserRole = (cb) => {
    socket.on('sendUserRole', role => cb(null, role));
}

export const sendUserRole = (role) => {
    socket.emit('setUserRole', role);
}