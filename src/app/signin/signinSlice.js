import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const signinRequest = createAsyncThunk('signIn/signInRequest', async ({ route, data }) => {
  const response = await axios.post(`${url}${route}`, data);

  return response.headers.authorization;
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    signedIn: false,
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signinRequest.pending, (state) => ({
        ...state,
        isLoading: true,
        signedIn: false,
      }))
      .addCase(signinRequest.fulfilled, (state, action) => {
        sessionStorage.setItem('token', action.payload);
        return ({
          ...state,
          isLoading: false,
          signedIn: true,
        });
      })
      .addCase(signinRequest.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        signedIn: false,
        error: action.payload,
      }));
  },
});

export default signinSlice.reducer;
