import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  manuals: [
    {
      id: 1,
      title: 'Manual 1',
      description: 'This is manual 1',
      url: 'https://example.pdf',
    },
    {
      id: 2,
      title: 'Manual 2',
      description: 'This is manual 2',
      url: 'https://example.pdf',
    },
  ],
  isLoading: false,
  error: null,
};

const manualsSlice = createSlice({
  name: 'manuals',
  initialState,
  reducers: {},
});

export default manualsSlice.reducer;
