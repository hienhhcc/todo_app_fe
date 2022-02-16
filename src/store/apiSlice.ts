import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userCres) => ({
        url: '/user/auth/register',
        method: 'POST',
        body: userCres,
      }),
    }),
  }),
});

export const { useRegisterMutation } = apiSlice;
