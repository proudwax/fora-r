// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const getMessages = (state) => {
    return state.chat.messages;
}

export const isInited = (state) => {
    return state.chat.init;
}