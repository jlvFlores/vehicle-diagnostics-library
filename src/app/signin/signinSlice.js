import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const signinRequest = createAsyncThunk('signIn/signInRequest', async ({route, data}) => {
  const response = await axios.post(`${url}${route}`, data);

  if (route === 'login') {
    return {
      data: response.data,
      token: response.headers.authorization,
    };
  } else {
    return response.data;
  }
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
      .addCase(signinRequest.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(signinRequest.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        token: action.payload.token,
      }))
      .addCase(signinRequest.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default signinSlice.reducer;
