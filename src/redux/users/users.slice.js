import { createSlice } from '@reduxjs/toolkit';
import { getUsers, deleteUser } from './users.operations';
console.log(getUsers);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export default usersSlice.reducer;
