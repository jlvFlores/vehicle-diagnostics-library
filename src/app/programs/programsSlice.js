import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  programs: [
    {
      id: 1,
      title: 'Program 1',
      description: 'This is program 1',
      file: 'example.rar',
    },
    {
      id: 2,
      title: 'Program 2',
      description: 'This is program 2',
      file: 'example.rar',
    },
  ],
  isLoading: false,
  error: null,
};

const programsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
});

export default programsSlice.reducer;
