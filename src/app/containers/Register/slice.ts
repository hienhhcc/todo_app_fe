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
export const registerThunk = createAsyncThunk(
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
  reducers: {
    reset(state, action: any) {
      state.status = '';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.status = EActionStatus.PENDING;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        console.log('SUCCESS');
        state.status = EActionStatus.SUCCESS;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = EActionStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { reset } = registerSlice.actions;

export default registerSlice.reducer;
