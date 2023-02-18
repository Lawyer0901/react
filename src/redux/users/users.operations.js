import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f0c8ce5b7cf4107e26c18b.mockapi.io';

export const getUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'delete/fetchDelete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
