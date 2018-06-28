// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getNickName = (state) => {
    return state.user.nickName;
}

export const getRole = (state) => {
    return state.user.role;
}

export const getPointOfEnter = (state) => {
    return state.user.pointOfEnter;
}