import {
  SET_WORD,
  CHANGE_STATUS
} from './action.type';

const initialState = {
  words: ['CAT', 'DOG', 'KUCING', 'TERBANG'],
  word: '',
  isWin: false,
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
    case CHANGE_STATUS:
      return ({
        ...state,
        isWin: true,
      })
    default:
      return state;
  }
}

export default words;