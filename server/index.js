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
    let addedUser = false;

    client.on('addUser', (userName) => {
        if (addedUser) return;

        client.userName = userName;
        addedUser = true;

        console.log(`user ${client.userName} is connected`);
    });

    client.on('createGame', () => {

        clientURL = url.parse(client.handshake.headers.referer).pathname;
        room = new Room(clientURL);
        roomID = room.getID();

        console.log('create game ID ', roomID);
        client.emit('createdGameID', roomID);

        // if (Rooms.indexOf(roomID) === -1) {
        //     Rooms.push(roomID);
        //     client
        //         .emit('rooms', Rooms)
        //         .emit('GameID', roomID)
        //         .join(roomID, () => {
        //             io.in(roomID).clients((error, clients) => {
        //                 if (error) throw error;
        //                 console.log(clients);
        //             });
        //         });
        //     console.log('Add room', roomID);
        // } 

    });

    client.on('connectGame', (roomID) => {
        client.join(roomID, () => {
            client.userRoom = roomID;
            console.log(`${client.userName} join the game ID ${roomID}`);

            // io.in(roomID).clients((error, clients) => {
            //     if (error) throw error;
            //     console.log(clients);
            // });
            io.to(client.userRoom).emit('joinMessageGame', { name: client.userName });
        })
            .emit('connectedGame', true);
    })

    client.on('logoutGame', (roomID) => {

        client.leave(roomID);

        io.in(roomID).clients((error, clients) => {
            if (error) throw error;
            console.log(clients);
        });

        io.to(roomID).emit('leaveMessageGame', { name: client.userName });
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

    client.on('disconnect', () => {
        console.log(`user ${client.userName} is disconnected`);
        io.to(client.userRoom).emit('leaveMessageGame', { name: client.userName });
    });


    // Chat
    client.on('sendMessageGame', (message) => {
        io.to(client.userRoom).emit('newMessageGame', { name: client.userName, text: message });
        console.log(`user ${client.userName} send message: ${message}`);
    });

    // Round
    client.on('startRound', (roundTime = 30) => {
        client.gameRound = setInterval(() => {
            let tick = 0;
            io.to(client.userRoom).emit('roundTick', tick++);
        }, 1000);

        setTimeout(() => {
            clearInterval(client.gameRound);
            io.to(client.userRoom).emit('roundEnd');
        }, roundTime);
    });

    client.on('stopRound', () => {
        clearInterval(client.gameRound);
        io.to(client.userRoom).emit('roundEnd');
    });

});

http.listen(port, () => {
    console.log('listening on *:' + port);
});