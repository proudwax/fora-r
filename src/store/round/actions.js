import * as types from './types';
import { roundGame } from '../../api/socket';

export const setTime = (time) => {
    return {
        type: types.SET_TIME,
        payload: time
    }
}

export const newTime = (time) => dispatch => {
    roundGame.newTime((err, time) => {
        setTimeout(() => {
            dispatch(setTime(Number(time)));
        }, 500);
    }); 
}

// export const connected = (bool) => {
//     return {
//         type: types.CONNECTED,
//         payload: bool
//     }
// }

// export const quit = () => {
//     return {
//         type: types.QUIT,
//         payload: { id: null, connected: false }
//     }
// }

// export const create = () => dispatch => {
//     commonGame.create((err, gameID) => {
//         setTimeout(() => {
//             dispatch(setID(Number(gameID)));
//         }, 500);
//     }, null);
// }

// export const connect = (gameID) => (dispatch) => {
//     commonGame.connect((err, bool) => {
//         setTimeout(() => {
//             dispatch(connected(bool));
//         }, 500);
//     }, gameID);
// }

// export const logout = (gameID) => (dispatch) => {
//     commonGame.logout(() => dispatch(quit()), gameID);
// }
