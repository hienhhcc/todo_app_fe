import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../app/containers/Register/slice';
import authenticationReducer from '../app/containers/Login/slice';

// import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authenticationReducer,
  },
});

export default store;
