import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export default contentSlice.reducer;