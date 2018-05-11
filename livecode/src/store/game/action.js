import {
  SET_WORD
} from './action.type';

export const setWord = (word) => {
  return dispatch => {
    dispatch(setRandomWord(word));
  }
}

const setRandomWord = (word) => ({
  type: SET_WORD,
  payload: word
})