import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const loginRequest = createAsyncThunk('signIn/signInRequest', async (data) => {
  const response = await axios.post(`${url}login`, data);
  return {
    data: response.data,
    token: response.headers['authorization'],
  };
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    token: '',
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginRequest.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(loginRequest.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          token: action.payload.token,
      }))
      .addCase(loginRequest.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default signinSlice.reducer;
