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
let clientURL = '';
let room = null;
let roomID = null;

io.on('connection', (client) => {

    client.on('createGame', (data) => {
        clientURL = url.parse(client.handshake.headers.referer).pathname;
        room = new Room(clientURL);
        roomID = room.getID();
        client.nickName = data.name;

        if (Rooms.indexOf(roomID) === -1) {
            Rooms.push(roomID);
            client
                .emit('rooms', Rooms)
                .emit('GameID', roomID)
                .join(roomID, () => {
                    io.in(roomID).clients((error, clients) => {
                        if (error) throw error;
                        console.log(clients);
                    });
                });
            console.log('Add room', roomID);
        }

        // console.log('client gaming in room: ', roomID);
        // console.log(Rooms);
    });

    // client.on('setNickName', (nickName) => {
    //     console.log('client nickName: ', nickName);
    //     io.sockets.in(roomID).emit('message', 'what is going on, party people?');
    // });

    client.on('getGames', () => {
        client.emit('rooms', Rooms);
    });

    client.on('logoutGame', (roomID) => {

        client.leave(roomID);

        io.in(roomID).clients((error, clients) => {
            if (error) throw error;
            console.log(clients);
        });
        // console.log(typeof roomID);

        // console.log(client.adapter.rooms);

        // for (let room of Object.keys(client.adapter.rooms)) {
        //     io.in(roomID).clients((error, clients) => {
        //         console.log('Room ', room, '  ', clients);
        //     });
        // }


        // const index = Rooms.indexOf(roomID);

        // Rooms.splice(index, 1);
    });

    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('disconnect', () => {
        console.log('user disconnected');
        // console.log('user disconnected', client.adapter.rooms);
    });
});

// for(let room of Rooms) {
//     io.in(room).clients((error, socketIds) => {
//         if (error) throw error;

//         socketIds.forEach(socketId => io.of('/').adapter.remoteLeave(socketId, room));

//     });
// }


http.listen(port, () => {
    console.log('listening on *:' + port);
});
