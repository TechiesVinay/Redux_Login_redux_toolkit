// src/store/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'; 

const rootReducer = combineReducers({
  auth: authReducer, // Changed the names to be more descriptive
});

export default rootReducer;
