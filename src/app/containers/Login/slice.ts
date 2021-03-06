import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EActionStatus } from '../../../utils/constants';
import {
  removeAccessTokenFromLocalStorage,
  removeUserInfoFromLocalStorage,
  setAccessTokenIntoLocalStorage,
  setUserInfoIntoLocalStorage,
} from '../../../utils/localStorage';
import { WEB_API } from '../../../configs/vars';

const initialState: {
  status: string;
  error: null | undefined | string;
  isAuthenticated: boolean;
  info: any;
} = {
  isAuthenticated: false,
  info: null,
  status: '',
  error: null,
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userCres: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${WEB_API}/user/auth/login`, userCres);

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const authenticationSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    reset(state, action) {
      state.status = '';
      state.error = null;
    },
    logout(state, action) {
      console.log('In logout');
      removeUserInfoFromLocalStorage();
      removeAccessTokenFromLocalStorage();

      state.isAuthenticated = false;
      state.info = null;
      state.status = '';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = EActionStatus.PENDING;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { user, token } = action.payload;

        setUserInfoIntoLocalStorage(user);
        setAccessTokenIntoLocalStorage(token);

        state.status = EActionStatus.SUCCESS;
        state.isAuthenticated = true;
        state.info = user;
      })
      .addCase(loginThunk.rejected, (state, action: any) => {
        console.log(action);

        state.status = EActionStatus.FAILED;
        state.error = action.payload.message;
      });
  },
});

export const { reset, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
