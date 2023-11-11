// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { testsReduser } from './services/tests';

const rootReducer = combineReducers({
  testsReduser,
});

const store = configureStore({
  reducer: rootReducer, // Виправлено помилку в конфігурації об'єкта
});

export default store;
