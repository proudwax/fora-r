// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getTime = (state) => {
    return state.round.time;
}

export const getTick = (state) => {
    return state.round.tick;
}

export const getScore = (state) => {
    return state.round.score;
}