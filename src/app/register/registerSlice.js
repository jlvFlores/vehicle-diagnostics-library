import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const registerRequest = createAsyncThunk('register/registerRequest', async (data) => axios.post(`${url}register`, data)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response) {
      if (error.response.status === 422) {
        return { message: 'Email address already exists' };
      }
    }
    throw error;
  }));

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: true,
    message: null,
    error: null,
  },
  reducers: {
    setMessage: (state, action) => ({
      ...state, message: action.payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(registerRequest.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(registerRequest.fulfilled, (state, action) => (action.payload.message
        ? { ...state, isLoading: false, message: action.payload.message }
        : { ...state, isLoading: false, message: 'Registration successful, please confirm your email before login in' }))
      .addCase(registerRequest.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { setMessage } = registerSlice.actions;
export default registerSlice.reducer;
