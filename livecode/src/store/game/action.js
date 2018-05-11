import {
  SET_WORD,
  CHANGE_STATUS
} from './action.type';

export const setWord = (word) => {
  return dispatch => {
    dispatch(setRandomWord(word));
  }
}

export const setStatus = () => {
  return dispatch => {
    dispatch(setNewStatus());
  }
}

const setRandomWord = (word) => ({
  type: SET_WORD,
  payload: word
})

const setNewStatus = () => ({
  type: CHANGE_STATUS,
})