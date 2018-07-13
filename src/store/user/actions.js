import * as types from './types';
import { user } from '../../api/socket';

export function changeNickName(nickName) {
    return {
        type: types.SET_NICKNAME,
        payload: nickName
    };
}

export const setRole = (role) => {
    return {
        type: types.SET_ROLE,
        payload: role
    }
}

// только подписка на user.Role
export const getRole = () => dispatch => {
    user.setUserRole((err, role) => {
        setTimeout(() => {
            dispatch(setRole(role));
        }, 500);
    }, null);
}