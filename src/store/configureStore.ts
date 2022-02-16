import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../app/containers/Register/slice';

// import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export default store;
