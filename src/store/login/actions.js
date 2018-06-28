import * as types from './types';

export const authenticate = () => {
    return {
        type: types.IS_LOG_IN,
        payload: true
    }
}