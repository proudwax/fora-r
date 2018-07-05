import * as types from './types';
import * as Game from '../../api/socket';

export function setID(id) {
    return {
        type: types.SET_ID,
        payload: id
    }
}

export const connected = (bool) => {
    return {
        type: types.CONNECTED,
        payload: bool
    }
}

export const quit = () => {
    return {
        type: types.QUIT,
        payload: { id: null, connected: false }
    }
}

export const create = () => dispatch => {
    Game.common.create((err, gameID) => {
        setTimeout(() => {
            dispatch(setID(Number(gameID)));
        }, 500);
    }, null);
}

export const connect = (gameID) => (dispatch) => {
    Game.common.connect((err, bool) => {
        setTimeout(() => {
            dispatch(connected(bool));
        }, 500);
    }, gameID);
}

export const logout = (gameID) => (dispatch) => {
    Game.common.logout(() => dispatch(quit()), gameID);
}
