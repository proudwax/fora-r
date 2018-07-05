import * as types from './types';
import { chatGame } from '../../api/socket';

export function newMessage(message) {
    return {
        type: types.NEW_MESSAGE,
        payload: message
    }
}

export const addMessage = () => dispatch => {
    chatGame.newMessage((err, message) => {
        dispatch(newMessage({...message, status: 'new' }));
    });
}

export const joinMessage = () => dispatch => {
    chatGame.joinMessage((err, message) => {
        dispatch(newMessage({ ...message, status: 'join' }));
    });
}

export const leaveMessage = () => dispatch => {
    chatGame.leaveMessage((err, message) => {
        dispatch(newMessage({ ...message, status: 'leave' }));
    });
}