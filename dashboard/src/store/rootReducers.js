// rootReducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import categoryReducer from './Reducers/categoryReducer';
import productReducer from './Reducers/productReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product : productReducer
  // Add other slices here
});

export default rootReducers;
