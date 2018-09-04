import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import dashboardReducer from './dashboardReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  createdTributes: dashboardReducer,
  searchedTributes: searchReducer
});
