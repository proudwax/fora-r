import socket from './socket';

export const newTime = (cb, data) => {
    socket.emit('roundNewTime', data);
    socket.on('roundSetNewTime', time => cb(null, time));
}
