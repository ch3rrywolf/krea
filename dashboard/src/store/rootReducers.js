// rootReducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import categoryReducer from './Reducers/categoryReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  category: categoryReducer
  // Add other slices here
});

export default rootReducers;
