import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MzI5NmRiMi1jZjBkLTRkOGUtYjljZC04NmIzYmUyN2JlY2IiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjk1NDA0MTA5LCJleHAiOjE2OTU0MDU5MDl9.jEzP2kwezoSuZEc_r4SW_mQqmrX3kkfYulFvbjlXXHo',
};

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  const url = 'http://127.0.0.1:4000/';
  try {
    const content = [];

    const coursesResp = await axios.get(`${url}courses`, { headers });
    const manualsResp = await axios.get(`${url}manuals`, { headers });
    const programsResp = await axios.get(`${url}programs`, { headers });

    content.push({
      courses: coursesResp.data,
      manuals: manualsResp.data,
      programs: programsResp.data,
    });

    return content[0];
  } catch (error) {
    return error.message;
  }
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
