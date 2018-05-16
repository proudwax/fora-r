const initialState = {
    nickName: ''
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}

// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде.
export function getNickname (state) {
    return state.nickName;
}