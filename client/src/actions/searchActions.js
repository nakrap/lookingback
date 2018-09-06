import axios from 'axios';

import { GET_SEARCHED_TRIBUTES, SEARCHED_TRIBUTES_LOADING, SEARCHED_TRIBUTES_NOT_FOUND, CLEAR_SEARCHED_TRIBUTES } from './types';

// get created tributes
export const getSearchedTributes = (name) => dispatch => {
  dispatch(setSearchedTributesLoading());
  axios.get(`/api/profile/search/${name}`)
    .then(res =>
      dispatch({
        type: GET_SEARCHED_TRIBUTES,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_SEARCHED_TRIBUTES,
        payload: {}
      })
    )
}

// created tributes loading
export const setSearchedTributesLoading = () => {
  return {
    type: SEARCHED_TRIBUTES_LOADING
  }
}

// clear created tributes
export const clearCreatedTributes = () => {
  return {
    type: CLEAR_SEARCHED_TRIBUTES
  }
}