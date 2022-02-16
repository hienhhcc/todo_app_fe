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

export const authenticationSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
});

export const {} = authenticationSlice.actions;

export default authenticationSlice.reducer;
