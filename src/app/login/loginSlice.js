import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const loginRequest = createAsyncThunk('login/loginRequest', async (data) => {
  const response = await axios.post(`${url}login`, data);

  return response.headers.authorization;
});

export const logoutRequest = createAsyncThunk('login/logoutRequest', async (token) => {
  axios.delete(`${url}logout`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isLoggedIn: false,
    isLoading: true,
    error: null,
  },
  reducers: {
    setIsLoggedIn: (state, action) => ({
      ...state, isLoggedIn: action.payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(loginRequest.pending, (state) => ({
        ...state,
        isLoggedIn: false,
        isLoading: true,
      }))
      .addCase(loginRequest.fulfilled, (state, action) => ({
        ...state,
        token: action.payload,
        isLoggedIn: true,
        isLoading: false,
      }))
      .addCase(loginRequest.rejected, (state, action) => ({
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { setIsLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
