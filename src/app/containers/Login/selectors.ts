import { createSelector } from '@reduxjs/toolkit';

export const selectAuthenticationSlice = (state: any) => state.auth;

export const selectAuthenticationStatus = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.status
);

export const selectAuthenticationError = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.error
);

export const selectAuthenticationUserInfo = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.info
);

export const selectIsAuthenticated = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.isAuthenticated
);
