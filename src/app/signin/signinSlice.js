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
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signinRequest.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(signinRequest.fulfilled, (state, action) => {
        sessionStorage.setItem("token", action.payload);
        return ({
          ...state,
          isLoading: false,
        })
      })
      .addCase(signinRequest.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default signinSlice.reducer;
