import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../app/containers/Register/slice';
import authenticationReducer from '../app/containers/Login/slice';
import todoReducer from '../app/containers/Todos/slice';

import {
  getAccessTokenFromLocalStorage,
  getUserInfoFromLocalStorage,
} from '../utils/localStorage';

// import { apiSlice } from './apiSlice';
const userInfo = getUserInfoFromLocalStorage();
const accessToken = getAccessTokenFromLocalStorage();
let isAuthenticated = false;
let info;

if (userInfo && accessToken) {
  isAuthenticated = true;
  info = userInfo;
}

const initialState = {
  auth: {
    isAuthenticated: isAuthenticated,
    info: info,
    status: '',
    error: null,
  },
  register: {
    status: '',
    error: null,
  },
  todos: {
    items: [],
    addStatus: '',
    fetchStatus: '',
    error: null,
  },
};

const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authenticationReducer,
    todos: todoReducer,
  },
  preloadedState: initialState,
});

export default store;
