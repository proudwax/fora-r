// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getID = (state) => {
    return state.game.id;
}

export const isConnected = (state) => {
    return state.game.connected;
}