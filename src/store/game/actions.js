import * as types from './actionTypes';

export function addListScore(score) {
    return {
        type: types.ADD_SCORE,
        payload: score
    };
}