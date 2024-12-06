// rootReducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import categoryReducer from './Reducers/categoryReducer';
import productReducer from './Reducers/productReducer';
import archiReducer from './Reducers/archiReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product : productReducer,
  archi: archiReducer
  // Add other slices here
});

export default rootReducers;
