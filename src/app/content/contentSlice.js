import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../requestKeys.json';

export const fetchContent = createAsyncThunk('content/fetchContent', async (headers) => {
  const contentResp = await axios.get(`${url}content`, { headers });
  return contentResp.data;
});

const initialState = {
  courses: [],
  manuals: [],
  programs: [],
  isLoading: true,
  error: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContent.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(fetchContent.fulfilled, (state, action) => {
        const { courses, manuals, programs } = action.payload;
        const updateIDs = (array, prefix) => array.map((object, index) => ({
          ...object,
          id: `${prefix}${index + 1}`,
        }));

        return ({
          ...state,
          isLoading: false,
          courses: updateIDs(courses, 'C'),
          manuals: updateIDs(manuals, 'M'),
          programs: updateIDs(programs, 'P'),
        });
      })
      .addCase(fetchContent.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default contentSlice.reducer;
