import { createSelector } from '@reduxjs/toolkit';

export const selectTodoSlice = (state: any) => state.todos;

export const selectAddTodoStatus = createSelector(
  selectTodoSlice,
  (todos) => todos.addStatus
);

export const selectTodoError = createSelector(
  selectTodoSlice,
  (todos) => todos.error
);

export const selectTodoItems = createSelector(
  selectTodoSlice,
  (todos) => todos.items
);
