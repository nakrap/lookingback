import axios from 'axios';

import { 
  GET_PROFILE, 
  GET_PROFILES,
  PROFILE_LOADING, 
  CLEAR_CURRENT_PROFILE, 
  GET_ERRORS,
  SET_CURRENT_USER,
  ADD_POST,
} from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
}

// get profile by id
export const getProfileById = (id) => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`/api/profile/id/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
}

// create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// delete account & profile
export const deleteAccount = () => dispatch => {
  if(window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      ).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );

  }
}

// profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// add post
export const addPost = postData => dispatch => {
  axios
    .post('/api/posts', postData)
    .then(res => 
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};