const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const url = require('url');
const port = process.env.PORT || 8000;

const Room = require('./src/room');
// app.get('/*', (req, res) => {
// console.log(req.url);
// });

const Rooms = [];

io.on('connection', (client) => {
    const clientURL = url.parse(client.handshake.headers.referer).pathname; 
    const room = new Room(clientURL);
    const roomID = room.getID();

    client.on('firstConnect', () => {
        client.join(roomID);
        client.emit('GameID', roomID);
        Rooms.indexOf(roomID) === -1 && Rooms.push(roomID);

        console.log('client gaming in room: ', roomID);
        console.log(Rooms);
    });
    
    client.on('setNickName', (nickName) => {
        console.log('client nickName: ', nickName);
        io.sockets.in(roomID).emit('message', 'what is going on, party people?');
    });

    
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('disconnect', () => {
        console.log('user disconnected');
        // console.log(Object.keys(client.adapter.rooms));
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});
