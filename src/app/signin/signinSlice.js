import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const signinRequest = createAsyncThunk('signIn/signInRequest', async ({ route, data }) => {
  const response = await axios.post(`${url}${route}`, data);

  return response.headers.authorization;
});

export const logoutRequest = createAsyncThunk('signIn/logoutRequest', async (token) => {
  axios.delete(`${url}logout`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  sessionStorage.clear();
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    isSignedIn: !!sessionStorage.getItem('token'),
    isLoading: true,
    error: null,
  },
  reducers: {
    setIsSignedIn: (state, action) => ({
      ...state, isSignedIn: action.payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(signinRequest.pending, (state) => ({
        ...state,
        isSignedIn: false,
        isLoading: true,
      }))
      .addCase(signinRequest.fulfilled, (state, action) => {
        sessionStorage.setItem('token', action.payload);
        return ({
          ...state,
          token: action.payload,
          isSignedIn: true,
          isLoading: false,
        }
        );
      })
      .addCase(signinRequest.rejected, (state, action) => ({
        ...state,
        isSignedIn: false,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { setIsSignedIn } = signinSlice.actions;
export default signinSlice.reducer;
