import { GET_SEARCHED_TRIBUTES, SEARCHED_TRIBUTES_LOADING, SEARCHED_TRIBUTES_NOT_FOUND, CLEAR_SEARCHED_TRIBUTES } from '../actions/types';

const initialState = {
  searchedTributes: null,
  searchedTributesLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCHED_TRIBUTES_LOADING:
      return {
        ...state,
        searchedTributesLoading: true
      }
    case GET_SEARCHED_TRIBUTES:
      return {
        ...state,
        searchedTributes: action.payload,
        searchedTributesLoading: false
      }
    case CLEAR_SEARCHED_TRIBUTES:
      return {
        ...state,
        searchedTributes: null
      }
    case SEARCHED_TRIBUTES_NOT_FOUND:
      return {
        ...state,
        searchedTributes: null
      }
    default:
      return state;
  }
}