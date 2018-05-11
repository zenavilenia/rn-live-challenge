import {
  SET_WORD
} from './action.type';

const initialState = {
  words: ['CAT', 'DOG'],
  word: '',
  loading: false,
  error: {
    status: false,
    message: '',
  },
}

const words = (state = { ...initialState }, action) => {
  switch(action.type) {
    case SET_WORD:
      return ({
        ...state,
        word: action.payload,
      })
    default:
      return state;
  }
}

export default words;