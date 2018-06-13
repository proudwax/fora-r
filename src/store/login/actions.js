import * as types from './actionTypes';

export const authenticate = () => {
    return {
        type: types.IS_LOG_IN,
        payload: true
    }
}