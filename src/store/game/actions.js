import * as types from './types';
import { commonGame } from '../../api/socket';

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
    commonGame.create((err, gameID) => {
        setTimeout(() => {
            dispatch(setID(Number(gameID)));
        }, 500);
    }, null);
}

export const connect = (gameID) => (dispatch) => {
    commonGame.connect((err, bool) => {
        setTimeout(() => {
            dispatch(connected(bool));
        }, 500);
    }, gameID);
}

export const logout = (gameID) => (dispatch) => {
    commonGame.logout(() => dispatch(quit()), gameID);
}
