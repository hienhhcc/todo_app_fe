import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EActionStatus } from '../../../utils/constants';

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
  async (userCres: any) => {
    const response = await axios.post(
      'http://localhost:8000/user/auth/login',
      userCres
    );
    console.log(response);

    return response.data;
  }
);

export const authenticationSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = EActionStatus.PENDING;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action.payload);

        state.status = EActionStatus.SUCCESS;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = EActionStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const {} = authenticationSlice.actions;

export default authenticationSlice.reducer;
