import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WEB_API } from '../../../configs/vars';

import { EActionStatus } from '../../../utils/constants';
import {
  getAccessTokenFromLocalStorage,
  getUserInfoFromLocalStorage,
} from '../../../utils/localStorage';

interface ITodo {
  _id: string;
  content: string;
  status: string;
}

const initialState: {
  items: ITodo[];
  addStatus: string;
  fetchStatus: string;
  error: any;
} = {
  items: [],
  addStatus: '',
  fetchStatus: '',
  error: null,
};

export const checkCompleteTodoThunk = createAsyncThunk(
  'todos/checkcomplete',
  async (todoId: any, { rejectWithValue }) => {
    const userInfo = getUserInfoFromLocalStorage();
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const response = await axios.patch(
        `${WEB_API}/user/${userInfo._id}/todos/${todoId}`,
        {
          isChecked: true,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const unCheckCompleteTodoThunk = createAsyncThunk(
  'todos/uncheckcomplete',
  async (todoId: any, { rejectWithValue }) => {
    const userInfo = getUserInfoFromLocalStorage();
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const response = await axios.patch(
        `${WEB_API}/user/${userInfo._id}/todos/${todoId}`,
        {
          isChecked: false,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(response);

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeTodoThunk = createAsyncThunk(
  'todos/removetodo',
  async (todoId: any, { rejectWithValue }) => {
    const userInfo = getUserInfoFromLocalStorage();
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const response = await axios.delete(
        `${WEB_API}/user/${userInfo._id}/todos/${todoId}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchTodosThunk = createAsyncThunk(
  'todos/fetchall',
  async (_: any, { rejectWithValue }) => {
    const userInfo = getUserInfoFromLocalStorage();
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const response = await axios.get(
        `${WEB_API}/user/${userInfo._id}/todos`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  'todos/add',
  async (todoName: any, { rejectWithValue }) => {
    const userInfo = getUserInfoFromLocalStorage();
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const response = await axios.post(
        `${WEB_API}/user/${userInfo._id}/todos`,
        { todoName },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const todoSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodoThunk.pending, (state, action) => {
        state.addStatus = EActionStatus.PENDING;
      })
      .addCase(addTodoThunk.fulfilled, (state, action: any) => {
        state.addStatus = EActionStatus.SUCCESS;
        state.items.push(action.payload.todo);
      })
      .addCase(addTodoThunk.rejected, (state, action: any) => {
        state.addStatus = EActionStatus.FAILED;
        state.error = action.payload.message;
      })
      .addCase(fetchTodosThunk.pending, (state, action: any) => {
        state.fetchStatus = EActionStatus.PENDING;
      })
      .addCase(fetchTodosThunk.fulfilled, (state, action: any) => {
        state.items = action.payload.todos;
        state.fetchStatus = EActionStatus.SUCCESS;
      })
      .addCase(fetchTodosThunk.rejected, (state, action: any) => {
        state.fetchStatus = EActionStatus.FAILED;
        state.error = action.payload.message;
      })
      .addCase(checkCompleteTodoThunk.fulfilled, (state, action: any) => {
        const checkedItem = state.items.find(
          (todoItem) => todoItem._id === action.payload.todo._id
        )!;
        const checkedItemIndex = state.items.findIndex(
          (todoItem) => todoItem._id === action.payload.todo._id
        );
        console.log(checkedItem, checkedItemIndex);

        checkedItem.status = 'COMPLETED';
        state.items[checkedItemIndex] = checkedItem;
      })
      .addCase(unCheckCompleteTodoThunk.fulfilled, (state, action: any) => {
        const checkedItem = state.items.find(
          (todoItem) => todoItem._id === action.payload.todo._id
        )!;
        const checkedItemIndex = state.items.findIndex(
          (todoItem) => todoItem._id === action.payload.todo._id
        );
        checkedItem.status = 'INPROGRESS';
        state.items[checkedItemIndex] = checkedItem;
      })
      .addCase(removeTodoThunk.fulfilled, (state, action: any) => {
        state.items = state.items.filter(
          (todoItem) => todoItem._id !== action.payload.todo._id
        );
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
