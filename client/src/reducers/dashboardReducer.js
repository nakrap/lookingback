import { GET_CREATED_TRIBUTES, CREATED_TRIBUTES_LOADING, CLEAR_CREATED_TRIBUTES } from '../actions/types';

const initialState = {
  createdTributes: null,
  createdTributesLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATED_TRIBUTES_LOADING:
      return {
        ...state,
        createdTributesLoading: true
      }
    case GET_CREATED_TRIBUTES:
      return {
        ...state,
        createdTributes: action.payload,
        createdTributesLoading: false
      }
    case CLEAR_CREATED_TRIBUTES:
      return {
        ...state,
        createdTributes: null
      }
    default:
      return state;
  }
}