import socket from './socket';

export const sendMessage = (data) => {
    socket.emit('sendMessageGame', data);
}

export const newMessage = (cb) => {
    socket.on('newMessageGame', data => cb(null, data));
}

export const joinMessage = (cb) => {
    socket.on('joinMessageGame', data =>   cb(null, data));
}

export const leaveMessage = (cb) => {
    socket.on('leaveMessageGame', data => cb(null, data));
}

export const close = () => {
    socket.close();
}