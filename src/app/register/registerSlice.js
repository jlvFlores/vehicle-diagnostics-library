import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const registerRequest = createAsyncThunk('register/registerRequest', async (data) => {
  const response = await axios.post(`${url}register`, data);

  return response.data;
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerRequest.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(registerRequest.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(registerRequest.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export default registerSlice.reducer;
