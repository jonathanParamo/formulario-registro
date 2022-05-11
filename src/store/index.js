import { createStore } from 'redux'

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_SURNAME = 'CHANGE_SURNAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PHONENUMBER = 'CHANGE_PHONENUMBER';

const initialState = {
  name: '',
  surname:'',
  email: '',
  phoneNumber: ''
}

function rootReducer(state, action) {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case CHANGE_SURNAME:
      return {
        ...state,
          surname: action.payload,
      }
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case CHANGE_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      }
    default:
      return state
  }
}

export const store = createStore(rootReducer, initialState)