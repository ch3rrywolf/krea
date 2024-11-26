// rootReducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  // Add other slices here
});

export default rootReducers;
