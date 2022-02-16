import { createSelector } from '@reduxjs/toolkit';

export const selectRegisterState = (state: any) => state.register;

export const selectRegisterStatus = createSelector(
  selectRegisterState,
  (register) => register.status
);

export const selectRegisterError = createSelector(
  selectRegisterState,
  (register) => register.error
);
