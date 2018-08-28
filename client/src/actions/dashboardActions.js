import axios from 'axios';

import { GET_CREATED_TRIBUTES, CREATED_TRIBUTES_LOADING, GET_ERRORS, CLEAR_CREATED_TRIBUTES } from './types';

// get created tributes
export const getCreatedTributes = () => dispatch => {
  dispatch(setCreatedTributesLoading());
  axios.get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_CREATED_TRIBUTES,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_CREATED_TRIBUTES,
        payload: {}
      })
    )
}

// created tributes loading
export const setCreatedTributesLoading = () => {
  return {
    type: CREATED_TRIBUTES_LOADING
  }
}

// clear created tributes
export const clearCreatedTributes = () => {
  return {
    type: CLEAR_CREATED_TRIBUTES
  }
}