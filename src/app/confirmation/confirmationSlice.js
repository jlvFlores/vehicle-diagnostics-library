import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const confirmationRequest = createAsyncThunk('confirmation/confirmationRequest', async ({ confirmationToken }) => {
  const response = await axios.get(`${url}confirmation?confirmation_token=${confirmationToken}`);
  return response.status;
});

const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState: {
    status: 0,
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(confirmationRequest.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(confirmationRequest.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        status: action.payload,
      }))
      .addCase(confirmationRequest.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        status: 422,
        error: action.payload,
      }));
  },
});

export default confirmationSlice.reducer;
