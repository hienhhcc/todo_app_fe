import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EActionStatus } from '../../../utils/constants';

const initialState: {
  status: string;
  error: null | undefined | string;
} = {
  status: '',
  error: null,
};

//* Register thunk
export const register = createAsyncThunk(
  'register/register',
  async (userCres: any) => {
    const response = await axios.post(
      'http://localhost:8000/user/auth/register',
      userCres
    );
    console.log(response);

    return response.data;
  }
);

export const registerSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state, action) => {
        state.status = EActionStatus.PENDING;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log('SUCCESS');
        state.status = EActionStatus.SUCCESS;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = EActionStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
