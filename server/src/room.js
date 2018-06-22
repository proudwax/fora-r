MAX_PLAYERS = 2;

class Room {
    constructor(url) {

        this.url = url;
        this.players = [];

        this.roomID = this.generateID();
    }

    addPlayer(nickName) {
        if (this.players.length > MAX_PLAYERS) return `max players in room ${MAX_PLAYERS}`;
        
        this.players.push(nickName);
    }

    getPlayers() {
        return this.players;
    }

    generateID() {
        let parseUrl = /(\/game\/)(\d\w+)/g.exec(this.url);

        if (parseUrl) {
            return parseUrl[2];
        } else {
            return Date.now();
        }
    }

    getID() {
        return this.roomID;
    }
}

module.exports = Room;