// Селектор  —  это чистая функция, принимающая в качестве аргумента глобальный стейт 
// и возвращающая его в преобразованном виде.
export const isLogin = (state) => {
    return state.login.isAuthenticated;
}

export const isRedirected = (state) => {
    return state.login.redirectToReferrer;
}