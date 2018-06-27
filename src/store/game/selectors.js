// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getNames = (state) => {
    return state.game.players;
}

export const getListScore = (state) => {
    return state.game.listScore;
}

export const getOpponentStatus = (state) => {
    return state.game.opponentStatus;
}

export const getGameID = (state) => {
    return state.game.gameID;
}