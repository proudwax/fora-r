import * as types from './actionTypes';

const initialState = {
    nickName: '',
    roomID: null
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_NICKNAME:
            return { ...state, nickName: action.payload };
        case types.SET_ROOM_ID:
            return { ...state, roomID: action.payload };
        default:
            return state;
    }
}

// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export function getNickName(state) {
    return state.user.nickName;
}

export function getRoomID(state) {
    return state.user.roomID;
}